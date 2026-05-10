/**
 * About
 * ─────────────────────────────────────────────────────────────
 * Two-column brutalist layout:
 *   Left  — large display quote + initials block
 *   Right — bio timeline + stat chips
 */

const TIMELINE = [
  { year: '2026', text: 'Shipped Salon Management desktop app in Electron' },
  { year: '2025', text: 'Graduated B.Tech (IT) — started going all-in on AI/ML' },
  { year: '2024', text: 'Built NutriLens: OCR + LLMs to decode food labels' },
  { year: '2023', text: 'Built AI-powered Resume Analyzer & Builder V1' },
  { year: '2022', text: 'Fell down the full-stack rabbit hole. Never came back.' },
]

const STATS = [
  { num: 'B.Tech IT', label: 'Graduated Aug 2025' },
  { num: '21',        label: 'Years old (soon 22)' },
  { num: '5+',        label: 'Apps shipped'        },
  { num: '∞',         label: 'Stack experiments'   },
]

export default function About() {
  return (
    <section id="about" className="border-brutal-b">

      {/* Section label */}
      <div className="px-8 py-4 border-brutal-b">
        <span className="font-mono text-label uppercase tracking-widest text-[#888]">
          02 — About
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 border-brutal-b">

        {/* Left — quote + initials */}
        <div className="border-brutal-b lg:border-brutal-b-0 lg:border-brutal-r p-8 lg:p-12 flex flex-col justify-between gap-12">

          {/* Big quote */}
          <div>
            <p className="font-display font-extrabold text-display-lg text-ink leading-tight mb-8">
              "I don't wait<br />
              to feel ready.<br />
              <span className="text-rust">I build to get there."</span>
            </p>
            <p className="font-mono text-body-sm text-[#666] max-w-sm leading-relaxed">
              Most 21-year-olds are still figuring out what they want to do.
              I already know — build things that are genuinely useful, ship them,
              and learn what textbooks can't teach.
            </p>
          </div>

          {/* Initials block */}
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 bg-ink flex items-center justify-center flex-shrink-0">
              <span className="font-display font-extrabold text-acid text-2xl">TA</span>
            </div>
            <div>
              <p className="font-display font-bold text-lg text-ink leading-tight">Tushar Aradwad</p>
              <p className="font-mono text-label uppercase tracking-widest text-[#888]">
                Full-Stack · AI/ML · Nagpur, India
              </p>
            </div>
          </div>
        </div>

        {/* Right — bio + timeline + stats */}
        <div className="p-8 lg:p-12 flex flex-col gap-10">

          {/* Bio */}
          <div>
            <h2 className="font-display font-extrabold text-display-md text-ink mb-6">
              The story so far.
            </h2>
            <div className="font-mono text-body-sm text-[#555] leading-relaxed space-y-4">
              <p>
                Fresh out of B.Tech IT, I'm the kind of developer who doesn't stop
                at "it works." I experiment across the stack — Electron desktop apps,
                React frontends, Node.js APIs, Python backends, and now AI/ML territory
                with LLMs, OCR, and model APIs from Claude, OpenAI, and Google.
              </p>
              <p>
                I built my first real app because I was frustrated a tool didn't exist.
                That's still the engine. Every project on this site started as a problem
                I personally ran into — or a curiosity I couldn't ignore.
              </p>
              <p>
                Right now I'm deep in AI/ML, learning how models actually work under
                the hood and building tools on top of them. The goal isn't to use AI —
                it's to build things with AI that wouldn't have been possible before.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <p className="font-mono text-label uppercase tracking-widest text-[#888] mb-5">
              Timeline
            </p>
            <div className="space-y-4">
              {TIMELINE.map(({ year, text }) => (
                <div key={year} className="flex gap-4 items-start">
                  <span className="timeline-dot mt-[6px]" />
                  <div>
                    <span className="font-mono text-[0.65rem] uppercase tracking-widest text-rust mr-3">
                      {year}
                    </span>
                    <span className="font-mono text-body-sm text-[#555]">{text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3">
            {STATS.map(({ num, label }) => (
              <div key={label} className="border-2 border-ink p-4">
                <div className="font-display font-extrabold text-display-md text-ink leading-none mb-1">
                  {num}
                </div>
                <div className="font-mono text-label uppercase tracking-widest text-[#888]">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
