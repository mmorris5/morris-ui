import React, { useState, useRef, useEffect } from 'react'

export interface DropdownOption {
  value: string | number
  label: string
}

export interface DropdownProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'children' | 'defaultValue' | 'value'> {
  options: DropdownOption[]
  placeholder?: string
  label?: string
  error?: string
  variant?: 'default' | 'glass'
  value?: DropdownOption['value']
  defaultValue?: DropdownOption['value']
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder = 'Select an option',
  label,
  error,
  variant = 'default',
  className,
  id,
  name,
  disabled,
  value,
  defaultValue,
  onChange,
  onFocus,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState<DropdownOption['value'] | undefined>(defaultValue)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const selected = options.find((option) => option.value === (value ?? selectedValue)) ?? null

  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value)
    }
  }, [value])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (option: DropdownOption) => {
    if (value === undefined) {
      setSelectedValue(option.value)
    }

    setIsOpen(false)
    onChange?.({
      target: { value: String(option.value) },
      currentTarget: { value: String(option.value) },
    } as React.ChangeEvent<HTMLSelectElement>)
  }

  const triggerStyles = `w-full px-4 py-2.5 rounded-lg font-medium text-left flex justify-between items-center transition-all duration-200 ${
    variant === 'glass'
      ? 'glass text-m3-primary focus:ring-2 focus:ring-m3-accent'
      : `border-2 border-m3-border text-m3-primary focus:border-m3-accent focus:ring-2 focus:ring-m3-accent focus:ring-offset-2 ${error ? 'border-m3-danger' : ''}`
  }`

  return (
    <div className="w-full animate-fade-in" ref={dropdownRef}>
      {label && (
        <label className="block text-sm font-semibold text-m3-primary mb-2.5">
          {label}
        </label>
      )}
      <div className="relative">
        {name && <input type="hidden" name={name} value={selected ? String(selected.value) : ''} />}
        <button
          id={id}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`${triggerStyles} ${className || ''}`}
          onFocus={(event) => onFocus?.(event as unknown as React.FocusEvent<HTMLSelectElement>)}
          disabled={disabled}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <span className={selected ? 'text-m3-primary font-medium' : 'text-m3-secondary'}>
            {selected?.label || placeholder}
          </span>
          <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 glass rounded-lg shadow-soft-lg z-10 overflow-hidden animate-slide-up">
            {options.map((option, index) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option)}
                disabled={disabled}
                className={`w-full px-4 py-2.5 text-left transition-all duration-150 hover:bg-m3-accent hover:text-white font-medium ${
                  index !== options.length - 1 ? 'border-b border-m3-border/30' : ''
                } ${selected?.value === option.value ? 'bg-m3-accent text-white' : ''}`}
              >
                {option.label}
              </button>
            ))}
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
