import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'
import { Button } from './Button'

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean', description: 'Controls visibility' },
    title: { control: 'text' },
    closeButton: { control: 'boolean' },
  },
}
export default meta

type Story = StoryObj<typeof Modal>

export const Default: Story = {
  args: {
    isOpen: true,
    title: 'Example Modal',
    children: <p style={{ color: '#444' }}>This is the modal body. You can put any content here.</p>,
    closeButton: true,
    onClose: () => {},
  },
}

export const WithActions: Story = {
  args: {
    isOpen: true,
    title: 'Confirm Action',
    children: <p style={{ color: '#444' }}>Are you sure you want to do this?</p>,
    closeButton: true,
    onClose: () => {},
    actions: (
      <div style={{ display: 'flex', gap: '12px' }}>
        <Button variant="outline">Cancel</Button>
        <Button>Confirm</Button>
      </div>
    ),
  },
}

export const NoCloseButton: Story = {
  args: {
    isOpen: true,
    title: 'No Close Button',
    children: <p style={{ color: '#444' }}>This modal can only be dismissed by clicking the backdrop.</p>,
    closeButton: false,
    onClose: () => {},
  },
}

export const Interactive: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <div style={{ padding: '24px' }}>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Interactive Modal"
          actions={
            <div style={{ display: 'flex', gap: '12px' }}>
              <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={() => setOpen(false)}>Confirm</Button>
            </div>
          }
        >
          <p style={{ color: '#444' }}>Click Confirm or Cancel (or the backdrop) to close.</p>
        </Modal>
      </div>
    )
  },
}
