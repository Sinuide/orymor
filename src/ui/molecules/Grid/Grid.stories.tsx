import type { Meta, StoryObj } from '@storybook/react'

import { Grid, type GridProps } from '.'
import type { CardProps } from '../Card'

const meta: Meta<typeof Grid> = {
  title: 'Molecules/Grid',
  component: Grid,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Grid>

const items: GridProps['items'] = Array.from({ length: 20 }, (_, i) => ({
  id: `id-${i}`,
  picture: {
    src: 'https://placecats.com/300/400',
    alt: `Product ${i + 1}`,
  },
  content: {
    name: `Product ${i + 1}`,
    description: `Description for product ${i + 1}.`,
    price: (i + 1) * 5,
  },
}))

export const Default: Story = {
  args: {
    items,
  },
}
