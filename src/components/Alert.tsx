import React from 'react'

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'success' | 'warning' | 'danger' | 'info'
  title?: string
  closeable?: boolean
  onClose?: () => void
  children: React.ReactNode
}

export const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  title,
  closeable = false,
  onClose,
  className,
  children,
  ...props
}) => {
  const variantStyles = {
    success: 'bg-m3-success/10 border-m3-success text-m3-success',
    warning: 'bg-m3-warning/10 border-m3-warning text-m3-warning',
    danger: 'bg-m3-danger/10 border-m3-danger text-m3-danger',
    info: 'bg-m3-accent/10 border-m3-accent text-m3-accent'
  }

  const icons = {
    success: '✓',
    warning: '⚠',
    danger: '✕',
    info: 'ℹ'
  }

  return (
    <div
      className={`border-l-4 rounded-lg p-4 animate-slide-up ${variantStyles[variant]} ${className || ''}`}
      {...props}
    >
      <div className="flex items-start gap-3">
        <span className="font-bold text-lg mt-0.5">{icons[variant]}</span>
        <div className="flex-1">
          {title && <h4 className="font-bold mb-1">{title}</h4>}
          <div className="text-sm">{children}</div>
        </div>
        {closeable && (
          <button
            onClick={onClose}
            className="hover:opacity-70 transition-opacity duration-200 text-lg leading-none"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  )
}
