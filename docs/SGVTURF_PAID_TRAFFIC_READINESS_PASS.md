# SGVTurf Paid-Traffic Readiness Pass

## Mission

Prepare the existing SGVTurf site for a small, invite-only ChatGPT Ads beta test and immediate founding-contractor outreach.

This is a focused trust, conversion, lead-routing, measurement, and mobile-readiness pass. It is **not** a redesign, rebrand, content expansion, or speculative feature sprint.

The site is a regional planning and contractor-referral resource. SGVTurf does **not** perform landscape installation. Independent contractors perform the work.

## Operating Rules

1. Read `AGENTS.md`, repository documentation, package scripts, the current site architecture, current data models, form handlers, analytics, deployment configuration, and `git status` before editing.
2. Preserve the existing visual identity, typography, imagery, city-guide structure, useful editorial content, and responsive design unless a change below requires a localized adjustment.
3. Reuse existing components, tokens, form infrastructure, data structures, and analytics patterns.
4. Do not replace working architecture, add a new framework, add a CMS, add authentication, add a database, or perform a broad rewrite.
5. Do not invent contractor businesses, testimonials, reviews, license numbers, completed projects, traffic, leads, partnerships, rebate eligibility, or ad results.
6. Do not claim the ChatGPT Ads campaign is live, approved, guaranteed to launch, or guaranteed to generate leads. Permitted language: **“SGVTurf is preparing a limited paid ChatGPT Ads beta test, pending platform approval.”**
7. Do not commit, push, deploy, purchase anything, activate advertising, submit external forms, or mutate production data.
8. If a requested behavior depends on missing credentials or infrastructure, implement the safest honest UI state and document the exact manual step. Do not fabricate success.
9. Keep the implementation compact enough to complete and validate in one run. Work through the priorities in order. If time or context becomes constrained, finish and validate higher priorities instead of partially implementing everything.

## Priority 0: Establish the Current Baseline

Before editing:

- Identify the framework, routing system, data source for contractor profiles, form submission path, analytics implementation, and existing automated checks.
- Run the current appropriate build/test/typecheck/lint baseline.
- Record pre-existing failures separately; do not hide them or expand scope to unrelated fixes.
- Inspect the homepage, contractor directory, at least one contractor-profile page, rebate hub, one city page, and all homeowner/contractor forms at mobile widths.

## Priority 1: Remove the Fictional-Contractor Trust Risk

The current named entries such as “Foothill Dryscape Studio,” “Citrus Belt Landscape Atelier,” “Mission Garden Works,” “Arroyo Outdoor Edit,” “Canyon Line Xeriscapes,” and “Valley Ground Plan” are editorial examples, not verified operating contractors.

Implement all of the following:

- They must never appear to be real businesses, verified contractors, featured partners, directory members, or companies accepting leads.
- Convert them into clearly labeled **Project Style Guides** or **Planning Archetypes**.
- Put a prominent, unambiguous label on every card and detail page: **“Illustrative planning archetype — not a contractor or business.”**
- Remove them from any “contractor profile” count, “featured contractor” section, quick-compare contractor results, suggested-contractor modules, and lead-routing logic.
- Rename surrounding headings, metadata, structured data, breadcrumbs, accessible labels, and CTAs so the distinction is consistent.
- Do not delete useful style/planning content if it can be preserved honestly.
- Replace the homepage’s fake featured-contractor presentation with a clean **Founding Partner Spots** section or honest empty state for real contractors.
- The real contractor directory must show only verified entries supplied later. If none exist, state that the founding roster is opening now; do not use fake placeholders.

## Priority 2: Create the Founding Ad-Test Partner Funnel

Replace the current $99 upfront offer with the temporary founding pilot below.

### Exact commercial structure

- First 3 verified SGV contractors
- $0 setup charge
- 30-day founding placement
- Custom real-business profile
- Placement on up to 3 relevant SGV city pages
- Homepage visibility during the pilot when appropriate
- Direct forwarding of matching inquiries when lead routing is operational
- Optional continuation at $99 after the pilot
- No automatic renewal
- No contract
- No traffic, lead-volume, or revenue guarantee

Create a dedicated contractor landing/intake route using the project’s established routing conventions, preferably `/contractors/join/` if compatible.

The page must include:

- A concise explanation of SGVTurf’s role as a regional planning/referral resource.
- The exact pilot structure above.
- Accurate campaign language: **“SGVTurf is preparing a limited paid ChatGPT Ads beta test, pending platform approval.”**
- What contractors provide: legal business name, public contact information, website, service areas, specialties, license number/status when applicable, 4–8 owned project photos, logo, and confirmation that SGVTurf may display submitted materials.
- Expectations: prompt lead response, accurate information, and permission to use anonymized campaign outcomes in a case study.
- A short intake form with accessible labels, validation, error state, success state, privacy notice, spam protection consistent with the repo, and no unsupported upload feature. If file upload is unavailable, request shareable image links or tell applicants that photo collection follows acceptance.
- A fallback contact method using an existing verified SGVTurf contact channel. Do not invent a phone number or email address.

