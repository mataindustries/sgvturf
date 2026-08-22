interface LeadEnv {
  LEAD_WEBHOOK_URL?: string;
  LEAD_DELIVERY_MODE?: string;
}

type SubmissionType = 'homeowner' | 'contractor' | 'contact';

interface NormalizedSubmission {
  payload: Omit<WebhookPayload, 'submittedAt'>;
  honeypot: string;
}

interface WebhookPayload {
  submittedAt: string;
  submissionType: SubmissionType;
  name: string;
  email: string;
  phone: string;
  city: string;
  businessName: string;
  projectType: string;
  lawnSize: string;
  serviceAreas: string;
  specialties: string;
  licenseNumber: string;
  message: string;
  source: string;
  medium: string;
  campaign: string;
  content: string;
  term: string;
  landingPage: string;
  referrer: string;
  zipCode: string;
  timing: string;
  website: string;
  photoLinks: string;
  sharingConsent: string;
  materialsPermission: string;
  responseCommitment: string;
  caseStudyPermission: string;
  gclid: string;
  gbraid: string;
  wbraid: string;
  msclkid: string;
}

interface ErrorResponse { ok: false; message: string; errors?: Record<string, string>; }
interface SuccessResponse { ok: true; message: string; submissionType: SubmissionType; }

const json = (status: number, payload: SuccessResponse | ErrorResponse) =>
  new Response(JSON.stringify(payload), {
    status,
    headers: { 'cache-control': 'no-store', 'content-type': 'application/json; charset=utf-8' },
  });

const cleanLine = (value: unknown, max = 240) =>
  String(value ?? '').trim().replace(/\s+/g, ' ').slice(0, max);
const cleanText = (value: unknown, max = 3000) =>
  String(value ?? '').replace(/\r\n/g, '\n').trim().slice(0, max);
