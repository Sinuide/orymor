import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './index'

const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  component: Card,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div
        style={{
          width: 300,
          height: 400,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    picture: {
      control: 'object',
      defaultValue: {
        src: 'https://placecats.com/300/400',
        alt: 'Product Image',
      },
    },
    content: {
      control: 'object',
      defaultValue: {
        name: 'Product Name',
        description: 'A wonderful product, described here.',
        price: 1999.99,
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    picture: { src: 'https://placecats.com/300/400', alt: 'Product Image' },
    content: {
      name: 'Sample Card',
      description: 'A sample description of the card product.',
      price: 2999.95,
    },
  },
}

export const NoPictureAlt: Story = {
  args: {
    picture: {
      src: 'https://placecats.com/300/400',
    },
    content: {
      name: 'Used in picture alt',
      description: 'A sample description of the card product',
      price: 149.99,
    },
  },
}
