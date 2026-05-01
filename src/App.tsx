import React, { useState } from 'react'
import { Alert } from './components/Alert'
import { Avatar } from './components/Avatar'
import { Badge } from './components/Badge'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { Checkbox } from './components/Checkbox'
import { Combobox } from './components/Combobox'
import { Dropdown } from './components/Dropdown'
import { HamburgerMenu } from './components/HamburgerMenu'
import { Modal } from './components/Modal'
import { Radio } from './components/Radio'
import { TextInput } from './components/TextInput'

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="text-xl font-bold text-m3-primary mb-4 border-b border-m3-border pb-2">{title}</h2>
    <div className="flex flex-wrap gap-4 items-start">{children}</div>
  </section>
)

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [alertVisible, setAlertVisible] = useState(true)

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Components', href: '#' },
    { label: 'Docs', href: '#' },
    { label: 'GitHub', href: '#' },
  ]

  const dropdownOptions = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'angular', label: 'Angular' },
  ]

  return (
    <div className="min-h-screen bg-m3-lighter">
      {/* Navbar */}
      <header className="bg-white border-b border-m3-border px-6 py-4 flex items-center justify-between mb-10 shadow-sm">
        <span className="text-2xl font-bold text-m3-primary">morris-ui</span>
        <HamburgerMenu items={navItems} branding={<span className="font-bold text-m3-primary">morris-ui</span>} />
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-16">

        {/* Buttons */}
        <Section title="Button">
          {(['primary', 'secondary', 'outline', 'glass', 'ghost'] as const).map(v => (
            <Button key={v} variant={v}>{v.charAt(0).toUpperCase() + v.slice(1)}</Button>
          ))}
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button disabled>Disabled</Button>
        </Section>

        {/* Badges */}
        <Section title="Badge">
          {(['primary', 'secondary', 'accent', 'success', 'warning', 'danger'] as const).map(v => (
            <Badge key={v} variant={v}>{v.charAt(0).toUpperCase() + v.slice(1)}</Badge>
          ))}
        </Section>

        {/* Alerts */}
        <Section title="Alert">
          <div className="w-full flex flex-col gap-3">
            <Alert variant="info" title="Info">This is an informational alert.</Alert>
            <Alert variant="success" title="Success">Your changes have been saved.</Alert>
            <Alert variant="warning" title="Warning">Please review before continuing.</Alert>
            {alertVisible && (
              <Alert variant="danger" title="Error" closeable onClose={() => setAlertVisible(false)}>
                Something went wrong. Click × to dismiss.
              </Alert>
            )}
            {!alertVisible && (
              <Button size="sm" variant="outline" onClick={() => setAlertVisible(true)}>
                Reset dismissible alert
              </Button>
            )}
          </div>
        </Section>

        {/* Cards */}
        <Section title="Card">
          <Card className="w-64">
            <h3 className="font-bold text-m3-primary mb-1">Default Card</h3>
            <p className="text-sm text-m3-secondary">Card content goes here.</p>
          </Card>
          <Card variant="glass" className="w-64">
            <h3 className="font-bold text-m3-primary mb-1">Glass Card</h3>
            <p className="text-sm text-m3-secondary">Glass morphism style.</p>
          </Card>
        </Section>

        {/* Avatars */}
        <Section title="Avatar">
          <Avatar initials="MM" size="sm" />
          <Avatar initials="AB" size="md" />
          <Avatar initials="JD" size="lg" />
          <Avatar initials="XY" size="xl" />
          <Avatar initials="RV" variant="rounded" size="lg" />
        </Section>

        {/* Text Inputs */}
        <Section title="TextInput">
          <div className="w-64 flex flex-col gap-3">
            <TextInput label="Default" placeholder="Enter text..." />
            <TextInput label="Glass" variant="glass" placeholder="Glass style..." />
            <TextInput label="With error" error="This field is required" placeholder="Error state" />
            <TextInput label="With helper" helperText="We'll never share your email." placeholder="helper@example.com" />
          </div>
        </Section>

        {/* Checkbox & Radio */}
        <Section title="Checkbox &amp; Radio">
          <div className="flex flex-col gap-2">
            <Checkbox label="Default checkbox" />
            <Checkbox label="Checked checkbox" defaultChecked />
            <Checkbox label="Error state" error="Required" />
          </div>
          <div className="flex flex-col gap-2">
            <Radio label="Option A" name="demo" defaultChecked />
            <Radio label="Option B" name="demo" />
            <Radio label="Option C" name="demo" />
          </div>
        </Section>

        {/* Dropdown & Combobox */}
        <Section title="Dropdown &amp; Combobox">
          <div className="w-64">
            <Dropdown options={dropdownOptions} label="Dropdown" placeholder="Pick a framework..." />
          </div>
          <div className="w-64">
            <Combobox options={dropdownOptions} label="Combobox" placeholder="Search frameworks..." />
          </div>
        </Section>

        {/* Modal */}
        <Section title="Modal">
          <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
          <Modal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            title="Example Modal"
            actions={
              <>
                <Button variant="outline" onClick={() => setModalOpen(false)}>Cancel</Button>
                <Button onClick={() => setModalOpen(false)}>Confirm</Button>
              </>
            }
          >
            <p className="text-m3-secondary">This is the modal body. You can put any content here.</p>
          </Modal>
        </Section>

      </main>
    </div>
  )
}

export default App
