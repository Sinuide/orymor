import { Typography } from 'src/ui/atoms/Typography'

import './quantity-selector.css'

export type QuantitySelectorProps = {
  quantity: number
  add: () => void
  remove: () => void
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  add,
  remove,
}) => (
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
      <button className="quantity-action quantity-add" onClick={add}>
        +
      </button>
      <button className="quantity-action quantity-remove" onClick={remove}>
        -
      </button>
    </div>
  </div>
)
