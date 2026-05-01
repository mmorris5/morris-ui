import React from 'react'

interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  initials?: string
  variant?: 'circular' | 'rounded'
}

export const Avatar: React.FC<AvatarProps> = ({
  size = 'md',
  initials,
  variant = 'circular',
  src,
  alt,
  className,
  ...props
}) => {
  const sizeStyles = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg'
  }

  const shapeStyles = variant === 'circular' ? 'rounded-full' : 'rounded-lg'

  if (src) {
    return (
      <img
        src={src}
        alt={alt || 'Avatar'}
        className={`${sizeStyles[size]} ${shapeStyles} object-cover transition-all duration-200 ${className || ''}`}
        {...props}
      />
    )
  }

  return (
    <div
      className={`${sizeStyles[size]} ${shapeStyles} bg-m3-accent text-white font-semibold flex items-center justify-center transition-all duration-200 ${className || ''}`}
    >
      {initials}
    </div>
  )
}
