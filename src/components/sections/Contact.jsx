/**
 * Contact
 * ─────────────────────────────────────────────────────────────
 * Full-width teal section with a headline and three CTA links:
 *   - Email Me    → opens your email client
 *   - GitHub      → your GitHub profile
 *   - LinkedIn    → your LinkedIn profile
 *
 * Replace the href values with your real links.
 */

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-primary text-on-primary">
      <div className="max-w-container mx-auto text-center">

        {/* Headline */}
        <h2 className="text-h1 mb-6">Let's build something together.</h2>

        {/* Subtext */}
        <p className="text-body-lg opacity-90 mb-12 max-w-xl mx-auto">
          Currently open to freelance partnerships and full-time engineering roles
          in high-impact teams.
        </p>

        {/* ── CTA Buttons ─────────────────────────────────────── */}
        <div className="flex flex-wrap justify-center gap-6">

          {/* Email — replace with your real email address */}
          <a
            href="mailto:aradwadtushar29@email.com"  // ← replace with your email
            className="group px-8 py-4 bg-white text-primary rounded-xl font-bold flex items-center gap-3 hover:shadow-2xl transition-all hover:-translate-y-1"
          >
            <span className="material-symbols-outlined">alternate_email</span>
            Email Me
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/AradwadTushar"  // ← replace with your GitHub
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-primary-container/20 border border-white/30 text-white rounded-xl font-bold flex items-center gap-3 hover:bg-white/10 transition-all"
          >
            <span className="material-symbols-outlined">code</span>
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/tushar-aradwad-536570307/"  // ← replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-primary-container/20 border border-white/30 text-white rounded-xl font-bold flex items-center gap-3 hover:bg-white/10 transition-all"
          >
            <span className="material-symbols-outlined">person</span>
            LinkedIn
          </a>

        </div>
      </div>
    </section>
  )
}
