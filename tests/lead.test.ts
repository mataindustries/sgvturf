import assert from 'node:assert/strict';
import test from 'node:test';
import { onRequest } from '../functions/api/lead.ts';

interface ApiPayload {
  ok: boolean;
  message: string;
  submissionType?: string;
  errors?: Record<string, string>;
}

const readPayload = (response: Response) => response.json() as Promise<ApiPayload>;
const post = (fields: Record<string, string>, env: Record<string, string> = {}) =>
  onRequest({
    request: new Request('http://localhost/api/lead', {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(fields),
    }),
    env,
  } as never);

const homeowner = {
  submissionType: 'homeowner',
  landingPage: '/sgv-yard-project/',
  referrer: 'https://chatgpt.com/',
  name: 'Synthetic Homeowner',
  email: 'homeowner@example.test',
  phone: '000-000-0000',
  city: 'Pasadena',
  zipCode: '91101',
  lawnSize: '500-1,000',
  projectType: 'Low-Water Replanting',
  timing: 'Within 1–3 months',
  message: 'Synthetic local test that is never sent externally.',
  sharingConsent: 'yes',
  source: 'chatgpt',
  medium: 'paid',
  campaign: 'readiness',
  content: 'yard-brief',
  term: 'lawn-replacement',
  gclid: 'synthetic-click-id',
};

const contractor = {
  submissionType: 'contractor',
  landingPage: '/contractors/join/',
  referrer: 'https://www.example.test/partner-page',
  businessName: 'Synthetic Landscape Test',
  contactName: 'Synthetic Contractor',
  email: 'contractor@example.test',
  phone: '000-000-0001',
  website: 'https://contractor.example.test/',
  serviceAreas: 'Pasadena\nArcadia',
  specialties: 'Irrigation\nLow-water planting',
  licenseNumber: 'Synthetic test status',
  photoLinks: 'https://images.example.test/project',
  message: 'Synthetic contractor note.',
  materialsPermission: 'yes',
  responseCommitment: 'yes',
  caseStudyPermission: 'yes',
  source: 'outreach',
  medium: 'email',
  campaign: 'founding-test',
  content: 'invitation-a',
  term: 'sgv-contractor',
};

test('rejects an incomplete homeowner brief with field errors', async () => {
  const response = await post({ submissionType: 'homeowner' });
  const payload = await readPayload(response);
  assert.equal(response.status, 400);
  assert.equal(payload.ok, false);
  assert.equal(payload.errors?.email, 'This field is required.');
});

test('does not claim production delivery without a webhook', async () => {
  const response = await post(homeowner);
  const payload = await readPayload(response);
  assert.equal(response.status, 503);
  assert.equal(payload.ok, false);
  assert.match(payload.message, /not saved or sent/i);
});

test('accepts both form types only in explicit localhost mock mode', async () => {
  for (const fields of [homeowner, contractor]) {
    const response = await post(fields, { LEAD_DELIVERY_MODE: 'local_log' });
    const payload = await readPayload(response);
    assert.equal(response.status, 200);
    assert.equal(payload.ok, true);
    assert.equal(payload.submissionType, fields.submissionType);
  }
});

