// apps/docs/astro.config.mjs
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.dashusdc.org',
  output: 'static',
  integrations: [mdx()],
  markdown: {
    syntaxHighlight: 'prism',
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop',
    },
  },
})
