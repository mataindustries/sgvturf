// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';


const configuredSite = process.env.PUBLIC_SITE_URL?.trim();

let site;

if (configuredSite) {
  try {
    site = new URL(configuredSite).toString();
  } catch {
    console.warn(
      `[astro.config] Ignoring invalid PUBLIC_SITE_URL value: "${configuredSite}". Expected a full URL such as https://www.example.com.`,
    );
  }
}

export default defineConfig({
  site,
  trailingSlash: 'always',
  integrations: site
    ? [
        sitemap({
          filter: (page) => !page.endsWith('/thanks/'),
        }),
      ]
    : [],

});
