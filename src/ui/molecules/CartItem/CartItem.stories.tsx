import type { Meta, StoryObj } from '@storybook/react'

import { CartItem } from './index'

const meta: Meta<typeof CartItem> = {
  title: 'Molecules/CartItem',
  component: CartItem,
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

export const Default: Story = {
  args: {
    picture: 'https://placecats.com/300/400',
    name: 'Great item',
    price: 150,
    quantity: 1,
    add: () => console.log('added!'),
    remove: () => console.log('removed!'),
    locale: 'fr-FR',
  },
}
