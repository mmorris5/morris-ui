import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Diameter of the avatar',
    },
    variant: {
      control: 'select',
      options: ['circular', 'rounded'],
      description: 'Shape of the avatar',
    },
    initials: { control: 'text', description: 'Displayed when no src is provided' },
    src: { control: 'text', description: 'Image URL' },
  },
}
export default meta

type Story = StoryObj<typeof Avatar>

export const WithInitials: Story = {
  args: { initials: 'MM', size: 'md' },
}

export const Small: Story = {
  args: { initials: 'AB', size: 'sm' },
}

export const Large: Story = {
  args: { initials: 'JD', size: 'lg' },
}

export const ExtraLarge: Story = {
  args: { initials: 'XL', size: 'xl' },
}

export const Rounded: Story = {
  args: { initials: 'RV', variant: 'rounded', size: 'lg' },
}

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=12',
    alt: 'User avatar',
    size: 'lg',
  },
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      {(['sm', 'md', 'lg', 'xl'] as const).map((s) => (
        <Avatar key={s} initials={s.toUpperCase()} size={s} />
      ))}
    </div>
  ),
}
