import { useState } from 'react'
import { openResume } from '../../utils/mediaViewer.js'

const NAV_LINKS = [
  { label: 'Work',    href: '#projects' },
  { label: 'About',  href: '#about'    },
  { label: 'Contact', href: '#contact' },
]

/**
 * Navbar — brutalist fixed top bar
 * Edge-to-edge full width with responsive padding and inline Resume viewer
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-cream border-brutal-b">
      <div className="flex justify-between items-center h-[58px] px-6 sm:px-10 lg:px-16 2xl:px-24 w-full">

        {/* Logo */}
        <a href="#home" className="font-display font-extrabold text-[1.05rem] tracking-tight text-ink no-underline">
          TA_
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-label uppercase tracking-widest text-ink no-underline border-b-2 border-transparent hover:border-rust transition-all pb-[2px]"
            >
              {link.label}
            </a>
          ))}

          {/* Quick Resume Modal Trigger */}
          <button
            onClick={openResume}
            className="btn-ghost text-[0.65rem] py-[0.5rem] px-[0.9rem] border-2 border-ink flex items-center gap-1 hover:bg-[#CAFF00] hover:text-ink transition-colors"
            title="Preview Resume PDF inline"
          >
            <span>Resume (PDF)</span>
            <span>↗</span>
          </button>

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
        <div className="md:hidden bg-cream border-brutal-t px-6 py-5 flex flex-col gap-4">
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
          <div className="flex flex-wrap gap-2 pt-2 border-t border-ink/20">
            <button
              onClick={() => {
                setMenuOpen(false);
                openResume();
              }}
              className="btn-ghost text-xs self-start"
            >
              Resume (PDF) ↗
            </button>
            <a
              href="https://github.com/AradwadTushar"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ink text-xs self-start"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
