import netlify from '@astrojs/netlify'
import react from '@astrojs/react'
import { defineConfig } from 'astro/config'
import dotenv from 'dotenv'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { DEFAULT_LOCALE, VALID_LOCALES } from './src/config.ts'

dotenv.config()

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
        react: path.resolve('./node_modules/react'),
        'react-dom': path.resolve('./node_modules/react-dom'),
      },
    },
    optimizeDeps: {
      include: ['msw'],
    },
    plugins: [
      {
        // Mocking ability for local development
        // Set USE_MOCK=true in .env and data will come from src/mocks
        name: 'astro-msw',
        async configureServer(server) {
          if (process.env.USE_MOCK === 'true') {
            console.log('➡️ MSW enabled (server)')
            const { server: mswServer } = await import('./src/mocks/server.ts')
            mswServer.listen({ onUnhandledRequest: 'bypass' })

            server.httpServer.once('close', () => {
              mswServer.close()
            })
          }
        },
      },
    ],
    define: {
      'import.meta.env.PUBLIC_USE_MOCK': JSON.stringify(process.env.USE_MOCK),
    },
  },

  adapter: netlify(),
})
