/**
 * Footer
 * ─────────────────────────────────────────────────────────────
 * Simple footer with name, social links, and copyright.
 * Has extra bottom padding on mobile so it doesn't overlap BottomNav.
 */

export default function Footer() {
  return (
    <footer className="w-full py-12 mb-16 md:mb-0 border-t border-slate-100 bg-slate-50">
      <div className="max-w-container mx-auto px-8 flex flex-col items-center gap-4 text-center">

        {/* Name */}
        <div className="font-bold text-on-surface">Tushar Aradwad</div>

        {/* Social links — replace # with your real URLs */}
        <div className="flex gap-6 text-primary text-xs font-light">
          <a
            href="https://github.com/AradwadTushar" // ← replace with your GitHub
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary/70 underline underline-offset-4 transition-opacity"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tushar-aradwad-536570307/" // ← replace with your LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary/70 underline underline-offset-4 transition-opacity"
          >
            LinkedIn
          </a>
          <a
            href="#" // ← replace with your Twitter/X
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary/70 underline underline-offset-4 transition-opacity"
          >
            Twitter
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-slate-500 font-light">
          © {new Date().getFullYear()} Tushar Aradwad. Built with precision.
        </p>
      </div>
    </footer>
  )
}
