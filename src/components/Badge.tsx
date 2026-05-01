import React from 'react'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'
  children: React.ReactNode
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  className,
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center px-3 py-1 rounded-full font-semibold text-sm transition-all duration-200'
  
  const variantStyles = {
    primary: 'bg-m3-primary text-white',
    secondary: 'bg-m3-secondary text-white',
    accent: 'bg-m3-accent text-white',
    success: 'bg-m3-success text-white',
    warning: 'bg-m3-warning text-white',
    danger: 'bg-m3-danger text-white'
  }

  return (
    <span
      className={`${baseStyles} ${variantStyles[variant]} ${className || ''}`}
      {...props}
    >
      {children}
    </span>
  )
}
