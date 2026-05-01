import React, { useState, useRef, useEffect } from 'react'

interface MenuItem {
  label: string
  href: string
  onClick?: () => void
}

interface HamburgerMenuProps {
  items: MenuItem[]
  onItemClick?: (item: MenuItem) => void
  branding?: React.ReactNode
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  items,
  onItemClick,
  branding
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleItemClick = (item: MenuItem) => {
    onItemClick?.(item)
    item.onClick?.()
    setIsOpen(false)
  }

  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-m3-border backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-4" ref={menuRef}>
        {/* Branding */}
        <div className="font-bold text-xl text-m3-primary">
          {branding || 'M3'}
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 relative w-8 h-8 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`w-full h-0.5 bg-m3-primary rounded-full transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span
            className={`w-full h-0.5 bg-m3-primary rounded-full transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`w-full h-0.5 bg-m3-primary rounded-full transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </button>
      </div>

      {/* Menu Items */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-m3-border animate-slide-up">
          <ul className="divide-y divide-m3-border">
            {items.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleItemClick(item)
                  }}
                  className="block px-6 py-3 text-m3-primary font-medium hover:bg-m3-light transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
