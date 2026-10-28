/**
 * Footer — minimal brutalist bar
 * Ink background, acid text, 2px top border
 * 100% Edge-to-edge
 */
export default function Footer() {
  return (
    <footer className="w-full bg-ink text-cream border-brutal-t mb-16 md:mb-0">
      <div className="w-full px-6 sm:px-10 lg:px-16 2xl:px-24 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

        <span className="font-display font-extrabold text-lg tracking-tight">TA_</span>

        <div className="flex gap-6">
          {[
            { label: 'GitHub',   href: 'https://github.com/AradwadTushar' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tushar-aradwad-536570307/' },
            { label: 'Email',    href: 'mailto:aradwadtushar72@gmail.com' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="font-mono text-label uppercase tracking-widest text-[#888] hover:text-acid transition-colors no-underline"
            >
              {label}
            </a>
          ))}
        </div>

        <p className="font-mono text-label uppercase tracking-widest text-[#555]">
          © {new Date().getFullYear()} Tushar Aradwad
        </p>
      </div>
    </footer>
  )
}