const cleanPath = (value: unknown) => {
  const candidate = cleanLine(value, 500);
  if (candidate.startsWith('/')) return candidate.split(/[?#]/)[0] || '/';
  try { return new URL(candidate).pathname || '/'; } catch { return '/'; }
};
const cleanReferrer = (value: unknown) => {
  const candidate = cleanLine(value, 500);
  if (!candidate) return '';
  if (candidate.startsWith('/')) return candidate.split(/[?#]/)[0];
  try {
    const url = new URL(candidate);
    return `${url.origin}${url.pathname}`;
  } catch {
    return '';
  }
};
const validEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const validZip = (value: string) => /^\d{5}(?:-\d{4})?$/.test(value);

const parseRequest = async (request: Request): Promise<Record<string, unknown> | null> => {
  const contentType = request.headers.get('content-type') || '';
  if (contentType.includes('application/json')) return (await request.json()) as Record<string, unknown>;
  if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
    return Object.fromEntries(await request.formData());
  }
  return null;
};

const normalizeSubmissionType = (value: unknown): SubmissionType | '' => {
  const type = cleanLine(value);
  if (type === 'homeowner' || type === 'homeowner_project_brief') return 'homeowner';
  if (type === 'contractor' || type === 'contractor_partner_application') return 'contractor';
  if (type === 'contact' || type === 'contact_inquiry') return 'contact';
  return '';
};

const normalize = (raw: Record<string, unknown>): NormalizedSubmission => {
  const submissionType = normalizeSubmissionType(raw.submissionType) || 'contact';
  const isHomeowner = submissionType === 'homeowner';
  const isContractor = submissionType === 'contractor';

  return {
    payload: {
      submissionType,
      name: cleanLine(isContractor ? raw.contactName : raw.name, 120),
      email: cleanLine(raw.email, 200).toLowerCase(),
      phone: cleanLine(raw.phone, 40),
      city: cleanLine(raw.city, 120),
      businessName: isContractor ? cleanLine(raw.businessName, 180) : '',
      projectType: isHomeowner ? cleanLine(raw.projectType, 180) : '',
      lawnSize: isHomeowner ? cleanLine(raw.lawnSize || raw.yardSize, 120) : '',
      serviceAreas: isContractor ? cleanText(raw.serviceAreas, 1200) : '',
      specialties: isContractor ? cleanText(raw.specialties, 1200) : '',
      licenseNumber: isContractor ? cleanLine(raw.licenseNumber || raw.licenseStatus, 240) : '',
      message: cleanText(raw.message),
      source: cleanLine(raw.source || raw.utm_source, 300),
      medium: cleanLine(raw.medium || raw.utm_medium, 300),
      campaign: cleanLine(raw.campaign || raw.utm_campaign, 300),
      content: cleanLine(raw.content || raw.utm_content, 300),
      term: cleanLine(raw.term || raw.utm_term, 300),
      landingPage: cleanPath(raw.landingPage || raw.sourcePage),
      referrer: cleanReferrer(raw.referrer),
      zipCode: isHomeowner ? cleanLine(raw.zipCode, 10) : '',
      timing: isHomeowner ? cleanLine(raw.timing, 120) : '',
      website: isContractor ? cleanLine(raw.website, 300) : '',
      photoLinks: isContractor ? cleanText(raw.photoLinks, 2000) : '',
      sharingConsent: isHomeowner ? cleanLine(raw.sharingConsent, 20) : '',
      materialsPermission: isContractor ? cleanLine(raw.materialsPermission, 20) : '',
      responseCommitment: isContractor ? cleanLine(raw.responseCommitment, 20) : '',
      caseStudyPermission: isContractor ? cleanLine(raw.caseStudyPermission, 20) : '',
      gclid: cleanLine(raw.gclid, 300),
      gbraid: cleanLine(raw.gbraid, 300),
      wbraid: cleanLine(raw.wbraid, 300),
      msclkid: cleanLine(raw.msclkid, 300),
    },
    honeypot: cleanLine(raw.faxNumber),
  };
};

const requireFields = (
  payload: Omit<WebhookPayload, 'submittedAt'>,
  names: Array<keyof Omit<WebhookPayload, 'submittedAt'>>,
  errors: Record<string, string>,
) => {
  for (const name of names) if (!payload[name]) errors[name] = 'This field is required.';
};

const validate = (payload: Omit<WebhookPayload, 'submittedAt'>, rawType: unknown) => {
  const errors: Record<string, string> = {};
  if (!normalizeSubmissionType(rawType)) return { form: 'This submission type is not supported.' };
  if (payload.submissionType === 'homeowner') {
    requireFields(payload, ['name', 'email', 'phone', 'city', 'zipCode', 'lawnSize', 'projectType', 'timing', 'message', 'sharingConsent'], errors);
    if (payload.zipCode && !validZip(payload.zipCode)) errors.zipCode = 'Enter a valid 5-digit ZIP code.';
    if (payload.sharingConsent !== 'yes') errors.sharingConsent = 'Consent is required before SGV Turf can share this brief.';
  } else if (payload.submissionType === 'contractor') {
    requireFields(payload, ['businessName', 'name', 'email', 'phone', 'serviceAreas', 'specialties', 'licenseNumber', 'materialsPermission', 'responseCommitment', 'caseStudyPermission'], errors);
    if (payload.materialsPermission !== 'yes') errors.materialsPermission = 'Permission is required to display submitted business materials.';
    if (payload.responseCommitment !== 'yes') errors.responseCommitment = 'Please confirm the prompt-response expectation.';
    if (payload.caseStudyPermission !== 'yes') errors.caseStudyPermission = 'Please confirm the anonymized campaign-outcome expectation.';
  } else {
    requireFields(payload, ['name', 'email', 'message'], errors);
  }
  if (payload.email && !validEmail(payload.email)) errors.email = 'Enter a valid email address.';
  return errors;
};

const deliver = async (payload: Omit<WebhookPayload, 'submittedAt'>, request: Request, env: LeadEnv) => {
  const hostname = new URL(request.url).hostname;
  if (env.LEAD_DELIVERY_MODE === 'local_log' && ['localhost', '127.0.0.1'].includes(hostname)) {
    console.log('Local submission mock accepted', { submissionType: payload.submissionType, landingPage: payload.landingPage });
    return;
  }
  if (!env.LEAD_WEBHOOK_URL) throw new Error('DELIVERY_NOT_CONFIGURED');
  const webhookPayload: WebhookPayload = { submittedAt: new Date().toISOString(), ...payload };
  const response = await fetch(env.LEAD_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(webhookPayload),
    signal: AbortSignal.timeout(10_000),
  });
  if (!response.ok) throw new Error(`DELIVERY_FAILED_${response.status}`);
};

export const onRequest: PagesFunction<LeadEnv> = async ({ request, env }) => {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ ok: false, message: 'Method not allowed.' }), {
      status: 405,
      headers: { allow: 'POST', 'content-type': 'application/json; charset=utf-8' },
    });
  }

  let raw: Record<string, unknown> | null;
  try { raw = await parseRequest(request); } catch {
    return json(400, { ok: false, message: 'We could not read that submission.' });
  }
  if (!raw) return json(415, { ok: false, message: 'Please submit this form from the SGV Turf site.' });

  const submission = normalize(raw);
  if (submission.honeypot) {
    return json(200, { ok: true, message: 'Submission received.', submissionType: submission.payload.submissionType });
  }

  const errors = validate(submission.payload, raw.submissionType);
  if (Object.keys(errors).length) {
    return json(400, { ok: false, message: 'Please review the highlighted fields.', errors });
  }

  try { await deliver(submission.payload, request, env); } catch (error) {
    const notConfigured = error instanceof Error && error.message === 'DELIVERY_NOT_CONFIGURED';
    return json(503, {
      ok: false,
      message: notConfigured
        ? 'Online delivery is not configured yet. Your information was not saved or sent. Please try again after SGV Turf confirms the intake channel.'
        : 'The intake service could not confirm delivery. Your submission was not marked received; please try again.',
    });
  }

  const message = submission.payload.submissionType === 'contractor'
    ? 'Application delivered to SGV Turf. We will review the business information you provided.'
    : submission.payload.submissionType === 'homeowner'
      ? 'Project brief delivered to SGV Turf. Any contractor sharing will follow your disclosed consent.'
      : 'Message delivered to SGV Turf.';
  return json(200, { ok: true, message, submissionType: submission.payload.submissionType });
};
