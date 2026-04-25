'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/about', label: 'About' },
  { href: '/work', label: 'Work' },
  { href: '/stack', label: 'Stack' },
  { href: '/writing', label: 'Writing' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  function isActive(href: string) {
    return pathname === href || (href !== '/' && pathname.startsWith(href))
  }

  return (
    <header
      style={{ borderBottom: '1px solid #D4CCC6', backgroundColor: '#FAF7F2' }}
      className="sticky top-0 z-50"
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
        {/* Wordmark */}
        <Link
          href="/"
          style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, fontSize: '1.125rem', color: '#1A1613', textDecoration: 'none', letterSpacing: '-0.01em' }}
        >
          Kuldeep Garg<span style={{ color: '#B8543D' }}>.</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontSize: '0.875rem',
                color: '#1A1613',
                textDecoration: 'none',
                letterSpacing: '0.01em',
                paddingBottom: isActive(href) ? '2px' : undefined,
                borderBottom: isActive(href) ? '1.5px solid #B8543D' : undefined,
              }}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right meta strip — desktop only */}
        <div
          className="hidden md:block"
          style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#8B7E75', letterSpacing: '0.06em' }}
        >
          IN · UTC+5:30 · AVAILABLE
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span
            style={{
              display: 'block',
              width: '22px',
              height: '1.5px',
              backgroundColor: '#1A1613',
              transition: 'transform 0.2s ease, opacity 0.2s ease',
              transform: open ? 'translateY(5px) rotate(45deg)' : undefined,
            }}
          />
          <span
            style={{
              display: 'block',
              width: '22px',
              height: '1.5px',
              backgroundColor: '#1A1613',
              transition: 'opacity 0.2s ease',
              opacity: open ? 0 : 1,
            }}
          />
          <span
            style={{
              display: 'block',
              width: '22px',
              height: '1.5px',
              backgroundColor: '#1A1613',
              transition: 'transform 0.2s ease',
              transform: open ? 'translateY(-5px) rotate(-45deg)' : undefined,
            }}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {open && (
        <div
          style={{ backgroundColor: '#FAF7F2', borderTop: '1px solid #D4CCC6' }}
          className="md:hidden"
        >
          <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col gap-5">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                style={{
                  fontSize: '1rem',
                  color: isActive(href) ? '#B8543D' : '#1A1613',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 300,
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
