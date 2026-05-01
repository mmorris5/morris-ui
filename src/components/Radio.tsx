import React from 'react'

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Radio: React.FC<RadioProps> = ({
  label,
  error,
  id,
  className,
  ...props
}) => {
  const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`

  return (
    <div className="flex items-center animate-fade-in">
      <input
        id={radioId}
        type="radio"
        className={`w-5 h-5 border-2 border-m3-border cursor-pointer transition-all duration-200 accent-m3-accent focus:ring-2 focus:ring-m3-accent focus:ring-offset-2 ${
          error ? 'border-m3-danger' : ''
        } ${className || ''}`}
        {...props}
      />
      {label && (
        <label htmlFor={radioId} className="ml-3 font-medium text-m3-primary cursor-pointer">
          {label}
        </label>
      )}
      {error && (
        <p className="ml-2 text-sm font-medium text-m3-danger">✕ {error}</p>
      )}
    </div>
  )
}
