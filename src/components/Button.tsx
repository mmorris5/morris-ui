import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glass' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-200 cursor-pointer active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variantStyles = {
    primary: 'bg-m3-primary text-white hover:shadow-soft hover:scale-105 active:scale-95',
    secondary: 'bg-m3-accent text-white hover:shadow-soft hover:scale-105 active:scale-95',
    outline: 'border-2 border-m3-primary text-m3-primary hover:bg-m3-light hover:scale-105 active:scale-95',
    glass: 'glass text-m3-primary hover:shadow-soft-lg hover:scale-105 active:scale-95',
    ghost: 'text-m3-primary hover:bg-m3-light rounded-lg active:scale-95'
  }

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3.5 text-lg'
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  )
}
