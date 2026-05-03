/**
 * About
 * ─────────────────────────────────────────────────────────────
 * Two-column layout:
 *   Left  — Quote card with your name and role
 *   Right — Bio text + stats (apps deployed / years exp)
 *
 * Update the quote, bio paragraphs, and stats to match your real info.
 */

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-container mx-auto flex flex-col lg:flex-row gap-16 items-center">

        {/* ── Left: Quote Card ────────────────────────────────── */}
        <div className="w-full lg:w-1/2 relative">

          {/* Decorative blurred circles in the background */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />

          <div className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/30 shadow-xl relative overflow-hidden">

            {/* Decorative XML tag — gives a "developer" feel */}
            <div className="font-mono text-xs text-on-surface-variant/50 mb-5 opacity-100">
              <h4>developer Journey</h4>
            </div>

            {/* Quote — update this to your own words */}
            <p className="text-body-lg text-on-surface-variant mb-6 leading-relaxed italic">
              "I believe true engineering expertise isn't found in textbooks, but in the
              trenches of production-ready builds. My approach is rooted in blending
              full-stack development with AI to solve tangible, real-world problems."
            </p>

            {/* Attribution */}
            <div className="flex items-center gap-4">
              {/* Avatar placeholder — just shows initials */}
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                T
              </div>
              <div>
                <h4 className="font-semibold text-on-surface">Tushar Aradwad</h4>
                <p className="text-sm text-on-surface-variant">Full Stack &amp; AI Developer</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right: Bio + Stats ──────────────────────────────── */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-h2 text-on-surface mb-8">Learning by Building</h2>

          {/* Bio paragraphs — update with your own story */}
          <div className="space-y-6 text-body-md text-on-surface-variant">
            <p>
              I build practical, real-world applications by blending full-stack development
              with AI. I enjoy turning ideas into working products using tools like MERN,
              Python, OCR, and LLMs.
            </p>
            <p>
              Whether it's optimizing data extraction from images or crafting responsive
              web interfaces, my focus is always on creating value. I specialize in the
              modern web stack, but my core skill is the ability to rapidly adapt to new
              paradigms and technologies in the AI era.
            </p>
          </div>

          {/* ── Stats Grid ──────────────────────────────────────── */}
          {/* Update these numbers to match your real experience */}
          <div className="mt-10 grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-outline-variant/30 bg-surface-container-low">
              <span className="block text-h2 text-primary font-bold">5+</span>
              <span className="text-sm font-medium text-on-surface-variant">Apps Deployed</span>
            </div>
            <div className="p-4 rounded-xl border border-outline-variant/30 bg-surface-container-low">
              <span className="block text-h2 text-secondary font-bold">1+</span>
              <span className="text-sm font-medium text-on-surface-variant">Years Exp</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
