import type { APIRoute } from 'astro'

// Prevent astro from trying to prerender this endpoint
export const prerender = false

export const POST: APIRoute = async ({ request }) => {
  try {
    const { items } = (await request.json()) as {
      items: { id: string; quantity: number }[]
    }

    if (!Array.isArray(items)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid payload' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        },
      )
    }

    const products: Record<string, number> = {}
    items.forEach((item) => {
      products[item.id] = item.quantity
    })

    const body = {
      data: {
        // Hardcoded here for simplicity, not very usable other than in this test 😅
        user_id: 'orymor',
        products,
      },
    }

    const res = await fetch(`${import.meta.env.PUBLIC_BASE_URL}/basket`, {
      method: 'POST',
      headers: {
        'x-api-key': import.meta.env.PUBLIC_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    const json = await res.json()

    return new Response(JSON.stringify({ success: true, apiResponse: json }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err: any) {
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    )
  }
}
