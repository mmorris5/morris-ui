import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'glass'],
      description: 'Visual style — default white card or glassmorphism',
    },
  },
}
export default meta

type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    variant: 'default',
    children: (
      <div>
        <h3 style={{ fontWeight: 'bold', marginBottom: '4px' }}>Card Title</h3>
        <p style={{ fontSize: '14px', color: '#444' }}>Card body content goes here.</p>
      </div>
    ),
  },
}

export const Glass: Story = {
  args: {
    variant: 'glass',
    children: (
      <div>
        <h3 style={{ fontWeight: 'bold', marginBottom: '4px' }}>Glass Card</h3>
        <p style={{ fontSize: '14px', color: '#444' }}>Glassmorphism style with backdrop blur.</p>
      </div>
    ),
  },
  parameters: {
    backgrounds: { default: 'gradient' },
  },
}
