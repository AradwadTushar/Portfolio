/**
 * BottomNav
 * ─────────────────────────────────────────────────────────────
 * Fixed bottom navigation bar — ONLY visible on mobile (md:hidden).
 * Mirrors the top Navbar links with icons for quick thumb navigation.
 * This is hidden on tablet and desktop screens.
 */

// Each item has a label, href anchor, and a Material Symbol icon name
const NAV_ITEMS = [
  { label: 'Home',     href: '#home',     icon: 'home'            },
  { label: 'Projects', href: '#projects', icon: 'rebase_edit'     },
  { label: 'About',    href: '#about',    icon: 'person'          },
  { label: 'Contact',  href: '#contact',  icon: 'alternate_email' },
]

export default function BottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 bg-white/80 backdrop-blur-lg border-t border-slate-200 z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
      {NAV_ITEMS.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="flex flex-col items-center justify-center text-slate-500 hover:text-primary active:scale-90 transition-all duration-200 px-3 py-1 rounded-xl"
        >
          <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
          <span className="text-[10px] font-semibold uppercase tracking-wider mt-0.5">
            {item.label}
          </span>
        </a>
      ))}
    </nav>
  )
}
