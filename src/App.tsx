import React, { useState } from 'react'
import { Button, TextInput, Dropdown } from './components/index'

export default function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [selectedOption, setSelectedOption] = useState<string | number>('')
  const [nameError, setNameError] = useState('')

  const options = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'angular', label: 'Angular' },
  ]

  const handleNameBlur = () => {
    if (!name.trim()) {
      setNameError('Name is required')
    } else {
      setNameError('')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-m3-lighter via-white to-m3-light p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center animate-fade-in">
          <h1 className="text-5xl font-bold text-m3-primary mb-3">
            M3 Component Library
          </h1>
          <p className="text-xl text-m3-secondary">
            Minimal, clean, and beautifully animated React components
          </p>
        </div>

        {/* Buttons Showcase */}
        <section className="mb-12 p-8 glass rounded-2xl shadow-soft-lg animate-fade-in">
          <h2 className="text-3xl font-bold text-m3-primary mb-8">Button Variants</h2>
          
          <div className="space-y-8">
            {/* Primary Buttons */}
            <div>
              <h3 className="text-sm font-semibold text-m3-secondary mb-4 uppercase tracking-wide">Primary</h3>
              <div className="flex gap-3 flex-wrap">
                <Button variant="primary" size="sm">Small</Button>
                <Button variant="primary" size="md">Medium</Button>
                <Button variant="primary" size="lg">Large</Button>
              </div>
            </div>

            {/* Secondary Buttons */}
            <div>
              <h3 className="text-sm font-semibold text-m3-secondary mb-4 uppercase tracking-wide">Secondary (Accent)</h3>
              <div className="flex gap-3 flex-wrap">
                <Button variant="secondary" size="sm">Small</Button>
                <Button variant="secondary" size="md">Medium</Button>
                <Button variant="secondary" size="lg">Large</Button>
              </div>
            </div>

            {/* Outline Buttons */}
            <div>
              <h3 className="text-sm font-semibold text-m3-secondary mb-4 uppercase tracking-wide">Outline</h3>
              <div className="flex gap-3 flex-wrap">
                <Button variant="outline" size="sm">Small</Button>
                <Button variant="outline" size="md">Medium</Button>
                <Button variant="outline" size="lg">Large</Button>
              </div>
            </div>

            {/* Glass Buttons */}
            <div>
              <h3 className="text-sm font-semibold text-m3-secondary mb-4 uppercase tracking-wide">Glassmorphism</h3>
              <div className="flex gap-3 flex-wrap">
                <Button variant="glass" size="sm">Glass Small</Button>
                <Button variant="glass" size="md">Glass Medium</Button>
                <Button variant="glass" size="lg">Glass Large</Button>
              </div>
            </div>

            {/* Ghost Buttons */}
            <div>
              <h3 className="text-sm font-semibold text-m3-secondary mb-4 uppercase tracking-wide">Ghost</h3>
              <div className="flex gap-3 flex-wrap">
                <Button variant="ghost" size="sm">Ghost</Button>
                <Button variant="ghost" size="md">Ghost</Button>
                <Button variant="ghost" size="lg">Ghost</Button>
              </div>
            </div>

            {/* States */}
            <div>
              <h3 className="text-sm font-semibold text-m3-secondary mb-4 uppercase tracking-wide">States</h3>
              <div className="flex gap-3 flex-wrap">
                <Button variant="primary">Normal</Button>
                <Button variant="primary" disabled>Disabled</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Form Showcase */}
        <section className="mb-12 p-8 glass rounded-2xl shadow-soft-lg animate-fade-in">
          <h2 className="text-3xl font-bold text-m3-primary mb-8">Form Components</h2>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {/* Standard Text Input */}
            <div>
              <h3 className="text-sm font-semibold text-m3-secondary mb-4 uppercase tracking-wide">Text Input - Default</h3>
              <TextInput
                label="Full Name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={handleNameBlur}
                error={nameError}
                helperText={!nameError ? "Your full name is required" : undefined}
              />
            </div>

            {/* Email Input */}
            <div>
              <h3 className="text-sm font-semibold text-m3-secondary mb-4 uppercase tracking-wide">Text Input - Email</h3>
              <TextInput
                label="Email Address"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                helperText="We'll never share your email"
              />
            </div>

            {/* Glass Variant Input */}
            <div>
              <h3 className="text-sm font-semibold text-m3-secondary mb-4 uppercase tracking-wide">Text Input - Glass</h3>
              <TextInput
                label="Glass Input"
                placeholder="Type something..."
                variant="glass"
              />
            </div>

            {/* Dropdown */}
            <div>
              <h3 className="text-sm font-semibold text-m3-secondary mb-4 uppercase tracking-wide">Dropdown - Default</h3>
              <Dropdown
                label="Favorite Framework"
                options={options}
                placeholder="Choose a framework..."
                onChange={(e) => setSelectedOption(e.target.value)}
              />
            </div>

            {/* Glass Dropdown */}
            <div>
              <h3 className="text-sm font-semibold text-m3-secondary mb-4 uppercase tracking-wide">Dropdown - Glass</h3>
              <Dropdown
                label="Select Option"
                options={options}
                placeholder="Choose..."
                variant="glass"
              />
            </div>

            {/* Submit */}
            <div className="pt-6 flex gap-3">
              <Button variant="primary" size="md">Submit</Button>
              <Button variant="ghost" size="md">Cancel</Button>
            </div>
          </form>
        </section>

        {/* Error States */}
        <section className="p-8 glass rounded-2xl shadow-soft-lg animate-fade-in">
          <h2 className="text-3xl font-bold text-m3-primary mb-8">Error States</h2>
          
          <div className="space-y-6">
            <TextInput
              label="Password"
              type="password"
              placeholder="Enter password"
              error="Password must be at least 8 characters"
            />

            <Dropdown
              label="Required Field"
              options={options}
              error="Please select an option"
              placeholder="Select..."
            />
          </div>
        </section>
      </div>
    </div>
  )
}
