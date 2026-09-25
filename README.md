# Dash USDC

Dash USDC is a "shielded" USDC stablecoin built on [Dash Platform](https://dashplatform.readme.io/), arriving with Platform v4.3.

This repository is a [pnpm](https://pnpm.io/) monorepo:

| Package | Path | Description |
| --- | --- | --- |
| `@dashusdc/web` | [`apps/web`](./apps/web) | Marketing site (Astro + Tailwind CSS). |
| `@dashusdc/map` | [`apps/map`](./apps/map) | Global crypto merchant directory (Vue 2 + Mapbox/Leaflet). |
| `@dashusdc/docs` | [`apps/docs`](./apps/docs) | Documentation site (Astro + Tailwind CSS). |

## Getting started

Install all workspace dependencies from the repository root:

```bash
pnpm install
```

Run a single app in development:

```bash
pnpm dev:web    # https://localhost:4321
pnpm dev:map    # https://localhost:8080
pnpm dev:docs   # https://localhost:4321
```

Build every app:

```bash
pnpm build
```

## License

MIT