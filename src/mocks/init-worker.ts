async function enableMocks() {
  // Prevent usage in SSR/SSG
  if (typeof window === 'undefined') return

  if (import.meta.env.PUBLIC_USE_MOCK === 'true') {
    // Only load if enabled, could be quite heavy otherwise
    const { worker } = await import('./browser')
    worker.start()
  }
}

enableMocks()
