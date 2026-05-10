/**
 * Contact
 * ─────────────────────────────────────────────────────────────
 * Two-column brutalist layout:
 *   Left  — big headline + CTA email button
 *   Right — social link rows + availability blurb
 */

const SOCIALS = [
  { label: 'GitHub',   href: 'https://github.com/AradwadTushar',                              handle: '@AradwadTushar' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tushar-aradwad-536570307/',         handle: 'tushar-aradwad' },
  { label: 'Email',    href: 'mailto:aradwadtushar29@gmail.com',                               handle: 'aradwadtushar29@gmail.com' },
]

export default function Contact() {
  return (
    <section id="contact" className="border-brutal-b">

      {/* Section label */}
      <div className="px-8 py-4 border-brutal-b">
        <span className="font-mono text-label uppercase tracking-widest text-[#888]">
          03 — Contact
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* Left — headline + CTA */}
        <div className="bg-ink text-cream p-8 lg:p-12 flex flex-col justify-between gap-10 border-brutal-b lg:border-brutal-b-0 lg:border-brutal-r border-[#333]">
          <div>
            <h2 className="font-display font-extrabold text-display-lg leading-tight mb-6">
              Got an idea?<br />
              Let's <span className="text-rust">build</span> it.
            </h2>
            <p className="font-mono text-body-sm text-[#aaa] max-w-sm leading-relaxed">
              Open to freelance projects, collaborations, and full-time roles.
              If you have something interesting — even half-baked — let's talk.
            </p>
          </div>

          <a
            href="mailto:aradwadtushar29@gmail.com"
            className="self-start font-mono text-[0.75rem] uppercase tracking-widest bg-acid text-ink px-6 py-3 border-2 border-acid hover:bg-rust hover:border-rust hover:text-white transition-all"
          >
            Send a message →
          </a>
        </div>

        {/* Right — social links + availability */}
        <div className="p-8 lg:p-12 flex flex-col justify-between gap-10">

          {/* Availability blurb */}
          <div className="flex items-start gap-3">
            <span className="pulse-dot mt-1" style={{ background: '#E84B2A' }} />
            <p className="font-mono text-body-sm text-[#555] leading-relaxed">
              Currently available for freelance work and open to full-time
              engineering roles at product teams. Response time: usually same day.
            </p>
          </div>

          {/* Social rows */}
          <div className="flex flex-col gap-0">
            <p className="font-mono text-label uppercase tracking-widest text-[#888] mb-4">
              Find me online
            </p>
            {SOCIALS.map(({ label, href, handle }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="social-row"
              >
                <span className="font-mono text-body-sm uppercase tracking-widest">{label}</span>
                <span className="font-mono text-[0.68rem] text-[#888]">{handle} ↗</span>
              </a>
            ))}
          </div>

          {/* Footer note */}
          <p className="font-mono text-label uppercase tracking-widest text-[#bbb]">
            Based in Nagpur, India &nbsp;·&nbsp; Open to remote
          </p>
        </div>
      </div>
    </section>
  )
}
