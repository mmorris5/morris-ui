import React, { useState, useRef, useEffect } from 'react'

export interface ComboboxOption {
  value: string | number
  label: string
}

export interface ComboboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'children' | 'defaultValue' | 'onSelect' | 'value'> {
  options: ComboboxOption[]
  label?: string
  error?: string
  onSelect?: (option: ComboboxOption) => void
  placeholder?: string
  variant?: 'default' | 'glass'
  value?: ComboboxOption['value']
  defaultValue?: ComboboxOption['value']
}

export const Combobox: React.FC<ComboboxProps> = ({
  options,
  label,
  error,
  onSelect,
  placeholder = 'Search...',
  variant = 'default',
  className,
  value,
  defaultValue,
  onChange,
  onFocus,
  ...props
}) => {
  const isControlled = value !== undefined
  const [selectedValue, setSelectedValue] = useState<ComboboxOption['value'] | undefined>(defaultValue)
  const [inputValue, setInputValue] = useState(() => {
    const initialOption = options.find((option) => option.value === (value ?? defaultValue))
    return initialOption?.label ?? ''
  })
  const [isOpen, setIsOpen] = useState(false)
  const comboboxRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const selected = options.find((option) => option.value === (isControlled ? value : selectedValue)) ?? null

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(inputValue.toLowerCase())
  )

  useEffect(() => {
    if (value === undefined) {
      return
    }

    const selectedOption = options.find((option) => option.value === value)
    setInputValue(selectedOption?.label ?? '')
  }, [options, value])

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
    if (!isControlled) {
      setSelectedValue(option.value)
    }

    setInputValue(option.label)
    setIsOpen(false)
    onSelect?.(option)
    onChange?.({
      target: { value: String(option.value) },
      currentTarget: { value: String(option.value) },
    } as React.ChangeEvent<HTMLInputElement>)
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
            onChange?.(e)
          }}
          onFocus={(e) => {
            setIsOpen(true)
            onFocus?.(e)
          }}
          placeholder={placeholder}
          className={`${inputBaseStyles} ${focusStyles} ${error ? 'border-m3-danger' : ''} ${className || ''}`}
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
