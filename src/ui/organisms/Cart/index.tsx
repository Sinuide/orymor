import { useEffect, useState } from 'react'

import { useCartStore } from 'src/stores/cart'
import { useProductsStore } from 'src/stores/product'
import { Typography } from 'src/ui/atoms/Typography'
import { CartItem } from 'src/ui/molecules/CartItem'
import { classNames } from 'src/utils/classNames'

import './cart.css'

export const Cart: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const items = useCartStore((state) => state.items)
  const fetchCart = useCartStore((state) => state.fetchCart)
  const fetchProducts = useProductsStore((state) => state.fetchProducts)
  const add = useCartStore((state) => state.add)

  const handleAdd = (event: any) => {
    const productId = event.detail.id
    if (!items.some((item) => item.id === productId && item.quantity > 0)) {
      add(productId)
    }
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
          {items.filter((item) => item.quantity > 0).length ? (
            items
              .filter((item) => item.quantity > 0)
              .map((item) => <CartItem key={item.id} id={item.id} />)
          ) : (
            <Typography>Panier vide</Typography>
          )}
        </div>
      </div>
    </div>
  )
}
