import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'success', 'warning', 'danger'],
      description: 'Color variant of the badge',
    },
    children: { control: 'text' },
  },
}
export default meta

type Story = StoryObj<typeof Badge>

export const Primary: Story = { args: { variant: 'primary', children: 'Primary' } }
export const Secondary: Story = { args: { variant: 'secondary', children: 'Secondary' } }
export const Accent: Story = { args: { variant: 'accent', children: 'Accent' } }
export const Success: Story = { args: { variant: 'success', children: 'Success' } }
export const Warning: Story = { args: { variant: 'warning', children: 'Warning' } }
export const Danger: Story = { args: { variant: 'danger', children: 'Danger' } }

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {(['primary', 'secondary', 'accent', 'success', 'warning', 'danger'] as const).map((v) => (
        <Badge key={v} variant={v}>{v.charAt(0).toUpperCase() + v.slice(1)}</Badge>
      ))}
    </div>
  ),
}
