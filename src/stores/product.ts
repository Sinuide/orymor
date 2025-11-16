import { useStore } from 'zustand'
import { createStore } from 'zustand/vanilla'

export type Product = {
  id: string
  name: string
  description: string
  price: number
  cover: string
}

type ProductsStore = {
  products: Product[]
  loading: boolean
  error: string | null

  fetchProducts: () => Promise<void>
  getById: (id: string) => Product | undefined
}

export const productsStore = createStore<ProductsStore>((set, get) => ({
  products: [],
  loading: false,
  error: null,

  fetchProducts: async () => {
    set({ loading: true, error: null })

    try {
      const res = await fetch('/api/products', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const json = await res.json()
      if (json.success && json.data) {
        set({
          products: json.data,
          loading: false,
          error: null,
        })
      }
    } catch (err: any) {
      set({
        loading: false,
        error: err.message ?? 'Products fetch failed',
      })
    }
  },

  getById: (id: string) => {
    const { products } = get()
    return products.find((product) => product.id === id)
  },
}))

export const useProductsStore = <T>(selector: (state: ProductsStore) => T) =>
  useStore(productsStore, selector)
