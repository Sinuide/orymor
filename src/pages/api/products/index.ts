import type { APIRoute } from 'astro'

import { fetchProducts } from 'src/queries/products'

// Prevent astro from prerendering this API endpoint
export const prerender = false

export const GET: APIRoute = async () => {
  try {
    const json = await fetchProducts()

    return new Response(JSON.stringify({ success: true, data: json }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err: any) {
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    )
  }
}
