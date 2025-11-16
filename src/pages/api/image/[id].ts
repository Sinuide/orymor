import type { APIRoute } from 'astro'

// Prevent astro from trying to prerender this endpoint
export const prerender = false

// Astro API route to call image with correct headers
export const GET: APIRoute = async ({ params }) => {
  const id = params.id

  const res = await fetch(
    `${import.meta.env.PUBLIC_BASE_URL}/product/${id}/cover_picture`,
    {
      headers: {
        'x-api-key': import.meta.env.PUBLIC_API_KEY,
        Accept: 'image/jpeg',
      },
    },
  )

  if (!res.ok) {
    return new Response('Not found', { status: 404 })
  }

  const blob = await res.arrayBuffer()

  return new Response(blob, {
    headers: {
      'Content-Type': 'image/jpg',
    },
  })
}