Fix every “For Contractors,” “View Founder Offer,” “Apply,” and “Request Founder Details” CTA so it reaches this dedicated funnel. No CTA may silently loop to the homepage.

## Priority 3: Build a Focused Homeowner Ad Landing Page

Create a focused route using existing conventions, preferably `/sgv-yard-project/` if compatible. This is the initial paid-traffic destination and must work especially well on Android/mobile.

### Landing-page goal

One primary conversion: a homeowner submits a free SGV yard project brief.

### Required structure

1. Eyebrow: `San Gabriel Valley yard planning`
2. Clear hero focused on the homeowner outcome, not the directory mechanics.
3. Short explanation covering turf removal, drought-smart planting, irrigation, hardscape, artificial turf evaluation, or broader yard conversion.
4. A prominent free project-brief CTA above the fold.
5. Three-step process:
   - Tell SGVTurf about the yard, city, goals, approximate size, timing, and desired work.
   - SGVTurf organizes the request and checks available independent contractor fit.
   - Available contractors may contact the homeowner directly to discuss scope and estimates.
6. A trust section explaining exactly what SGVTurf is and is not.
7. A compact rebate warning: rebate rules vary by utility; pre-approval may be required; artificial turf is not eligible for the regional SoCal Water$mart turf-replacement program; always verify current requirements before starting work.
8. One primary form and a repeated final CTA. Avoid competing navigation or multiple conversion goals.

### Required disclosure near the form

Use clear language substantially equivalent to:

> SGVTurf is a planning and referral resource, not a landscape contractor. Independent contractors perform the work. By submitting this brief, you agree that SGVTurf may share your project information with a limited number of potentially relevant contractors. Contractor availability, licensing, estimates, project terms, workmanship, and rebate eligibility must be confirmed directly.

Do not overstate screening, matching, vetting, savings, response time, or contractor availability.

### Homeowner form

Reuse and improve the current form. Include only fields needed to route and evaluate the inquiry:

- Name
- Email
- Phone
- City
- ZIP code
- Approximate lawn/yard size
- Project type
- Project timing
- Short project description
- Consent checkbox for limited contractor sharing
- Hidden capture for UTM/source metadata when available

Remove the unexplained `Company` field from the homeowner flow. Provide accessible validation, clear required/optional labels, a real loading state, a specific success state, a recoverable error state, and no false success.

## Priority 4: Add the Trust Layer

Using existing layout/components, add or complete concise pages/routes for:

- About SGVTurf
- Contact
- Privacy Policy
- Referral Disclosure / How SGVTurf Works

The footer must link to them.

Across these pages, accurately state:

- SGVTurf is a regional planning, editorial, and contractor-referral resource.
- SGVTurf does not perform installations.
- Contractors are independent businesses.
- A listing or referral is not a guarantee of availability, licensing, pricing, suitability, workmanship, or outcome.
- Homeowner data is used to respond, organize the project brief, measure the funnel, and—only with disclosed consent—share the request with a limited number of potentially relevant contractors.
- Include only real ownership/contact information already verified in the repository. Do not invent addresses, phone numbers, credentials, partnerships, or business registrations.

If the repository already contains legal pages, improve and reuse them rather than creating duplicates. Keep language plain and readable; do not present it as legal advice.

## Priority 5: Correct and De-Risk Rebate Content

The current rebate hub uses broad illustrative dollar ranges and generic program labels. Replace unsupported specificity with official-source-first planning information.

### Verified source anchors

- SoCal Water$mart residential turf replacement program: `https://socalwatersmart.com/en/residential/rebates/available-rebates/turf-replacement-program/`
  - Regional base program begins at $2 per square foot, subject to current terms and funding.
  - Synthetic/artificial turf is not an approved conversion option.
  - Pre-approval and program requirements matter.
- Pasadena Water and Power turf replacement: `https://pwp.cityofpasadena.net/turfreplacement/`
  - Current published incentive is $2 per square foot for eligible residential and commercial projects, plus $100 per eligible tree for up to five trees, subject to conditions and funding.

Implement:

