import { useProductsStore } from 'src/stores/product'
import { Picture } from 'src/ui/atoms/Picture'
import { Price } from 'src/ui/atoms/Price'
import { Typography } from 'src/ui/atoms/Typography'

import { QuantitySelector } from '../QuantitySelector'
import './cart-item.css'

export type CartItemProps = {
  id: string
}

export const CartItem: React.FC<CartItemProps> = ({ id }) => {
  const product = useProductsStore((state) => state.getById(id))

  if (!product) return null

  return (
    // In cart, no need for SEO, div is fine
    <div className="cart-item">
      <Picture id={id} alt={product.name} />
      <div className="cart-item-content">
        <Typography variant="h4">{product.name}</Typography>
        <Price price={product.price} />
        <QuantitySelector id={id} />
      </div>
    </div>
  )
}
