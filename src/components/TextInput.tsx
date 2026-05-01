import React from 'react'

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  variant?: 'default' | 'glass'
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  error,
  helperText,
  variant = 'default',
  className,
  ...props
}) => {
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

  const errorStyles = error ? 'border-m3-danger focus:border-m3-danger' : ''

  return (
    <div className="w-full animate-fade-in">
      {label && (
        <label className="block text-sm font-semibold text-m3-primary mb-2.5">
          {label}
        </label>
      )}
      <input
        className={`${inputBaseStyles} ${focusStyles} ${errorStyles} ${className || ''}`}
        {...props}
      />
      {error && (
        <p className="mt-2 text-sm font-medium text-m3-danger animate-slide-up">
          ✕ {error}
        </p>
      )}
      {helperText && !error && (
        <p className="mt-2 text-sm text-m3-secondary">ℹ {helperText}</p>
      )}
    </div>
  )
}
