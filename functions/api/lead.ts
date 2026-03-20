interface LeadEnv {
  TURNSTILE_SECRET_KEY?: string;
  LEAD_WEBHOOK_URL?: string;
}

interface LeadSubmission {
  name: string;
  email: string;
  phone: string;
  city: string;
  projectType: string;
  lawnSize: string;
  message: string;
  sourcePage: string;
  honeypot: string;
  turnstileToken: string;
}

interface LeadValidationErrors {
  form?: string;
  name?: string;
  email?: string;
  city?: string;
  projectType?: string;
}

interface LeadSuccessResponse {
  ok: true;
  message: string;
  redirectTo: string;
  lead: Pick<
    LeadSubmission,
    'name' | 'email' | 'phone' | 'city' | 'projectType' | 'lawnSize' | 'message' | 'sourcePage'
  >;
}

interface LeadErrorResponse {
  ok: false;
  message: string;
  errors?: LeadValidationErrors;
}

interface RateLimitResult {
  allowed: boolean;
  key: string;
}

const json = (status: number, payload: LeadSuccessResponse | LeadErrorResponse) =>
  new Response(JSON.stringify(payload), {
    status,
    headers: {
      'cache-control': 'no-store',
      'content-type': 'application/json; charset=utf-8',
    },
  });

const isAllowedContentType = (contentType: string | null) =>
  Boolean(
    contentType &&
      ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'].some(
        (allowedType) => contentType.includes(allowedType),
      ),
  );

const normalizeSingleLine = (value: unknown) =>
  String(value ?? '')
    .trim()
    .replace(/\s+/g, ' ');

const normalizeMultiLine = (value: unknown) =>
  String(value ?? '')
    .replace(/\r\n/g, '\n')
    .split('\n')
    .map((line) => line.trim())
    .join('\n')
    .trim();

const normalizeSourcePage = (value: unknown) => {
  const normalized = normalizeSingleLine(value);

  if (!normalized) {
    return '/';
  }

  if (normalized.startsWith('/')) {
    return normalized;
  }

  try {
    const parsed = new URL(normalized);
    return parsed.pathname || '/';
  } catch {
    return '/';
  }
};

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const parseBody = async (request: Request) => {
  const contentType = request.headers.get('content-type');

  if (!isAllowedContentType(contentType)) {
    return null;
  }

  if (contentType?.includes('application/json')) {
    const payload = (await request.json()) as Record<string, unknown>;
    return payload;
  }

  const formData = await request.formData();
  return Object.fromEntries(
    Array.from(formData.entries()).map(([key, value]) => [key, typeof value === 'string' ? value : '']),
  );
};

const normalizeLeadSubmission = (raw: Record<string, unknown>): LeadSubmission => ({
  name: normalizeSingleLine(raw.name),
  email: normalizeSingleLine(raw.email).toLowerCase(),
  phone: normalizeSingleLine(raw.phone),
  city: normalizeSingleLine(raw.city),
  projectType: normalizeSingleLine(raw.projectType),
  lawnSize: normalizeSingleLine(raw.lawnSize || raw.projectSize),
  message: normalizeMultiLine(raw.message),
  sourcePage: normalizeSourcePage(raw.sourcePage),
  honeypot: normalizeSingleLine(raw.company),
  turnstileToken: normalizeSingleLine(raw.turnstileToken),
});

