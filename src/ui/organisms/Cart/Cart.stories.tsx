import type { Meta, StoryObj } from '@storybook/react'

import { CartItem } from 'src/ui/molecules/CartItem'

import { Cart } from './index'

const meta: Meta<typeof Cart> = {
  component: Cart,
  title: 'Organisms/Cart',
}
export default meta

export const Default: StoryObj<typeof Cart> = {
  args: {
    items: [
      <CartItem
        name="Quantum Banana Deluxe"
        price={42}
        picture="https://placecats.com/300/400"
        quantity={5}
        add={() => console.log('added Quantum Banana Deluxe')}
        remove={() => console.log('removed Quantum Banana Deluxe')}
      />,
      <CartItem
        name="Chaise Antigravité Mk.2"
        price={1999}
        picture="https://placecats.com/300/400"
        quantity={2}
        add={() => console.log('added Chaise Antigravité Mk.2')}
        remove={() => console.log('removed Chaise Antigravité Mk.2')}
      />,
      <CartItem
        name="T-shirt Invisible (taille unique)"
        price={42}
        picture="https://placecats.com/300/400"
        quantity={1}
        add={() => console.log('added T-shirt Invisible (taille unique)')}
        remove={() => console.log('removed T-shirt Invisible (taille unique)')}
      />,
    ],
  },
}

export const Empty: StoryObj<typeof Cart> = {
  args: {
    items: [],
  },
}
