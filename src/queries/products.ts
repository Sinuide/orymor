import type { Product } from 'src/stores/product'

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${process.env.BASE_URL}/products`, {
    method: 'POST',
    headers: {
      'x-api-key': process.env.API_KEY as string,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: {
        products: [],
      },
    }),
  })

  const data = await res.json()

  const json = data.data.products.map((product: any) => ({
    id: product.product_id,
    name: product.product_name,
    description: product.product_desc,
    price: product.product_price,
    cover: product.picture_path,
  }))

  return json
}
