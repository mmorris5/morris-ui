import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Label shown next to the checkbox' },
    error: { control: 'text', description: 'Error message — also applies error styling' },
    disabled: { control: 'boolean' },
    checked: { control: 'boolean', description: 'Controlled checked state' },
    defaultChecked: { control: 'boolean' },
  },
}
export default meta

type Story = StoryObj<typeof Checkbox>

export const Default: Story = { args: { label: 'Accept terms and conditions' } }
export const Checked: Story = { args: { label: 'Already checked', defaultChecked: true } }
export const Controlled: Story = { args: { label: 'Controlled checkbox', checked: true, readOnly: true } }
export const WithError: Story = { args: { label: 'Required field', error: 'This field is required' } }
export const Disabled: Story = { args: { label: 'Disabled checkbox', disabled: true } }
export const NoLabel: Story = { args: {} }
