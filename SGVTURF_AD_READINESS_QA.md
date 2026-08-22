# SGVTurf Paid-Traffic Readiness QA

Last run: August 22, 2026.

## Branch and Production State

- Current branch: `ads-readiness` at committed baseline `b4f0055`, plus the uncommitted final cleanup documented here.
- `origin/main` remains at `48bd0fa`, before the readiness work. A production project that builds `main` will therefore continue to show the old six-example directory presentation and former founder price until the reviewed readiness changes reach the configured production branch.
- No commit, push, merge, deploy, advertising activation, Cloudflare-setting change, or external form submission was performed.

## Implementation Baseline

- Framework/routing: Astro 6 static routes with Cloudflare Pages Functions.
- Planning-example data: `src/data/contractors.ts`; it is used only by the separately labeled Project Style Guides routes and is not imported into the verified directory, counts, search, structured business data, or lead routing.
- Form path: browser form -> `/api/lead` -> server validation/honeypot -> runtime-only `LEAD_WEBHOOK_URL` -> success only after a successful webhook response.
- Analytics: existing Google Analytics `gtag` wrapper; no second analytics platform and no form PII in events.
- Astro telemetry cannot write below the restricted home directory in this environment. Checks use `ASTRO_TELEMETRY_DISABLED=1`; this does not change application behavior.

## Automated Checks

| Check | Result |
| --- | --- |
| `npm ci` | Pass; 367 locked packages installed. npm reported 19 audit findings (2 low, 2 moderate, 15 high). No dependency upgrade was introduced in this scoped pass. |
| `ASTRO_TELEMETRY_DISABLED=1 npm run typecheck` | Pass: 55 files, 0 errors, 0 warnings, 0 hints. |
| `npm test` | Pass: 1 test file. Direct execution confirms all 10 lead-handler scenarios pass. |
| `ASTRO_TELEMETRY_DISABLED=1 PUBLIC_SITE_URL=https://example.com npm run build` | Pass: 34 static routes plus sitemap. The example origin is QA-only. |
| `npm run validate:links` | Pass: 34 HTML routes, no broken internal links. |
| `npm run validate:content` | Pass: required conversion copy, honest-directory state, free founder test, form intents, attribution fields, and eight events present; retired claims absent. |
| `npm audit --omit=dev --audit-level=high` | Fail: 19 dependency findings (2 low, 2 moderate, 15 high), including Astro and the Cloudflare adapter/tooling tree. A targeted dependency review remains required; broad upgrades were outside this conversion pass. |
| Local Cloudflare Pages smoke tests | Pass: synthetic homeowner and contractor submissions returned HTTP 200 with distinct normalized intent; incomplete contractor intake returned HTTP 400. No external destination was used. |
| Rendered viewport QA | Pass: homepage, homeowner landing, and contractor landing at 320, 390, 412, 768, and 1280px (15 combinations), with no horizontal overflow, clipped visible controls, page errors, or incorrect form counts. |
| Rendered attribution/event QA | Pass: all five UTM values, click ID, and `/sgv-yard-project/` landing path hydrated; `landing_view`, `primary_cta_click`, and `project_form_start` each fired once with no PII fields. |
| `git diff --check` | Pass. |

## Payload Contract

Both primary forms reach the same `/api/lead` handler. The webhook body is flat and includes `submittedAt`, normalized `submissionType`, contact fields, type-specific project/business fields, `source`, `medium`, `campaign`, `content`, `term`, `landingPage`, `referrer`, and supported click IDs. Homeowner-only and contractor-only fields remain separate; legacy form names are accepted only as input aliases and are normalized before delivery.

## Local Form Smoke Test

This workflow sends nothing externally:

1. Run `ASTRO_TELEMETRY_DISABLED=1 PUBLIC_SITE_URL=https://example.com npm run build`.
2. Run `XDG_CONFIG_HOME=/tmp/sgvturf-wrangler-config CI=true npx wrangler pages dev dist --ip 127.0.0.1 --port 8788 --binding LEAD_DELIVERY_MODE=local_log --compatibility-date=2026-03-12`.
3. Post synthetic `.test` values to both forms and confirm HTTP 200 with `submissionType` equal to `homeowner` or `contractor`.
4. Omit required contractor fields and confirm HTTP 400 with field errors.
5. Stop the emulator. Never set `LEAD_DELIVERY_MODE=local_log` in production.

## Required Manual Configuration

- Review and move the readiness changes to the branch Cloudflare Pages uses for production; the repository currently indicates `main` is still on the old experience.
- Set `PUBLIC_SITE_URL` to the verified production origin.
- Keep `LEAD_WEBHOOK_URL` only in the Cloudflare runtime environment; never expose it through a public/client variable.
- Update the Make and Google Sheets mapping to the flat payload contract, especially `submissionType`, the five attribution fields, `landingPage`, `referrer`, and contractor-specific columns.
- After Ads Manager supplies the official ChatGPT Ads Pixel ID and instructions, install it in `src/layouts/BaseLayout.astro` and map only the eight documented non-PII events. No ID is present now.
- Review/remediate or explicitly accept the 19 dependency audit findings before production launch, then rerun this matrix after any package changes.

## Exact Production QA Checklist

1. Confirm production serves the reviewed branch: homepage headline is “Less lawn. Better yard.”, the directory says zero published listings, and no former founder price appears.
2. Open `/`, `/sgv-yard-project/`, and `/contractors/join/` on Android at 320/390/412-equivalent widths; open/close the compact menu, tab through controls, open the keyboard, and confirm no control, error, or success message is covered.
3. Load `/sgv-yard-project/?utm_source=qa&utm_medium=paid&utm_campaign=prelaunch&utm_content=homeowner&utm_term=lawn` and submit one clearly labeled owner-controlled test brief.
4. Confirm Make and Sheets receive `submissionType=homeowner`, `/sgv-yard-project/` as `landingPage`, all five UTM values, referrer, homeowner fields, and blank contractor-only fields.
5. Load `/contractors/join/?utm_source=qa&utm_medium=outreach&utm_campaign=prelaunch&utm_content=contractor&utm_term=landscape` and submit one clearly labeled owner-controlled contractor test.
6. Confirm Make and Sheets receive `submissionType=contractor`, `/contractors/join/` as `landingPage`, all attribution values, and clean business/service/license fields without homeowner substitutions.
7. Point an owner-controlled test webhook at a rejecting response, submit once, and confirm the page shows the recoverable delivery error and never success; restore the production webhook afterward.
8. In analytics diagnostics, confirm the eight documented events fire once per trigger with campaign attribution and no name, email, phone, business name, service area, or message; delete QA records under the destination’s retention procedure.
