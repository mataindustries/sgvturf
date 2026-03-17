# SGV Turf

Editorial Astro site for SGV homeowners comparing drought-smart landscape ideas, sample contractor positioning, estimated rebate planning, and a Cloudflare Pages Function intake flow.

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
- Example shape only: `https://your-production-domain`
- Do not set this to a preview URL if you want production canonicals.

`TURNSTILE_SECRET_KEY`

- Reserved for future Turnstile verification inside `functions/api/lead.ts`.
- Not required for the current prototype flow.

`LEAD_WEBHOOK_URL`

- Reserved for future webhook forwarding from the lead intake function.
- Not required for the current prototype flow.

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
TURNSTILE_SECRET_KEY=
LEAD_WEBHOOK_URL=
```

5. Keep the secrets blank until the downstream integrations exist.
6. After `PUBLIC_SITE_URL` is set, Astro will emit canonical URLs and enable sitemap generation automatically.
7. `robots.txt` is generated from `src/pages/robots.txt.ts` and includes the sitemap URL when `PUBLIC_SITE_URL` is present.

## Useful Commands

| Command | Purpose |
| :-- | :-- |
| `npm run dev` | Astro local development |
| `npm run build` | Production build |
| `npm run preview` | Build and run Wrangler Pages locally |
| `npm run pages:dev` | Same as preview; explicit Pages-local workflow |
| `npm run generate-types` | Refresh Wrangler worker types |
