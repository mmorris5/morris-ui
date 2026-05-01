import React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass'
  children: React.ReactNode
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  className,
  children,
  ...props
}) => {
  const baseStyles = 'rounded-2xl p-6 transition-all duration-200'
  
  const variantStyles = {
    default: 'bg-white border border-m3-border hover:shadow-soft-lg',
    glass: 'glass hover:shadow-soft-lg'
  }

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  )
}
