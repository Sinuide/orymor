import type { Meta, StoryObj } from '@storybook/react'

import { QuantitySelector } from './index'

const meta: Meta<typeof QuantitySelector> = {
  title: 'Molecules/QuantitySelector',
  component: QuantitySelector,
  args: {
    add: () => console.log('added!'),
    remove: () => console.log('removed!'),
    quantity: 3,
  },
}
export default meta

type Story = StoryObj<typeof QuantitySelector>

export const Default: Story = {
  args: {
    add: () => console.log('added!'),
    remove: () => console.log('removed!'),
    quantity: 3,
  },
}
