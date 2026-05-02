import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { HamburgerMenu } from './HamburgerMenu'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Components', href: '#components' },
  { label: 'Docs', href: '#docs' },
  { label: 'GitHub', href: '#github' },
]

const meta: Meta<typeof HamburgerMenu> = {
  title: 'Components/HamburgerMenu',
  component: HamburgerMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    branding: { control: false },
  },
}
export default meta

type Story = StoryObj<typeof HamburgerMenu>

export const Default: Story = {
  args: { items: navItems },
}

export const WithBranding: Story = {
  args: {
    items: navItems,
    branding: <span style={{ fontWeight: 'bold', fontSize: '20px' }}>morris-ui</span>,
  },
}

export const WithCallbacks: Story = {
  render: () => {
    const [last, setLast] = useState<string>('')
    return (
      <div>
        <HamburgerMenu
          items={navItems}
          onItemClick={(item) => setLast(item.label)}
          branding="my-app"
        />
        {last && (
          <p style={{ padding: '16px' }}>Last clicked: <strong>{last}</strong></p>
        )}
      </div>
    )
  },
}
