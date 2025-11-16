import type { Meta, StoryObj } from '@storybook/react'
import { useEffect } from 'react'

import { useCartStore } from 'src/stores/cart'

import { QuantitySelector } from './index'

const meta: Meta<typeof QuantitySelector> = {
  title: 'Molecules/QuantitySelector',
  component: QuantitySelector,
  args: {
    id: 'item-1',
  },
}
export default meta

type Story = StoryObj<typeof QuantitySelector>

type SetupCartProps = {
  id: string
  initialQuantity?: number
}

const SetupCart = ({ id, initialQuantity = 2 }: SetupCartProps) => {
  // Set item in zustand before story renders
  const add = useCartStore((state) => state.add)
  const deleteItem = useCartStore((state) => state.delete)
  const items = useCartStore((state) => state.items)

  useEffect(() => {
    // Clear existing items
    items.forEach((item) => deleteItem(item.id))
    // Add initial item
    for (let i = 0; i < initialQuantity; i++) {
      add(id)
    }
  }, [id, initialQuantity])

  return null
}

export const Default: Story = {
  render: (args) => (
    <>
      <SetupCart id={args.id} initialQuantity={2} />
      <QuantitySelector {...args} />
    </>
  ),
}
