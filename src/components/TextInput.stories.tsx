import type { Meta, StoryObj } from '@storybook/react'
import { TextInput } from './TextInput'

const meta: Meta<typeof TextInput> = {
  title: 'Components/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    error: { control: 'text' },
    helperText: { control: 'text' },
    value: { control: 'text', description: 'Controlled input value' },
    variant: { control: 'select', options: ['default', 'glass'] },
    disabled: { control: 'boolean' },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search'],
    },
  },
}
export default meta

type Story = StoryObj<typeof TextInput>

export const Default: Story = {
  args: { label: 'Full name', placeholder: 'Enter your name...' },
}

export const WithValue: Story = {
  args: { label: 'Full name', value: 'Matt Morris', readOnly: true },
}

export const Glass: Story = {
  args: { label: 'Email', variant: 'glass', placeholder: 'you@example.com', type: 'email' },
}

export const WithError: Story = {
  args: { label: 'Email', placeholder: 'you@example.com', error: 'Invalid email address', type: 'email' },
}

export const WithHelper: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    helperText: "We'll never share your email.",
    type: 'email',
  },
}

export const Password: Story = {
  args: { label: 'Password', placeholder: '••••••••', type: 'password' },
}

export const Disabled: Story = {
  args: { label: 'Disabled', placeholder: 'Cannot edit', disabled: true },
}
