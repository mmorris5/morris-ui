import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from './Alert'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'warning', 'danger', 'info'],
      description: 'Semantic tone of the alert',
    },
    title: { control: 'text' },
    closeable: { control: 'boolean' },
    children: { control: 'text' },
  },
}
export default meta

type Story = StoryObj<typeof Alert>

export const Info: Story = {
  args: { variant: 'info', title: 'Info', children: 'This is an informational alert.' },
}

export const Success: Story = {
  args: { variant: 'success', title: 'Success', children: 'Your changes have been saved.' },
}

export const Warning: Story = {
  args: { variant: 'warning', title: 'Warning', children: 'Please review before continuing.' },
}

export const Danger: Story = {
  args: { variant: 'danger', title: 'Error', children: 'Something went wrong.' },
}

export const Closeable: Story = {
  args: {
    variant: 'danger',
    title: 'Dismissible',
    closeable: true,
    onClose: () => alert('Closed!'),
    children: 'Click × to dismiss this alert.',
  },
}

export const NoTitle: Story = {
  args: { variant: 'info', children: 'An alert without a title.' },
}
