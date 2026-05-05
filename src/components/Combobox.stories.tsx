import type { Meta, StoryObj } from '@storybook/react'
import { Combobox } from './Combobox'

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'angular', label: 'Angular' },
  { value: 'solid', label: 'Solid' },
]

const meta: Meta<typeof Combobox> = {
  title: 'Components/Combobox',
  component: Combobox,
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

type Story = StoryObj<typeof Combobox>

export const Default: Story = {
  args: { options, label: 'Framework', placeholder: 'Search frameworks...' },
}

export const WithValue: Story = {
  args: { options, label: 'Framework', value: 'react' },
}

export const Glass: Story = {
  args: { options, label: 'Framework', variant: 'glass', placeholder: 'Search...' },
}

export const WithError: Story = {
  args: { options, label: 'Framework', error: 'Please select a valid option' },
}

export const WithCallback: Story = {
  args: {
    options,
    label: 'Framework',
    placeholder: 'Pick one...',
    onSelect: (option) => alert(`Selected: ${option.label}`),
  },
}
