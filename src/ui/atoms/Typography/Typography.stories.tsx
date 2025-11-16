import type { Meta, StoryObj } from "@storybook/react"

import { Typography } from "./index"

const meta: Meta<typeof Typography> = {
  title: "Atoms/Typography",
  component: Typography,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span", "div"],
    },
    children: {
      control: "text",
    },
  },
}

export default meta

type Story = StoryObj<typeof Typography>

export const Default: Story = {
  args: {
    children: "This is a Typography component.",
  },
}

export const Headings: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
    </div>
  ),
  args: {},
}

export const Paragraph: Story = {
  args: {
    children: "This is a paragraph.",
    variant: "p",
  },
}

export const Span: Story = {
  args: {
    children: "This is a span.",
    variant: "span",
  },
}

export const Div: Story = {
  args: {
    children: "This is a div container.",
    variant: "div",
  },
}

export const Uppercase: Story = {
  args: {
    children: "This is a uppercase text.",
    variant: "p",
    uppercase: true,
  },
}