- Separate **artificial turf installation** content from **rebate-eligible lawn-to-garden conversion** content.
- Remove or neutralize fabricated/generic program names and unsupported rebate ranges.
- Prefer named utilities/programs, official links, a `Last verified` date field, and concise eligibility caveats.
- Prominently state that users should confirm their water provider and obtain required approval before removing turf or starting work.
- If a program cannot be verified from an official source available to the repo/run, do not publish a number. Mark it as `Verify with your utility`.
- Do not build a live rebate-feed integration in this pass.

## Priority 6: Form Delivery and Lead Routing Reliability

Audit the actual existing submission implementation before changing it.

- Trace each homeowner and contractor form from UI to handler/provider/storage/delivery.
- Ensure client-side success is shown only after the submission layer confirms success.
- Preserve secrets in environment variables; never hardcode or print credentials.
- Add server-side or provider-compatible validation where the existing architecture supports it.
- Preserve submitted source/UTM fields and distinguish `homeowner_project_brief` from `contractor_partner_application`.
- Add a minimal anti-spam honeypot or reuse the existing spam approach without adding a heavyweight dependency.
- If delivery cannot be fully verified without production credentials, add a development-safe test/mocking path only if consistent with the repo, and produce exact manual QA steps.
- Do not send test leads to real contractors or external recipients during this run.

## Priority 7: Analytics and Campaign Attribution

Reuse the current analytics system. Do not install a second analytics platform.

Implement or verify events for:

- `ad_landing_view`
- `project_brief_start`
- `project_brief_submit_success`
- `project_brief_submit_error`
- `phone_click` only if a real phone CTA exists
- `contractor_join_view`
- `contractor_application_start`
- `contractor_application_submit_success`
- `contractor_application_submit_error`

Requirements:

- Capture `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, and available click identifiers without collecting unnecessary sensitive data.
- Preserve attribution through the form submission where the architecture allows.
- Avoid duplicate events on rerender, back navigation, or repeated success-state rendering.
- Add a short analytics event map to project documentation.

## Priority 8: Technical Ad-Destination Readiness

- Ensure the paid landing page has an accurate title, meta description, canonical URL, Open Graph metadata, and a useful social image fallback using existing assets.
- Check `robots.txt`, sitemap generation, and route indexability.
- Do not block `OAI-AdsBot` or `OAI-SearchBot` unless an existing explicit product requirement requires it.
- Ensure primary content and forms work without layout failure at 360, 390, 412, 768, and common desktop widths.
- Verify keyboard navigation, visible focus, label associations, contrast, reduced-motion behavior where relevant, and descriptive image alt text.
- Avoid large new dependencies and unnecessary animation.

## Required QA

Run the repo’s appropriate:

- Build
- Typecheck
- Lint
- Unit/integration tests
- Route/link validation if available

Also verify:

- No fictional profile is presented as a real contractor anywhere.
- No public count implies fictional contractors are verified listings.
- Every contractor CTA reaches the dedicated intake.
- The homeowner landing page has one obvious primary conversion.
- Forms do not claim success on failed requests.
- Legal/trust links work.
- No unsupported rebate amount remains.
- No artificial-turf rebate implication remains.
- No horizontal overflow or clipped form control at 360px.
- Existing city guides and useful editorial content still render.

Do not weaken or delete tests to obtain a passing result.

## Documentation Deliverables

Create or update concise repository documentation with:

1. `SGVTURF_AD_READINESS_QA.md`
   - Automated checks run and results
   - Manual mobile checks
   - Manual form-delivery test steps
   - Environment variables required, names only—never values
   - Pre-launch go/no-go checklist
2. A compact analytics event map in the most appropriate existing docs location.

## Definition of Done

The pass is complete only when:

- Fictional businesses cannot reasonably be mistaken for real contractors.
- The public contractor directory contains only verified real businesses or an honest empty/founding state.
- A real dedicated founding-partner funnel exists and every contractor CTA reaches it.
- A focused homeowner ad landing page exists with one primary conversion.
- Referral, privacy, data-sharing, and independent-contractor roles are clearly disclosed.
- Rebate content no longer mixes artificial turf with rebate-eligible lawn-to-garden conversion or publishes unsupported ranges.
- Forms have honest success/error handling and a documented delivery test.
- Attribution and core funnel events are implemented through the existing analytics system.
- Mobile and automated QA pass, or any genuine blocker is reported precisely.

## Final Response Format

Return:

1. **Outcome** — what is now ad-ready.
2. **Files changed** — grouped by trust, funnel, forms, rebate, analytics, and docs.
3. **Validation** — exact commands and pass/fail results.
4. **Manual checks for Sergio** — no more than 8 ordered actions, optimized for Android/Codespaces.
5. **Go/no-go verdict** — `GO`, `CONDITIONAL GO`, or `NO-GO`, with concrete blockers.
6. **Deferred work** — only items intentionally left outside this focused pass.

