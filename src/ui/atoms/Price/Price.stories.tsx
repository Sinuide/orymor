import type { Meta, StoryObj } from '@storybook/react'

import { localeStore } from 'src/stores/locale'

import { Price } from './index'

const meta: Meta<typeof Price> = {
  title: 'Atoms/Price',
  component: Price,
  tags: ['autodocs'],
  argTypes: {
    price: { control: { type: 'number' } },
  },
}

export default meta

type Story = StoryObj<typeof Price>

export const Default: Story = {
  args: {
    price: 1234.56,
  },
}

export const Zero: Story = {
  args: {
    price: 0,
  },
}

export const LargeNumber: Story = {
  args: {
    price: 1000000.99,
  },
}

export const EnUSLocale: Story = {
  args: {
    price: 1234.56,
    locale: 'en-US',
  },
}
