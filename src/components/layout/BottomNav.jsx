/**
 * BottomNav — mobile only (md:hidden)
 * Brutalist cream bar with ink border-top
 */

const NAV_ITEMS = [
  { label: 'Home',    href: '#home'     },
  { label: 'Work',    href: '#projects' },
  { label: 'About',   href: '#about'    },
  { label: 'Contact', href: '#contact'  },
]

export default function BottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center bg-cream border-brutal-t z-50 py-3">
      {NAV_ITEMS.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="font-mono text-[0.6rem] uppercase tracking-widest text-ink no-underline hover:text-rust transition-colors px-2"
        >
          {item.label}
        </a>
      ))}
    </nav>
  )
}
