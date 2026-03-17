// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    inspectorPort: false,
    prerenderEnvironment: 'node',
    platformProxy: {
      enabled: true
    },

    imageService: "cloudflare"
  })
});
