import { useEffect, useMemo } from 'react'

import 'src/mocks/init-worker'
import { useCartStore } from 'src/stores/cart'
import { useProductsStore } from 'src/stores/product'
import { Cart as DSCart } from 'src/ui/organisms/Cart'

import { CartItem } from './CartItem'

export const Cart: React.FC = () => {
  const fetchCart = useCartStore((state) => state.fetchCart)
  const fetchProducts = useProductsStore((state) => state.fetchProducts)
  const add = useCartStore((state) => state.add)
  const items = useCartStore((state) => state.items)
  const products = useProductsStore((state) => state.products)

  // Working on MSW made me add a lot of unfortunate values in orymor cart..
  // This is mostly used to keep it consistent with available products
  const validItems = useMemo(() => {
    return items.filter(
      (item) =>
        item.quantity > 0 && products.some((product) => product.id === item.id),
    )
  }, [items, products])

  const handleAdd = (event: any) => {
    const productId = event.detail.id
    add(productId)
  }

  useEffect(() => {
    window.addEventListener('cart-add', handleAdd)
    return () => window.removeEventListener('cart-add', handleAdd)
  }, [add])

  useEffect(() => {
    fetchCart()
  }, [fetchCart])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  return (
    <DSCart
      items={validItems.map((item) => (
        <CartItem id={item.id} />
      ))}
    />
  )
}
