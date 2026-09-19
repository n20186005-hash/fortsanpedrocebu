# Fort San Pedro Cebu — visitor guide

Single-page multilingual attraction website built with Astro, Tailwind CSS, and TypeScript for deployment as Cloudflare Workers Static Assets. Includes structured data (TouristAttraction / FAQPage / BreadcrumbList / WebSite JSON-LD), an official-sources section, and PWA support (manifest + service worker).

## Language routing

Four locales are generated from one shared `PageLayout`:

| URL | Language | `hreflang` | Notes |
| --- | --- | --- | --- |
| `/` | English | `en`, `x-default` | Default page; carries the most Search Console impressions |
| `/fil/` | Filipino | `fil` | |
| `/ja/` | Japanese | `ja` | Highest observed CTR market |
| `/zh/` | Chinese (Traditional) | `zh-Hant` | Impression volume with no clicks — now has a native page |

`/en/` is a redirect stub that points to `/` (and is excluded from the sitemap) so the retired URL cannot split signals with the root page.

## Article routes

Editorial content lives in `src/i18n/articles.ts` and is rendered by `src/components/ArticleLayout.astro`. Each article is one topic with four fully localized versions, and each locale has its own keyword-bearing slug:

| Topic | en | fil | ja | zh |
| --- | --- | --- | --- | --- |
| Things to do near the fort | `/guides/things-to-do-near-fort-san-pedro/` | `/fil/guides/mga-pwedeng-gawin-malapit-sa-fort-san-pedro/` | `/ja/guides/sanpedoro-yousai-shuhen-kankou/` | `/zh/guides/shengpeideluobao-zhoubian-jingdian/` |
| Entrance fee & visitor guide | `/guides/fort-san-pedro-entrance-fee-guide/` | `/fil/guides/fort-san-pedro-bayad-at-gabay/` | `/ja/guides/sanpedoro-yousai-nyujoryou-guide/` | `/zh/guides/shengpeideluobao-menpiao-gonglue/` |

Each locale also has a hub page at `/guides/`, `/fil/guides/`, `/ja/guides/`, `/zh/guides/`.

Article pages emit `Article`, `BreadcrumbList` and `FAQPage` JSON-LD, reciprocal `hreflang` across the four localized URLs, and `article:published_time` / `article:modified_time`. The main page links to every guide from its "Travel guides" section.

### Adding an article

1. Add an entry to `articles` in `src/i18n/articles.ts` with a `translations` block for every locale (the `Translation` type requires all four).
2. No route changes are needed — `src/pages/[locale]/guides/[slug].astro` derives its paths from the data file.

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

## Required Cloudflare dashboard settings (cannot live in code)

`public/_redirects` handles path-level rules only. The following domain-level rules must be enabled in the dashboard, otherwise the HTTP and `www` variants stay indexed as duplicates:

1. **SSL/TLS → Edge Certificates → Always Use HTTPS** = On (301 `http://` → `https://`).
2. **Rules → Redirect Rules** (or Bulk Redirects): `www.fortsanpedrocebu.com/*` → `https://fortsanpedrocebu.com/:splat`, status 301.

## Checklist privacy

Saved attractions use browser `localStorage` under `fort-san-pedro-itinerary-v1`. No data is sent to a server.

## Images

The attraction photographs are local files. See `CREDITS.md` for attribution and license details.