test('delivers a flat homeowner payload with full attribution and landing context', async () => {
  const originalFetch = globalThis.fetch;
  let delivered: Record<string, unknown> = {};
  globalThis.fetch = async (_input, init) => {
    delivered = JSON.parse(String(init?.body));
    return new Response(null, { status: 204 });
  };
  try {
    const response = await post(homeowner, { LEAD_WEBHOOK_URL: 'https://webhook.example.test/intake' });
    assert.equal(response.status, 200);
    assert.equal(delivered.submissionType, 'homeowner');
    assert.equal(delivered.name, homeowner.name);
    assert.equal(delivered.projectType, homeowner.projectType);
    assert.equal(delivered.lawnSize, homeowner.lawnSize);
    assert.equal(delivered.businessName, '');
    assert.equal(delivered.serviceAreas, '');
    assert.equal(delivered.specialties, '');
    assert.equal(delivered.licenseNumber, '');
    assert.equal(delivered.source, homeowner.source);
    assert.equal(delivered.medium, homeowner.medium);
    assert.equal(delivered.campaign, homeowner.campaign);
    assert.equal(delivered.content, homeowner.content);
    assert.equal(delivered.term, homeowner.term);
    assert.equal(delivered.landingPage, '/sgv-yard-project/');
    assert.equal(delivered.referrer, 'https://chatgpt.com/');
    assert.equal(delivered.gclid, homeowner.gclid);
    assert.match(String(delivered.submittedAt), /^\d{4}-\d{2}-\d{2}T/);
    assert.equal('fields' in delivered, false);
    assert.equal('attribution' in delivered, false);
    assert.equal('sourcePage' in delivered, false);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('delivers contractor-specific fields without homeowner substitutions', async () => {
  const originalFetch = globalThis.fetch;
  let delivered: Record<string, unknown> = {};
  globalThis.fetch = async (_input, init) => {
    delivered = JSON.parse(String(init?.body));
    return new Response(null, { status: 200 });
  };
  try {
    const response = await post(contractor, { LEAD_WEBHOOK_URL: 'https://webhook.example.test/intake' });
    assert.equal(response.status, 200);
    assert.equal(delivered.submissionType, 'contractor');
    assert.equal(delivered.name, contractor.contactName);
    assert.equal(delivered.businessName, contractor.businessName);
    assert.equal(delivered.serviceAreas, contractor.serviceAreas);
    assert.equal(delivered.specialties, contractor.specialties);
    assert.equal(delivered.licenseNumber, contractor.licenseNumber);
    assert.equal(delivered.message, contractor.message);
    assert.equal(delivered.projectType, '');
    assert.equal(delivered.lawnSize, '');
    assert.equal(delivered.city, '');
    assert.equal(delivered.landingPage, '/contractors/join/');
    assert.equal(delivered.referrer, 'https://www.example.test/partner-page');
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('requires the contractor response commitment', async () => {
  const response = await post({ ...contractor, responseCommitment: '' }, { LEAD_DELIVERY_MODE: 'local_log' });
  const payload = await readPayload(response);
  assert.equal(response.status, 400);
  assert.match(payload.errors?.responseCommitment || '', /required|confirm/i);
});

test('accepts legacy field names while normalizing the final payload', async () => {
  const originalFetch = globalThis.fetch;
  let delivered: Record<string, unknown> = {};
  globalThis.fetch = async (_input, init) => {
    delivered = JSON.parse(String(init?.body));
    return new Response(null, { status: 200 });
  };
  try {
    const response = await post({
      ...homeowner,
      submissionType: 'homeowner_project_brief',
      landingPage: '',
      sourcePage: '/legacy-homeowner/',
      source: '',
      utm_source: 'legacy-source',
      lawnSize: '',
      yardSize: 'Under 500',
    }, { LEAD_WEBHOOK_URL: 'https://webhook.example.test/intake' });
    assert.equal(response.status, 200);
    assert.equal(delivered.submissionType, 'homeowner');
    assert.equal(delivered.landingPage, '/legacy-homeowner/');
    assert.equal(delivered.source, 'legacy-source');
    assert.equal(delivered.lawnSize, 'Under 500');
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('does not claim success when a configured webhook rejects delivery', async () => {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async () => new Response(null, { status: 500 });
  try {
    const response = await post(homeowner, { LEAD_WEBHOOK_URL: 'https://webhook.example.test/intake' });
    const payload = await readPayload(response);
    assert.equal(response.status, 503);
    assert.equal(payload.ok, false);
    assert.match(payload.message, /not marked received/i);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('rejects unsupported submission types', async () => {
  const response = await post({ ...homeowner, submissionType: 'unknown' }, { LEAD_DELIVERY_MODE: 'local_log' });
  const payload = await readPayload(response);
  assert.equal(response.status, 400);
  assert.equal(payload.errors?.form, 'This submission type is not supported.');
});

test('honeypot submission does not invoke delivery', async () => {
  const response = await post({ ...homeowner, faxNumber: 'spam value' });
  const payload = await readPayload(response);
  assert.equal(response.status, 200);
  assert.equal(payload.ok, true);
});
