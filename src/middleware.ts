import { defineMiddleware } from 'astro/middleware'

// Astro middleware to handle page calls
// Used to define locale in url if not provided
export const onRequest = defineMiddleware((context, next) => {
  if (context.url.pathname.startsWith('/api')) {
    return next() // Dont rewrite api calls
  }

  // Always set locale
  if (context.url.pathname === '/') {
    return context.redirect('/fr-FR/')
  }

  return next()
})
