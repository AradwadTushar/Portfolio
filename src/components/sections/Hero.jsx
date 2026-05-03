/**
 * Hero
 * ─────────────────────────────────────────────────────────────
 * The first section visitors see. Contains:
 * - "Available" badge
 * - Headline + subtext
 * - CTA buttons (View Projects / Get in Touch)
 * - Code editor mock with a hero image inside
 */

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 px-6 overflow-hidden"
    >
      {/* Subtle radial gradient background — decorative only */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_#89f5e74d,_#eaddff33,_transparent)]" />

      <div className="max-w-container mx-auto flex flex-col items-center text-center">

        {/* ── Available Badge ─────────────────────────────────── */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-label-sm font-semibold mb-8 border border-primary/20">
          <span className="material-symbols-outlined mr-2 text-[16px]">rocket_launch</span>
          AVAILABLE FOR NEW CHALLENGES
        </div>

        {/* ── Headline ────────────────────────────────────────── */}
        <h1 className="text-h1 text-on-surface mb-6 max-w-3xl">
          I build <span className="text-primary">real-world</span> applications that matter.
        </h1>

        {/* ── Subtext ─────────────────────────────────────────── */}
        <p className="text-body-lg text-on-surface-variant mb-10 max-w-2xl">
          Developer building real-world applications using web + AI. Combining
          full-stack development with AI, OCR, and LLMs to solve practical problems.
        </p>

        {/* ── CTA Buttons ─────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#projects"
            className="px-8 py-4 bg-primary text-on-primary rounded-xl font-semibold shadow-lg shadow-primary/20 active:scale-95 transition-all flex items-center justify-center"
          >
            View Projects
            <span className="material-symbols-outlined ml-2 text-[20px]">arrow_forward</span>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-outline-variant text-on-surface rounded-xl font-semibold hover:bg-surface-container-low transition-all active:scale-95 flex items-center justify-center"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* ── Code Editor Mock with Hero Image ────────────────────── */}
      <div className="mt-20 max-w-4xl mx-auto rounded-2xl overflow-hidden border border-outline-variant/30 shadow-2xl">

        {/* Fake traffic-light buttons (macOS style) */}
        <div className="bg-slate-900 px-4 py-3 flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>

        {/* Hero image — replace src with your own photo */}
        <img
          src="/images/hero-placeholder.png"
          alt="Developer workstation"
          className="w-full h-[400px] object-cover bg-slate-100"
          onError={(e) => {
            // Shows a dark fallback if the image file isn't added yet
            e.target.style.display = 'none'
            e.target.parentElement.style.height = '400px'
            e.target.parentElement.style.backgroundColor = '#0f172a'
          }}
        />
      </div>
    </section>
  )
}
