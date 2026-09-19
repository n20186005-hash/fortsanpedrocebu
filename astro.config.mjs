import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// DOMAIN CONFIG: fill this single value once the production domain is known.
// Keep it empty during development; the site still builds without canonical/sitemap URLs.
const DEPLOYMENT_SITE = 'https://fortsanpedrocebu.com';

export default defineConfig({
  site: DEPLOYMENT_SITE || undefined,
  // /en/ is a redirect stub only; keep it out of the sitemap so Google does not
  // crawl a duplicate of the root page.
  integrations: DEPLOYMENT_SITE
    ? [sitemap({ filter: (page) => !page.includes('/en/') })]
    : [],
  vite: {
    plugins: [tailwindcss()]
  }
});
