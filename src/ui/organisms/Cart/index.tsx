import { type ReactElement, useState } from 'react'

import { Typography } from 'src/ui/atoms/Typography'
import { classNames } from 'src/utils/classNames'

import './cart.css'

export type Cartprops = {
  items: ReactElement[]
}

export const Cart: React.FC<Cartprops> = ({ items }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className="cart-container">
      <button
        className="cart-toggle"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? '✖️' : '🧺'}
      </button>
      <div className={classNames('cart', { active: isOpen })}>
        <div className="cart-header">
          <Typography variant="h3" uppercase>
            Mon panier
          </Typography>
        </div>
        <div className="cart-items">
          {items.length ? items : <Typography>Panier vide</Typography>}
        </div>
      </div>
    </div>
  )
}
