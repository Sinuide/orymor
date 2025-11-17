import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

const productsFile = path.join(__dirname, 'products.json')
const productsData = JSON.parse(fs.readFileSync(productsFile, 'utf-8'))

export const handlers = [
  // Mock POST /products
  http.post(`${process.env.BASE_URL}/products`, async () => {
    return HttpResponse.json(productsData)
  }),

  // Mock GET /product/:productId/cover_picture
  http.get(`${process.env.BASE_URL}/product/:productId/cover_picture`, () => {
    const img = fs.readFileSync(
      path.join(process.cwd(), 'public', 'placeholder.jpg'),
    )

    return new HttpResponse(img, {
      status: 200,
      headers: {
        'Content-Type': 'image/jpeg',
      },
    })
  }),
]

export const server = setupServer(...handlers)
