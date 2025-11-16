import { useStore } from 'zustand'
import { createStore } from 'zustand/vanilla'

export type CartItem = { id: string; quantity: number }

export type CartStore = {
  items: CartItem[]
  add: (id: string) => void
  remove: (id: string) => void
  delete: (id: string) => void
  fetchCart: () => Promise<void>
}

export const cartStore = createStore<CartStore>((set) => ({
  items: [],
  add: (id) =>
    set((state) => {
      const item = state.items.find((item) => item.id === id)
      if (item) {
        item.quantity++
        return { items: [...state.items] }
      }
      return { items: [...state.items, { id, quantity: 1 }] }
    }),

  remove: (id) =>
    set((state) => {
      const item = state.items.find((item) => item.id === id)
      if (!item) return state
      // Keep item with quantity 0, can be re added later, removing it completely will be handled by delete
      item.quantity = item.quantity - 1 < 0 ? 0 : item.quantity - 1
      return { items: [...state.items] }
    }),

  delete: (id) =>
    set((state) => {
      return { items: state.items.filter((item) => item.id !== id) }
    }),

  fetchCart: async () => {
    try {
      const res = await fetch('/api/cart', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
      const json = await res.json()
      if (json.success && json.data) {
        const items = Object.entries(json.data).map(([id, quantity]) => ({
          id,
          quantity: Number(quantity),
        }))
        set({ items })
      }
    } catch (err) {
      console.error('Cart fetch failed', err)
    }
  },
}))

// Auto update db when store is changed
cartStore.subscribe((state: CartStore) => {
  fetch('/api/cart/update', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ items: state.items }),
  }).catch(console.error)
})

export const useCartStore = <T>(selector: (state: CartStore) => T) =>
  useStore(cartStore, selector)
