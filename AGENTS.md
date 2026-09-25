# AGENTS.md

Operational notes for agents working inside `/Workspace/sansbank/dashusdc`.

## Repository layout

pnpm monorepo. Workspace packages are declared in `pnpm-workspace.yaml` (`packages: ['apps/*']`).

| Package | Path | Stack |
| --- | --- | --- |
| `@dashusdc/web` | `apps/web` | Astro 5 + Tailwind CSS. |
| `@dashusdc/map` | `apps/map` | Vue 2 + Mapbox/Leaflet (Vue CLI). |
| `@dashusdc/docs` | `apps/docs` | Astro 5 + Tailwind CSS. |

The API is a SEPARATE repository at `/Workspace/sansbank/dashusdc-api` (Cloudflare Worker, served at `dashusdc.org/v1`). It is NOT a workspace package.

## Commands

Run from the repository root:

```bash
pnpm install      # install all workspace dependencies
pnpm build        # pnpm -r build (web, map, docs)
pnpm build:web    # Astro build -> apps/web/dist
pnpm build:map    # Vue CLI build -> apps/map/dist
pnpm build:docs   # Astro build -> apps/docs/dist
pnpm dev:web      # https://localhost:4321
pnpm dev:map      # https://localhost:8080
pnpm dev:docs     # https://localhost:4321
```

## Build outputs

- `apps/web/dist`
- `apps/map/dist`
- `apps/docs/dist`

All three are git-ignored.

## Docs app (`apps/docs`)

- Content pages live in `src/content/docs/*.md` and are rendered by `src/pages/docs/[...slug].astro` through the `docs` collection defined in `src/content.config.ts`.
- The home page is `src/pages/index.mdx`, which sets `layout: ../layouts/DocsLayout.astro` in frontmatter.
- Tailwind is applied through `postcss.config.js` (postcss-import, tailwindcss, postcss-focus-visible, autoprefixer) loaded by Vite. There is no `@astrojs/tailwind` integration.
- Code fences are highlighted by Astro's built-in Prism (`markdown.syntaxHighlight: 'prism'` in `astro.config.mjs`), styled by `src/styles/prism.css`.
- Search uses `@docsearch/js`, mounted into `#docsearch`, configured through `PUBLIC_DOCSEARCH_APP_ID`, `PUBLIC_DOCSEARCH_API_KEY`, and `PUBLIC_DOCSEARCH_INDEX_NAME` (see `apps/docs/.env.example`). When those are unset at build time, the search bundle is not emitted.
- The original template ships placeholder content ("Syntax", "CacheAdvance", lorem ipsum). It is retained as-is.

## Map app (`apps/map`)

- `VUE_APP_MAPBOX_ACCESS_TOKEN` is read from the environment (`src/components/Mapbox.vue`). A git-ignored `apps/map/.env.local` holds the local value; `apps/map/.env.example` documents it. A build without the token produces a blank map.
- `vue.config.js` sets `css.loaderOptions.postcss.config.path` to `apps/map/postcss.config.js`.

## Secrets

Do not commit tokens. GitHub push protection rejects hardcoded Mapbox tokens. Keep tokens in `.env.local` files, which are git-ignored.

## Infrastructure

The `sansbank` VirtualBox VM is reachable over SSH forwarding.

- `~/.ssh/config`: `Host sansbank` -> `HostName 127.0.0.1`, `Port 2223`, `User sansbank`.
- VM hostname `sansbank-VirtualBox`, Node `v24.20.0`, pnpm `11.24.0`.
- `wrangler` is at `/home/sansbank/.npm-global/bin/wrangler`.
- Cloudflare config directories `~/.cloudflare` and `~/.wrangler` exist on the VM.
