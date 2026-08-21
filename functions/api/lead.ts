interface LeadEnv {
  LEAD_WEBHOOK_URL?: string;
  LEAD_DELIVERY_MODE?: string;
}

type SubmissionType = 'homeowner_project_brief' | 'contractor_partner_application' | 'contact_inquiry';
interface Submission { submissionType: SubmissionType; fields: Record<string, string>; attribution: Record<string, string>; sourcePage: string; honeypot: string; }
interface ErrorResponse { ok: false; message: string; errors?: Record<string, string>; }
interface SuccessResponse { ok: true; message: string; submissionType: SubmissionType; }

const ALLOWED_TYPES: SubmissionType[] = ['homeowner_project_brief', 'contractor_partner_application', 'contact_inquiry'];
const ATTRIBUTION_FIELDS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'gclid', 'gbraid', 'wbraid', 'msclkid'] as const;
const json = (status: number, payload: SuccessResponse | ErrorResponse) => new Response(JSON.stringify(payload), { status, headers: { 'cache-control': 'no-store', 'content-type': 'application/json; charset=utf-8' } });
const cleanLine = (value: unknown, max = 240) => String(value ?? '').trim().replace(/\s+/g, ' ').slice(0, max);
const cleanText = (value: unknown, max = 3000) => String(value ?? '').replace(/\r\n/g, '\n').trim().slice(0, max);
const cleanSourcePage = (value: unknown) => {
  const source = cleanLine(value, 500);
  if (source.startsWith('/')) return source;
  try { return new URL(source).pathname || '/'; } catch { return '/'; }
};
const validEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const validZip = (value: string) => /^\d{5}(?:-\d{4})?$/.test(value);

const parseRequest = async (request: Request): Promise<Record<string, unknown> | null> => {
  const contentType = request.headers.get('content-type') || '';
  if (contentType.includes('application/json')) return (await request.json()) as Record<string, unknown>;
  if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) return Object.fromEntries(await request.formData());
  return null;
};

const normalize = (raw: Record<string, unknown>): Submission => {
  const submissionType = cleanLine(raw.submissionType) as SubmissionType;
  const fields: Record<string, string> = {};
  for (const [key, value] of Object.entries(raw)) {
    if (['submissionType', 'sourcePage', 'faxNumber', ...ATTRIBUTION_FIELDS].includes(key)) continue;
    fields[key] = ['message', 'serviceAreas', 'specialties'].includes(key) ? cleanText(value) : cleanLine(value);
  }
  const attribution = Object.fromEntries(ATTRIBUTION_FIELDS.map((key) => [key, cleanLine(raw[key], 300)]).filter(([, value]) => value));
  return { submissionType, fields, attribution, sourcePage: cleanSourcePage(raw.sourcePage), honeypot: cleanLine(raw.faxNumber) };
};

const requireFields = (fields: Record<string, string>, names: string[], errors: Record<string, string>) => {
  for (const name of names) if (!fields[name]) errors[name] = 'This field is required.';
};

const validate = ({ fields, submissionType }: Submission) => {
  const errors: Record<string, string> = {};
  if (!ALLOWED_TYPES.includes(submissionType)) return { form: 'This submission type is not supported.' };
  if (submissionType === 'homeowner_project_brief') {
    requireFields(fields, ['name', 'email', 'phone', 'city', 'zipCode', 'yardSize', 'projectType', 'timing', 'message', 'sharingConsent'], errors);
    if (fields.zipCode && !validZip(fields.zipCode)) errors.zipCode = 'Enter a valid 5-digit ZIP code.';
    if (fields.sharingConsent !== 'yes') errors.sharingConsent = 'Consent is required before SGV Turf can share this brief.';
  } else if (submissionType === 'contractor_partner_application') {
    requireFields(fields, ['businessName', 'contactName', 'email', 'phone', 'serviceAreas', 'specialties', 'licenseStatus', 'materialsPermission', 'caseStudyPermission'], errors);
    if (fields.materialsPermission !== 'yes') errors.materialsPermission = 'Permission is required to display submitted business materials.';
    if (fields.caseStudyPermission !== 'yes') errors.caseStudyPermission = 'Please confirm the anonymized campaign-outcome expectation.';
  } else {
    requireFields(fields, ['name', 'email', 'message'], errors);
  }
  if (fields.email && !validEmail(fields.email)) errors.email = 'Enter a valid email address.';
  return errors;
};

const deliver = async (submission: Submission, request: Request, env: LeadEnv) => {
  const hostname = new URL(request.url).hostname;
  if (env.LEAD_DELIVERY_MODE === 'local_log' && ['localhost', '127.0.0.1'].includes(hostname)) {
    console.log('Local submission mock accepted', { submissionType: submission.submissionType, sourcePage: submission.sourcePage });
    return;
  }
  if (!env.LEAD_WEBHOOK_URL) throw new Error('DELIVERY_NOT_CONFIGURED');
  const { honeypot: _honeypot, ...payload } = submission;
  const response = await fetch(env.LEAD_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ submittedAt: new Date().toISOString(), ...payload }),
    signal: AbortSignal.timeout(10_000),
  });
  if (!response.ok) throw new Error(`DELIVERY_FAILED_${response.status}`);
};

export const onRequest: PagesFunction<LeadEnv> = async ({ request, env }) => {
  if (request.method !== 'POST') return new Response(JSON.stringify({ ok: false, message: 'Method not allowed.' }), { status: 405, headers: { allow: 'POST', 'content-type': 'application/json; charset=utf-8' } });
  let raw: Record<string, unknown> | null;
  try { raw = await parseRequest(request); } catch { return json(400, { ok: false, message: 'We could not read that submission.' }); }
  if (!raw) return json(415, { ok: false, message: 'Please submit this form from the SGV Turf site.' });
  const submission = normalize(raw);
  if (submission.honeypot) return json(200, { ok: true, message: 'Submission received.', submissionType: ALLOWED_TYPES.includes(submission.submissionType) ? submission.submissionType : 'contact_inquiry' });
  const errors = validate(submission);
  if (Object.keys(errors).length) return json(400, { ok: false, message: 'Please review the highlighted fields.', errors });
  try { await deliver(submission, request, env); } catch (error) {
    const notConfigured = error instanceof Error && error.message === 'DELIVERY_NOT_CONFIGURED';
    return json(503, { ok: false, message: notConfigured ? 'Online delivery is not configured yet. Your information was not saved or sent. Please try again after SGV Turf confirms the intake channel.' : 'The intake service could not confirm delivery. Your submission was not marked received; please try again.' });
  }
  const message = submission.submissionType === 'contractor_partner_application'
    ? 'Application delivered to SGV Turf. We will review the business information you provided.'
    : submission.submissionType === 'homeowner_project_brief'
      ? 'Project brief delivered to SGV Turf. Any contractor sharing will follow your disclosed consent.'
      : 'Message delivered to SGV Turf.';
  return json(200, { ok: true, message, submissionType: submission.submissionType });
};
