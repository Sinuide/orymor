import type { Meta, StoryObj } from '@storybook/react'
import { useEffect } from 'react'

import { useCartStore } from 'src/stores/cart'
import { productsStore } from 'src/stores/product'

import { CartItem } from './index'

const meta: Meta<typeof CartItem> = {
  title: 'Molecules/CartItem',
  component: CartItem,
  args: {
    id: 'item-1',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 300 }}>
        <Story />
      </div>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof CartItem>

type SetupProps = {
  id: string
  name?: string
  price?: number
  cover?: string
  initialQuantity?: number
}

const Setup = ({
  id,
  name = 'Product',
  price = 180,
  cover = 'https://placecats.com/300/400',
  initialQuantity = 2,
}: SetupProps) => {
  // Set up product and cart state before rendering the story
  const setProducts = productsStore.setState
  const addToCart = useCartStore((state) => state.add)
  const deleteCartItem = useCartStore((state) => state.delete)
  const items = useCartStore((state) => state.items)

  useEffect(() => {
    // Add product to the store
    setProducts((state: any) => ({
      ...state,
      products: [{ id, name, description: 'A sample product', price, cover }],
    }))

    // Clear cart and add target item
    items.forEach((item) => deleteCartItem(item.id))
    for (let i = 0; i < initialQuantity; i++) {
      addToCart(id)
    }
  }, [id, name, price, cover, initialQuantity])

  return null
}

export const Default: Story = {
  render: (args) => (
    <>
      <Setup id={args.id} />
      <CartItem {...args} />
    </>
  ),
}
