import { useCartStore } from 'src/stores/cart'
import { useLocaleStore } from 'src/stores/locale'
import { useProductsStore } from 'src/stores/product'
import { CartItem as DSCartItem } from 'src/ui/molecules/CartItem'

export type CartItemProps = {
  id: string
}

export const CartItem: React.FC<CartItemProps> = ({ id }) => {
  const product = useProductsStore((state) => state.getById(id))
  const quantity = useCartStore(
    (state) => state.items.find((item) => item.id === id)?.quantity ?? 0,
  )
  const add = useCartStore((state) => state.add)
  const remove = useCartStore((state) => state.remove)
  const locale = useLocaleStore().locale

  if (!product) return null

  return (
    <DSCartItem
      locale={locale}
      name={product.name}
      price={product.price}
      quantity={quantity}
      picture={`/api/image/${id}`}
      add={() => add(id)}
      remove={() => remove(id)}
    />
  )
}