const validateLeadSubmission = (lead: LeadSubmission) => {
  const errors: LeadValidationErrors = {};

  if (!lead.name) {
    errors.name = 'Please enter your name.';
  }

  if (!lead.email) {
    errors.email = 'Please enter your email.';
  } else if (!isValidEmail(lead.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!lead.city) {
    errors.city = 'Please choose your city.';
  }

  if (!lead.projectType) {
    errors.projectType = 'Please choose a project type.';
  }

  return errors;
};

const buildRateLimitKey = (request: Request, lead: LeadSubmission) => {
  const clientIp = request.headers.get('cf-connecting-ip') || 'unknown';
  const currentHour = new Date().toISOString().slice(0, 13);
  return `lead:${clientIp}:${lead.sourcePage}:${currentHour}`;
};

const checkRateLimit = async (request: Request, lead: LeadSubmission): Promise<RateLimitResult> => {
  const key = buildRateLimitKey(request, lead);

  // Placeholder for KV- or Durable Object-backed rate limiting.
  return { allowed: true, key };
};

const verifyTurnstileToken = async (lead: LeadSubmission, env: LeadEnv) => {
  if (!lead.turnstileToken || !env.TURNSTILE_SECRET_KEY) {
    return { success: true, skipped: true };
  }

  // make call
  return { success: true, skipped: false };
};
const forwardLead = async (
  lead: LeadSubmission,
  env: LeadEnv,
  rateLimitKey: string,
) => {
  if (!env.LEAD_WEBHOOK_URL) {
    console.log('Lead received but no webhook configured', {
      rateLimitKey,
      lead,
    });
    return;
  }

  const response = await fetch(env.LEAD_WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      submittedAt: new Date().toISOString(),
      rateLimitKey,
      name: lead.name,
      email: lead.email,
      phone: lead.phone,
      city: lead.city,
      projectType: lead.projectType,
      lawnSize: lead.lawnSize,
      message: lead.message,
      sourcePage: lead.sourcePage,
    }),
  });

  if (!response.ok) {
    throw new Error(`Lead webhook failed with status ${response.status}`);
  }
};

  // Placeholder for future email, webhook, D1, KV, or CRM integrations.
};

export const onRequest: PagesFunction<LeadEnv> = async (context) => {
  const { request, env } = context;

  if (request.method !== 'POST') {
    return new Response(
      JSON.stringify({
        ok: false,
        message: 'Method not allowed.',
      } satisfies LeadErrorResponse),
      {
        status: 405,
        headers: {
          allow: 'POST',
          'content-type': 'application/json; charset=utf-8',
        },
      },
    );
  }

  if (!isAllowedContentType(request.headers.get('content-type'))) {
    return json(415, {
      ok: false,
      message: 'Unsupported content type.',
      errors: {
        form: 'Please submit the form from the SGV Turf site.',
      },
    });
  }

  let rawPayload: Record<string, unknown> | null = null;

  try {
    rawPayload = await parseBody(request);
  } catch {
    return json(400, {
      ok: false,
      message: 'We could not read that submission.',
      errors: {
        form: 'Please review the form and try again.',
      },
    });
  }

  if (!rawPayload) {
    return json(400, {
      ok: false,
      message: 'Missing form payload.',
      errors: {
        form: 'Please submit the inquiry form from the site.',
      },
    });
  }

  const lead = normalizeLeadSubmission(rawPayload);

  if (lead.honeypot) {
    return json(200, {
      ok: true,
      message: 'Submission received.',
      redirectTo: '/thanks',
      lead: {
        name: '',
        email: '',
        phone: '',
        city: '',
        projectType: '',
        lawnSize: '',
        message: '',
        sourcePage: lead.sourcePage,
      },
    });
  }

  const validationErrors = validateLeadSubmission(lead);

  if (Object.keys(validationErrors).length > 0) {
    return json(400, {
      ok: false,
      message: 'Please review the highlighted fields.',
      errors: validationErrors,
    });
  }

  const rateLimit = await checkRateLimit(request, lead);

  if (!rateLimit.allowed) {
    return json(429, {
      ok: false,
      message: 'Too many submissions from this device right now.',
      errors: {
        form: 'Please wait a little and try again.',
      },
    });
  }

  const turnstile = await verifyTurnstileToken(lead, env);

  if (!turnstile.success) {
    return json(400, {
      ok: false,
      message: 'We could not validate that submission.',
      errors: {
        form: 'Please refresh the page and try again.',
      },
    });
  }

  await forwardLead(lead, env, rateLimit.key);

  return json(200, {
    ok: true,
    message: 'Lead received.',
    redirectTo: '/thanks',
    lead: {
      name: lead.name,
      email: lead.email,
      phone: lead.phone,
      city: lead.city,
      projectType: lead.projectType,
      lawnSize: lead.lawnSize,
      message: lead.message,
      sourcePage: lead.sourcePage,
    },
  });
};
