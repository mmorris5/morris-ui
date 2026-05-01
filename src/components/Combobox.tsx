import React, { useState, useRef, useEffect } from 'react'

interface ComboboxOption {
  value: string | number
  label: string
}

interface ComboboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'children' | 'onSelect'> {
  options: ComboboxOption[]
  label?: string
  error?: string
  onSelect?: (option: ComboboxOption) => void
  placeholder?: string
  variant?: 'default' | 'glass'
}

export const Combobox: React.FC<ComboboxProps> = ({
  options,
  label,
  error,
  onSelect,
  placeholder = 'Search...',
  variant = 'default',
  className,
  ...props
}) => {
  const [inputValue, setInputValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<ComboboxOption | null>(null)
  const comboboxRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(inputValue.toLowerCase())
  )

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (comboboxRef.current && !comboboxRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (option: ComboboxOption) => {
    setSelected(option)
    setInputValue(option.label)
    setIsOpen(false)
    onSelect?.(option)
  }

  const inputBaseStyles = `w-full px-4 py-2.5 rounded-lg font-medium transition-all duration-200 placeholder:text-m3-secondary/50 ${
    variant === 'glass'
      ? 'glass text-m3-primary placeholder:text-m3-secondary'
      : 'border-2 border-m3-border text-m3-primary focus:border-m3-accent'
  }`

  const focusStyles = `focus:outline-none focus:ring-2 focus:ring-offset-2 ${
    error
      ? 'focus:ring-m3-danger focus:ring-offset-m3-light'
      : 'focus:ring-m3-accent focus:ring-offset-m3-lighter'
  }`

  return (
    <div className="w-full animate-fade-in" ref={comboboxRef}>
      {label && (
        <label className="block text-sm font-semibold text-m3-primary mb-2.5">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value)
            setIsOpen(true)
          }}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className={`${inputBaseStyles} ${focusStyles} ${error ? 'border-m3-danger' : ''}`}
          {...props}
        />

        {isOpen && filteredOptions.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 glass rounded-lg shadow-soft-lg z-10 overflow-hidden animate-slide-up max-h-48 overflow-y-auto">
            {filteredOptions.map((option, index) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option)}
                className={`w-full px-4 py-2.5 text-left transition-all duration-150 hover:bg-m3-accent hover:text-white font-medium ${
                  index !== filteredOptions.length - 1 ? 'border-b border-m3-border/30' : ''
                } ${selected?.value === option.value ? 'bg-m3-accent text-white' : ''}`}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}

        {isOpen && inputValue && filteredOptions.length === 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 glass rounded-lg shadow-soft-lg z-10 p-4 text-center text-m3-secondary animate-slide-up">
            No results found
          </div>
        )}
      </div>

      {error && (
        <p className="mt-2 text-sm font-medium text-m3-danger animate-slide-up">
          ✕ {error}
        </p>
      )}
    </div>
  )
}
