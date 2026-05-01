import React, { useEffect } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  actions?: React.ReactNode
  closeButton?: boolean
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  actions,
  closeButton = true
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 animate-fade-in"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-xs"></div>

      {/* Modal */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="bg-white rounded-2xl shadow-soft-lg max-w-md w-full mx-4 pointer-events-auto animate-slide-up"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-m3-border">
            <h2 className="text-2xl font-bold text-m3-primary">{title}</h2>
            {closeButton && (
              <button
                onClick={onClose}
                className="text-m3-secondary hover:text-m3-primary transition-colors duration-200"
              >
                ✕
              </button>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            {children}
          </div>

          {/* Actions */}
          {actions && (
            <div className="border-t border-m3-border p-6 flex gap-3 justify-end">
              {actions}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
