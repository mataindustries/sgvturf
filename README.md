# SGV Turf

Editorial Astro site and referral-intake flow for San Gabriel Valley homeowners planning drought-smart yard projects. Illustrative Project Style Guides are kept separate from the verified-contractor directory.

## Local Development

1. Install dependencies:

```sh
npm install
```

2. Start Astro dev:

```sh
npm run dev
```

3. Open `http://localhost:4321`.

## Local Cloudflare Pages Testing

Use Wrangler when you want the built site and `functions/api/lead.ts` running together in a Pages-style environment.

```sh
npm run pages:dev
```

That command:

- builds the Astro site into `dist/`
- starts `wrangler pages dev ./dist`
- serves the Pages Function endpoints locally

## Build

Create the production build with:

```sh
npm run build
```

The Cloudflare adapter outputs the deployable site to `dist/`.

## Environment Variables

`PUBLIC_SITE_URL`

- Full production origin for canonical tags, Open Graph URLs, and sitemap generation.
- Required before launch.
- Example shape only: `https://your-production-domain`
- Do not set this to a preview URL if you want production canonicals.

`LEAD_WEBHOOK_URL`

- HTTPS endpoint that receives validated homeowner, contractor, and contact submissions.
- Required before any public intake is opened. Without it, the API returns `503` and the UI does not claim success.

`LEAD_DELIVERY_MODE`

- Development-only switch. Set to `local_log` only while testing through localhost.
- Never use `local_log` as the production delivery configuration.

## Cloudflare Pages Deployment Notes

1. Create or connect the Pages project to this repo.
2. Set the build command to:

```sh
npm run build
```

3. Set the build output directory to:

```sh
dist
```

4. Add environment variables in Pages project settings:

```text
PUBLIC_SITE_URL=https://your-production-domain
LEAD_WEBHOOK_URL=
```

5. Configure and verify the webhook before opening either intake form to public traffic.
6. After `PUBLIC_SITE_URL` is set, Astro will emit canonical URLs and enable sitemap generation automatically.
7. `robots.txt` is generated from `src/pages/robots.txt.ts`, allows general crawlers (including OAI crawlers), and includes the sitemap URL when `PUBLIC_SITE_URL` is present.

## Useful Commands

| Command | Purpose |
| :-- | :-- |
| `npm run dev` | Astro local development |
| `npm run build` | Production build |
| `npm run typecheck` | Astro and TypeScript diagnostics |
| `npm test` | Lead-handler validation and delivery-state tests |
| `npm run validate:links` | Validate internal links in the built output |
| `npm run validate:content` | Check required readiness copy and retired-risk content |
| `npm run preview` | Build and run Wrangler Pages locally |
| `npm run pages:dev` | Same as preview; explicit Pages-local workflow |
| `npm run generate-types` | Refresh Wrangler worker types |

## Known Pre-Launch Gates

- Configure and verify `PUBLIC_SITE_URL` and `LEAD_WEBHOOK_URL`; the forms intentionally return an error when delivery is unavailable.
- Review the current `npm audit --omit=dev` findings before deployment. Framework or adapter upgrades should be handled as a targeted dependency task and followed by the full readiness validation matrix.
