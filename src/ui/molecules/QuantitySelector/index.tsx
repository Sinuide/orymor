import { useCartStore } from 'src/stores/cart'
import { Typography } from 'src/ui/atoms/Typography'

import './quantity-selector.css'

export type QuantitySelectorProps = {
  id: string
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({ id }) => {
  const quantity = useCartStore(
    (state) => state.items.find((item) => item.id === id)?.quantity ?? 0,
  )
  const add = useCartStore((state) => state.add)
  const remove = useCartStore((state) => state.remove)

  return (
    // Cart is not used for SEO, div is fine
    <div className="quantity-selector">
      <div className="quantity-selector-quantity">
        <Typography variant="span">Quantité : </Typography>
        <Typography variant="span" bold>
          {quantity}
        </Typography>
      </div>
      <div className="quantity-selector-actions">
        {/* Could be a Button atom, but only used here atm */}
        <button
          className="quantity-action quantity-add"
          onClick={() => add(id)}
        >
          +
        </button>
        <button
          className="quantity-action quantity-remove"
          onClick={() => remove(id)}
        >
          -
        </button>
      </div>
    </div>
  )
}
