import type { APIRoute } from 'astro'

// Prevent astro from trying to prerender this endpoint
export const prerender = false

// Astro API route to call image with correct headers
export const GET: APIRoute = async ({ params }) => {
  const id = params.id

  const res = await fetch(
    `${process.env.BASE_URL}/product/${id}/cover_picture`,
    {
      headers: {
        'x-api-key': process.env.API_KEY as string,
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
