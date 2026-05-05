import type { Meta, StoryObj } from '@storybook/react'
import { Radio } from './Radio'

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
    checked: { control: 'boolean', description: 'Controlled checked state' },
    defaultChecked: { control: 'boolean' },
  },
}
export default meta

type Story = StoryObj<typeof Radio>

export const Default: Story = { args: { label: 'Option A', name: 'demo' } }
export const Checked: Story = { args: { label: 'Option A', name: 'demo2', defaultChecked: true } }
export const Controlled: Story = { args: { label: 'Option A', name: 'demo5', checked: true, readOnly: true } }
export const WithError: Story = { args: { label: 'Option A', name: 'demo3', error: 'Selection required' } }
export const Disabled: Story = { args: { label: 'Disabled option', name: 'demo4', disabled: true } }

export const Group: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Radio label="Option A" name="group" defaultChecked />
      <Radio label="Option B" name="group" />
      <Radio label="Option C" name="group" />
    </div>
  ),
}
