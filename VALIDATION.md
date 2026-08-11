# Validation notes

## Offline checks completed

- `package.json` uses exact direct dependency versions; no `latest`, `*`, caret, or tilde ranges.
- `packageManager` and `engines.pnpm` are pinned to `9.15.5`.
- Node is pinned to `24.19.0` in both `engines.node` and `.node-version`.
- `.npmrc` contains `only-built-dependencies=esbuild` as requested.
- No `pnpm-workspace.yaml` exists.
- `pnpm-lock.yaml` is lockfile v9; importer specifiers exactly match `package.json`, and every direct importer resolution exists in both `packages` and `snapshots`.
- `@astrojs/check@0.9.10` in the lockfile declares TypeScript peer support for `^5.0.0 || ^6.0.0`; the project pins TypeScript `6.0.3`.
- The browser itinerary TypeScript, Astro frontmatter TypeScript portion, and `robots.txt.ts` pass strict TypeScript syntax/type checks with the locally available TypeScript compiler and minimal Astro stubs where needed.
- Source grep found no `example.com`, `localhost`, or `chrome-extension://`.
- The only external executable script in site source is the requested GA4 loader from Google Tag Manager.
- No sitemap integration is enabled while `site` is empty, so no placeholder sitemap URL can be emitted. When a real `site` is configured, `@astrojs/sitemap` is enabled automatically.

## Full clean install/build command

Run in a normal networked CI or development environment:

```bash
rm -rf node_modules
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
```

In the artifact-generation sandbox, the first command that needs the npm registry cannot complete because outbound TCP access to `registry.npmjs.org:443` is blocked (`ECONNREFUSED`) while Corepack attempts to fetch `pnpm-9.15.5.tgz`. Therefore `pnpm check` and `pnpm build` could not truthfully be reported as executed there. This is an environment/network limitation rather than a project diagnostic.
