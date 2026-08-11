import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// DOMAIN CONFIG: fill this single value once the production domain is known.
// Keep it empty during development; the site still builds without canonical/sitemap URLs.
const DEPLOYMENT_SITE = '';

export default defineConfig({
  site: DEPLOYMENT_SITE || undefined,
  integrations: DEPLOYMENT_SITE ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()]
  }
});
