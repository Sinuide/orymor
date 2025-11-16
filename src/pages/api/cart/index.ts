import type { APIRoute } from 'astro'

// Prevent astro from trying to prerender this endpoint
export const prerender = false

export const GET: APIRoute = async () => {
  // Hardcoded here for simplicity, not very usable other than in this test 😅
  const user = 'orymor'

  try {
    const res = await fetch(
      `${import.meta.env.PUBLIC_BASE_URL}/basket/${user}`,
      {
        method: 'GET',
        headers: {
          'x-api-key': import.meta.env.PUBLIC_API_KEY,
          'Content-Type': 'application/json',
        },
      },
    )

    if (!res.ok) {
      return new Response(
        JSON.stringify({
          success: false,
          status: res.status,
          statusText: res.statusText,
        }),
        { status: res.status, headers: { 'Content-Type': 'application/json' } },
      )
    }

    const json = (await res.json()).data.products

    return new Response(JSON.stringify({ success: true, data: json }), {
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
