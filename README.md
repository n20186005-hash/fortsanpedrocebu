# Fort San Pedro Cebu — visitor guide

Single-page bilingual attraction website (Filipino default at `/`, English at `/en/`) built with Astro, Tailwind CSS, and TypeScript for deployment as Cloudflare Workers Static Assets. Includes structured data (TouristAttraction / FAQPage / BreadcrumbList / WebSite JSON-LD), an official-sources section, and PWA support (manifest + service worker).

## Runtime and package versions

- Node.js: `24.19.0` (`.node-version` and `engines`)
- pnpm: `9.15.5` (`packageManager` and `engines`)
- Astro: `7.2.0`
- Tailwind CSS / Vite plugin: `4.3.3`
- TypeScript: `6.0.3`
- @astrojs/check: `0.9.10`
- @astrojs/sitemap: `3.7.3`

## One-place domain configuration

The production domain is set once in `DEPLOYMENT_SITE` inside `astro.config.mjs` (`https://fortsanpedrocebu.com`). Canonical, `og:url`, hreflang, JSON-LD absolute URLs, and the sitemap all derive from Astro's `site` value automatically. Change only that single constant if the domain ever moves.

## Local development

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm check
pnpm dev
```

## Build and Cloudflare Worker deployment

```bash
pnpm build
pnpm deploy
```

`wrangler.jsonc` publishes `./dist` as Workers Static Assets. The deploy script uses an explicitly pinned `wrangler@4.120.1` through `pnpm dlx`.

## Checklist privacy

Saved attractions use browser `localStorage` under `fort-san-pedro-itinerary-v1`. No data is sent to a server.

## Images

The attraction photographs are local files. See `CREDITS.md` for attribution and license details.
