import type { Locale } from 'src/config'
import { Picture } from 'src/ui/atoms/Picture'
import { Price } from 'src/ui/atoms/Price'
import { Typography } from 'src/ui/atoms/Typography'

import { QuantitySelector } from '../QuantitySelector'
import './cart-item.css'

export type CartItemProps = {
  picture: string
  name: string
  price: number
  quantity: number
  add: () => void
  remove: () => void
  locale?: Locale
}

export const CartItem: React.FC<CartItemProps> = ({
  picture,
  name,
  price,
  quantity,
  add,
  remove,
  locale,
}) => {
  return (
    // In cart, no need for SEO, div is fine
    <div className="cart-item">
      <Picture src={picture} alt={name} />
      <div className="cart-item-content">
        <Typography variant="h4">{name}</Typography>
        <Price price={price} locale={locale} />
        <QuantitySelector quantity={quantity} add={add} remove={remove} />
      </div>
    </div>
  )
}
