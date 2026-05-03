import { useState } from 'react'

/**
 * Navbar
 * ─────────────────────────────────────────────────────────────
 * Fixed top navigation bar with:
 * - Logo / name on the left
 * - Nav links on the right (desktop only)
 * - Hamburger menu for tablet-sized screens (md breakpoint)
 * - Glassmorphism background (blur + semi-transparent white)
 *
 * Note: Mobile bottom nav is in BottomNav.jsx (shown only on mobile)
 */

// The navigation links used in both desktop and mobile menus
const NAV_LINKS = [
  { label: 'Home',     href: '#home'     },
  { label: 'Projects', href: '#projects' },
  { label: 'About',    href: '#about'    },
  { label: 'Contact',  href: '#contact'  },
]

export default function Navbar() {
  // Controls the mobile dropdown menu open/close state
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50 shadow-sm">
      <div className="flex justify-between items-center h-16 px-6 max-w-container mx-auto">

        {/* ── Logo ───────────────────────────────────────────── */}
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">terminal</span>
          <span className="text-lg font-bold tracking-tight text-on-surface">
            Tushar Aradwad
          </span>
        </div>

        {/* ── Desktop Nav Links (hidden on small screens) ────── */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-on-surface-variant hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* ── Hamburger Button (visible on md and below) ─────── */}
        <button
          className="md:hidden text-on-surface-variant"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* ── Mobile Dropdown Menu ───────────────────────────────── */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-outline-variant/30 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-on-surface font-medium hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)} // close menu on link click
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
