import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown } from './Dropdown'

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'angular', label: 'Angular' },
]

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    error: { control: 'text' },
    value: { control: 'text', description: 'Controlled selected option value' },
    defaultValue: { control: 'text', description: 'Initial selected option value' },
    variant: { control: 'select', options: ['default', 'glass'] },
  },
}
export default meta

type Story = StoryObj<typeof Dropdown>

export const Default: Story = {
  args: { options, label: 'Framework', placeholder: 'Pick a framework...' },
}

export const WithValue: Story = {
  args: { options, label: 'Framework', value: 'vue' },
}

export const Glass: Story = {
  args: { options, label: 'Framework', variant: 'glass', placeholder: 'Pick a framework...' },
}

export const WithError: Story = {
  args: { options, label: 'Framework', error: 'Selection is required' },
}

export const NoLabel: Story = {
  args: { options, placeholder: 'Choose...' },
}
