# SGVTurf Paid-Traffic Readiness QA

Last run: August 21, 2026.

## Baseline

- Framework/routing: Astro 6 static routes with Cloudflare Pages Functions.
- Editorial archetype data: `src/data/contractors.ts`; it is no longer imported into the verified-contractor directory, city suggestions, homepage counts, or lead routing.
- Form path: browser form -> `/api/lead` -> validation/honeypot -> `LEAD_WEBHOOK_URL`.
- Analytics: existing Google Analytics `gtag` wrapper in `BaseLayout.astro`.
- Initial install state: `npm run build` could not start because dependencies were absent (`astro: not found`).
- After locked install, the pre-edit build passed with Astro telemetry disabled. The repo originally had no typecheck, lint, test, or link-validation script.
- Astro/Wrangler attempted to write telemetry/config under a restricted home directory. QA uses `ASTRO_TELEMETRY_DISABLED=1` and a `/tmp` Wrangler config path; application behavior is unchanged.

## Automated Checks

| Check | Result |
| --- | --- |
| `npm ci` | Pass; locked dependencies installed. npm reports 19 dependency audit findings (2 low, 2 moderate, 15 high), the same count observed at the initial locked install. No broad dependency upgrades were applied in this focused pass. |
| `ASTRO_TELEMETRY_DISABLED=1 npm run typecheck` | Pass: 53 files, 0 errors, 0 warnings, 0 hints. |
| `npm test` | Pass: lead validation, missing-delivery 503, localhost mock success, attribution forwarding, webhook-rejection 503, typed contractor intake, and honeypot behavior. |
| `ASTRO_TELEMETRY_DISABLED=1 PUBLIC_SITE_URL=https://example.com npm run build` | Pass: 34 static routes plus sitemap. `example.com` is QA-only; configure the real origin before launch. |
| `npm run validate:links` | Pass: 34 HTML routes, no broken internal links. |
| `npm run validate:content` | Pass: required trust/funnel/analytics/rebate content present; retired risky copy absent. |
| `git diff --check` | Pass. |
| `npm audit --omit=dev --audit-level=high` | Fail: npm reports 19 findings (2 low, 2 moderate, 15 high) in the production dependency graph, including Astro and the Cloudflare adapter tree. Several advisories concern build/dev-server or unused framework features, but applicability was not assumed away. A targeted dependency upgrade/review is required before deployment. |
| Lint | Not configured in the original repo. Astro type diagnostics and targeted validators pass; no unrelated lint stack was introduced. |

## Mobile and Rendered Checks

Temporary headless Chromium was used only for QA and was not added to project dependencies.

- Paid landing and contractor join passed at 360, 390, 412, 768, and 1280 px.
- Homepage passed at 360 px; contractor directory at 390 px; one archetype at 412 px; rebate hub at 360 px; Pasadena city guide at 390 px.
- Every checked route returned 200 with no page runtime errors.
- Document width equaled viewport width; no visible input, select, textarea, or button was clipped.
- The paid landing contained exactly one submission form at every checked width.
- Keyboard focus had a visible solid outline, and reduced-motion emulation produced `scroll-behavior: auto`.
- Canonical and Open Graph image output resolved correctly when `PUBLIC_SITE_URL` was supplied.
- Visual screenshots confirmed the existing palette, typography, imagery, mobile stacking, empty directory, archetype framing, rebate framing, and form controls remained coherent.

## Local Form-Delivery Test

This path sends nothing externally:

1. Run `ASTRO_TELEMETRY_DISABLED=1 PUBLIC_SITE_URL=https://example.com npm run build`.
2. Run `XDG_CONFIG_HOME=/tmp/sgvturf-wrangler-config CI=true npx wrangler pages dev dist --ip 127.0.0.1 --port 8788 --binding LEAD_DELIVERY_MODE=local_log --compatibility-date=2026-03-12`.
3. Submit synthetic `.test` data to the homeowner and contractor forms in the local preview.
4. Confirm valid forms return 200 with their distinct `submissionType`, and invalid forms return 400 with field errors.
5. Stop the local server. Never use `LEAD_DELIVERY_MODE=local_log` in production.

Production manual test after configuring a safe test webhook:

1. Point `LEAD_WEBHOOK_URL` at an owner-controlled test destination with no contractor recipients.
2. Submit one labeled homeowner test and one labeled contractor test.
3. Confirm the webhook received all fields, `submissionType`, `sourcePage`, UTM fields, and click identifiers.
4. Force the webhook to reject once and confirm the browser shows a recoverable error, not success.
5. Delete the test records under the destination's retention procedure.

## Required Environment Variable Names

- `PUBLIC_SITE_URL`
- `LEAD_WEBHOOK_URL`
- `LEAD_DELIVERY_MODE` (localhost QA only)

## Pre-Launch Go/No-Go Checklist

- [ ] Set `PUBLIC_SITE_URL` to the verified production origin; rebuild and inspect canonical, Open Graph, robots, and sitemap URLs.
- [ ] Set `LEAD_WEBHOOK_URL` and complete the production-safe success/failure test above.
- [ ] Review and remediate or explicitly risk-accept the production dependency advisories; rerun the complete validation matrix after any framework/adapter update.
- [ ] Publish a verified fallback contact channel, or retain the honest no-fallback state until one exists.
- [ ] Confirm Google Analytics receives all eight documented funnel events without duplicates and with no form PII.
- [ ] Repeat the 360/390/412 px checks on Sergio's Android device, including keyboard opening, checkbox use, and error recovery.
- [ ] Re-verify both official rebate pages immediately before launch and update `Last verified` if needed.
- [ ] Confirm the directory still contains zero placeholders and every contractor CTA reaches `/contractors/join/`.
- [ ] Obtain platform approval before activating any ChatGPT Ads beta test.
