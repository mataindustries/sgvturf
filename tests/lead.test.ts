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
  submissionType: 'homeowner_project_brief',
  sourcePage: '/sgv-yard-project/',
  name: 'Test Homeowner',
  email: 'homeowner@example.test',
  phone: '626-555-0100',
  city: 'Pasadena',
  zipCode: '91101',
  yardSize: '500-1,000',
  projectType: 'Low-Water Replanting',
  timing: 'Within 1–3 months',
  message: 'Test submission that is never sent externally.',
  sharingConsent: 'yes',
  utm_source: 'readiness-test',
};

test('rejects an incomplete homeowner brief with field errors', async () => {
  const response = await post({ submissionType: 'homeowner_project_brief' });
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

test('accepts a complete homeowner brief only in explicit local mock mode', async () => {
  const response = await post(homeowner, { LEAD_DELIVERY_MODE: 'local_log' });
  const payload = await readPayload(response);
  assert.equal(response.status, 200);
  assert.equal(payload.ok, true);
  assert.equal(payload.submissionType, 'homeowner_project_brief');
});

test('preserves typed attribution in the webhook payload', async () => {
  const originalFetch = globalThis.fetch;
  let delivered: Record<string, unknown> | undefined;
  globalThis.fetch = async (_input, init) => {
    delivered = JSON.parse(String(init?.body));
    return new Response(null, { status: 204 });
  };
  try {
    const response = await post(homeowner, { LEAD_WEBHOOK_URL: 'https://webhook.example.test/intake' });
    assert.equal(response.status, 200);
    assert.equal(delivered?.submissionType, 'homeowner_project_brief');
    assert.deepEqual(delivered?.attribution, { utm_source: 'readiness-test' });
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

test('validates and distinguishes a contractor application', async () => {
  const response = await post({
    submissionType: 'contractor_partner_application',
    sourcePage: '/contractors/join/',
    businessName: 'Test Business',
    contactName: 'Test Contact',
    email: 'contractor@example.test',
    phone: '626-555-0101',
    serviceAreas: 'Pasadena',
    specialties: 'Irrigation',
    licenseStatus: 'Test-only status',
    materialsPermission: 'yes',
    caseStudyPermission: 'yes',
  }, { LEAD_DELIVERY_MODE: 'local_log' });
  const payload = await readPayload(response);
  assert.equal(response.status, 200);
  assert.equal(payload.submissionType, 'contractor_partner_application');
});

test('honeypot submission does not invoke delivery', async () => {
  const response = await post({ ...homeowner, faxNumber: 'spam value' });
  const payload = await readPayload(response);
  assert.equal(response.status, 200);
  assert.equal(payload.ok, true);
});
