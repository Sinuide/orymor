import { http, HttpResponse } from 'msw'
import { setupWorker } from 'msw/browser'

import productsData from './products.json'

let cartData: Record<string, number> = {
  'a1d2c3b4-0001-42aa-9999-111111111111': 2,
  'a1d2c3b4-0002-42aa-9999-222222222222': 1,
}

export const handlers = [
  // Mock get products
  http.get('/api/products', () =>
    HttpResponse.json({ success: true, data: productsData }),
  ),

  // Mock get cart with pre defined cart
  http.get('/api/cart', () =>
    HttpResponse.json({ success: true, data: cartData }),
  ),

  // Mock cart update but keep functionality with local state
  http.post('/api/cart/update', async ({ request }) => {
    const body = (await request.json()) as {
      items?: { id: string; quantity: number }[]
    } | null

    if (!body || !body.items) {
      return HttpResponse.json(
        { success: false, error: 'No items provided' },
        { status: 400 },
      )
    }

    cartData = {}
    body.items.forEach((item: { id: string; quantity: number }) => {
      cartData[item.id] = item.quantity
    })

    return HttpResponse.json({ success: true })
  }),

  // Mock images to placeholder
  http.get('/api/image/:id', async () => {
    const imgResp = await fetch('/placeholder.jpg')
    const buffer = await imgResp.arrayBuffer()
    return new HttpResponse(buffer, {
      status: 200,
      headers: { 'Content-Type': 'image/jpeg' },
    })
  }),
]

export const worker = setupWorker(...handlers)
