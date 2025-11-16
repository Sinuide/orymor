import type { Meta, StoryObj } from '@storybook/react'
import { useEffect } from 'react'

import { cartStore } from 'src/stores/cart'
import { productsStore } from 'src/stores/product'

import { Cart } from './index'

const meta: Meta<typeof Cart> = {
  component: Cart,
  title: 'Organisms/Cart',
}
export default meta

const ITEMS = [
  { id: 'product-1', quantity: 2 },
  { id: 'product-2', quantity: 1 },
  { id: 'product-3', quantity: 5 },
]

const PRODUCTS = [
  {
    id: 'product-1',
    name: 'Product 1',
    description: '',
    price: 10,
    cover: 'https://placecats.com/300/400',
  },
  {
    id: 'product-2',
    name: 'Product 2',
    description: '',
    price: 20,
    cover: 'https://placecats.com/300/400',
  },
  {
    id: 'product-3',
    name: 'Product 3',
    description: '',
    price: 15,
    cover: 'https://placecats.com/300/400',
  },
]

export const WithThreeItems: StoryObj<typeof Cart> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        cartStore.setState({ items: ITEMS })
        productsStore.setState({ products: PRODUCTS })
      }, [])
      return <Story />
    },
  ],
  args: {},
}

export const Empty: StoryObj<typeof Cart> = {
  decorators: [
    (Story) => {
      useEffect(() => {
        cartStore.setState({ items: [] })
        productsStore.setState({ products: PRODUCTS })
      }, [])
      return <Story />
    },
  ],
  args: {},
}
