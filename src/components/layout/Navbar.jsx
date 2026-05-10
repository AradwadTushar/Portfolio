import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Work',    href: '#projects' },
  { label: 'About',  href: '#about'    },
  { label: 'Contact', href: '#contact' },
]

/**
 * Navbar — brutalist fixed top bar
 * Cream bg, 2px ink border-bottom, Space Mono labels
 * Mobile: hamburger drops a full-width menu
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-cream border-brutal-b">
      <div className="flex justify-between items-center h-[58px] px-6 max-w-container mx-auto">

        {/* Logo */}
        <a href="#home" className="font-display font-extrabold text-[1.05rem] tracking-tight text-ink no-underline">
          TA_
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-label uppercase tracking-widest text-ink no-underline border-b-2 border-transparent hover:border-rust transition-all pb-[2px]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/AradwadTushar"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ink text-[0.65rem] py-[0.5rem] px-[1rem]"
          >
            GitHub ↗
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden text-ink font-mono text-xs uppercase tracking-widest"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '[ close ]' : '[ menu ]'}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-cream border-brutal-t px-6 py-5 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display font-bold text-xl text-ink no-underline hover:text-rust transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/AradwadTushar"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ink self-start"
          >
            GitHub ↗
          </a>
        </div>
      )}
    </header>
  )
}
