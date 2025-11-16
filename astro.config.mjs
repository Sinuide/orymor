import react from '@astrojs/react'
import { defineConfig } from 'astro/config'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { DEFAULT_LOCALE, VALID_LOCALES } from './src/config.ts'

import netlify from '@astrojs/netlify';

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: [...VALID_LOCALES],
    routing: {
      prefixDefaultLocale: true,
    },
  },

  vite: {
    resolve: {
      alias: {
        src: path.resolve(__dirname, './src'),
      },
    },
  },

  adapter: netlify(),
})