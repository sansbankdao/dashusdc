# Dash USDC Docs

The Dash USDC documentation site, built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), based on the [Tailwind UI](https://tailwindui.com) "Syntax" template.

## Getting started

To get started, first install the workspace dependencies from the repository root:

```bash
pnpm install
```

Copy the example environment file and adjust the DocSearch credentials if needed:

```bash
cp apps/docs/.env.example apps/docs/.env
```

Next, run the development server:

```bash
pnpm dev:docs
```

Finally, open [http://localhost:4321](http://localhost:4321) in your browser to view the website.

## Customizing

You can start editing this template by modifying the files in the `/src` folder. The site will auto-update as you edit these files.

## Content

Documentation pages live in `src/content/docs` and are rendered through `src/pages/docs/[...slug].astro`. The home page is `src/pages/index.mdx`.

## License

This site template is a commercial product and is licensed under the [Tailwind UI license](https://tailwindui.com/license).

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Astro](https://docs.astro.build) - the official Astro documentation
- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [DocSearch](https://docsearch.algolia.com) - the official DocSearch documentation
