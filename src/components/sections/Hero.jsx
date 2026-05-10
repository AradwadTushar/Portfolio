/**
 * Hero
 * ─────────────────────────────────────────────────────────────
 * Two-column brutalist layout
 */

import { useEffect, useState } from 'react'

const STACK = [
  { label: 'Electron', active: true },
  { label: 'React', active: false },
  { label: 'Node.js', active: false },
  { label: 'Python', active: true },
  { label: 'SQLite', active: false },
  { label: 'TypeScript', active: false },
  { label: 'Claude API', active: true },
  { label: 'GPT-4o', active: false },
  { label: 'Gemini', active: false },
  { label: 'Ollama', active: true },
  { label: 'FastAPI', active: false },
  { label: 'OCR', active: false },
]

const MARQUEE_ITEMS = [
  'Builder',
  'AI Tools',
  'Full-Stack',
  'Desktop Apps',
  'Open Source',
  'Experimenter',
]

const LOG_POOL = [
  '> training OCR parser...',
  '> testing embeddings...',
  '> syncing websocket nodes...',
  '> loading local models...',
  '> inference pipeline ready...',
  '> vector cache warmed...',
  '> websocket stable...',
  '> loading embeddings...',
  '> OCR confidence: 98%...',
  '> inference graph compiled...',
  '> initializing AI runtime...',
  '> local models online...',
]

export default function Hero() {
  const [phase, setPhase] = useState('sphere')
  const [visibleLogs, setVisibleLogs] = useState([])
  const [glitching, setGlitching] = useState(false)
const generateLogs = () => {
  const shuffled = [...LOG_POOL].sort(() => 0.5 - Math.random())

  return shuffled.slice(0, 5)
}
  useEffect(() => {
  let logInterval
  let phaseTimeout

  const startSpherePhase = () => {
    setPhase('sphere')
    setVisibleLogs([])

    phaseTimeout = setTimeout(() => {
  setGlitching(true)

  setTimeout(() => {
    setGlitching(false)
    startTerminalPhase()
  }, 180)
}, 2500)
  }

  const startTerminalPhase = () => {
    setPhase('terminal')

    const activeLogs = generateLogs()

    let index = 0

    logInterval = setInterval(() => {
      setVisibleLogs(prev => [
        ...prev,
        activeLogs[index],
      ])

      index++

      // finished logs
      if (index >= activeLogs.length) {
        clearInterval(logInterval)

        // restart whole cycle
        phaseTimeout = setTimeout(() => {
  setGlitching(true)

  setTimeout(() => {
    setGlitching(false)
    startSpherePhase()
  }, 180)
}, 2200)
      }
    }, 700)
  }

  startSpherePhase()

  return () => {
    clearInterval(logInterval)
    clearTimeout(phaseTimeout)
  }
}, [])

  return (
    <>
      {/* ── HERO ───────────────────────────────────────── */}
      <section
  id="home"
  className="mt-[58px] grid grid-cols-1 lg:grid-cols-2 border-brutal-b min-h-[calc(100vh-58px)]"
>
        {/* LEFT */}
        <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-12 border-brutal-b lg:border-brutal-b-0 lg:border-brutal-r">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-ink text-acid font-mono text-label uppercase tracking-widest px-3 py-1.5 mb-8">
              <span className="pulse-dot" />
              Available for work
            </div>

            {/* Name */}
            <h1 className="font-display font-extrabold text-[4rem] sm:text-[5rem] lg:text-display-xl text-ink mb-6 leading-none break-words">
              Tushar
              <br />
              <span className="text-rust">Aradwad.</span>
            </h1>

            {/* Tagline */}
            <p className="font-mono text-body-sm text-[#555] max-w-sm leading-relaxed border-l-[3px] border-rust pl-4 mb-10">
              21, B.Tech IT grad. I don't just learn tech —
              I build with it. Full-stack meets AI meets
              curiosity that refuses to stay in one lane.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="btn-ink">
                See my work →
              </a>

              <a href="#contact" className="btn-ghost">
                Let&apos;s talk
              </a>
            </div>
          </div>

          {/* Footer */}
          <p className="font-mono text-label uppercase tracking-widest text-[#999] mt-10">
            Nagpur, India &nbsp;·&nbsp; Full-Stack + AI/ML
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col min-w-0 h-full">
          {/* Stack */}
          <div className="p-8 lg:p-12 border-brutal-b">
            <p className="font-mono text-label uppercase tracking-widest text-[#888] mb-5">
              What I build with
            </p>

            <div className="flex flex-wrap gap-2">
              {STACK.map(({ label, active }) => (
                <span
                  key={label}
                  className={`stack-pill ${active ? 'active' : ''}`}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* SYSTEM PANEL */}
          <div
  className={`flex-1 overflow-hidden relative px-6 sm:px-8 lg:px-12 py-8 sm:py-10 system-panel ${
    glitching ? 'glitching' : ''
  }`}
>
            <div className="scanlines" />
            <div className="noise" />
            {/* Sphere */}
            {phase === 'sphere' && (
              <div className="sphere-wrapper mt-8">
  <svg
  className="wireframe-sphere"
  viewBox="0 0 400 400"
  fill="none"
>
  {/* outer ring */}
  <circle cx="200" cy="200" r="140" />

  {/* vertical arcs */}
  <ellipse cx="200" cy="200" rx="40" ry="140" />
  <ellipse cx="200" cy="200" rx="80" ry="140" />
  <ellipse cx="200" cy="200" rx="115" ry="140" />

  {/* horizontal arcs */}
  <ellipse cx="200" cy="200" rx="140" ry="40" />
  <ellipse cx="200" cy="200" rx="140" ry="80" />
  <ellipse cx="200" cy="200" rx="140" ry="115" />

  {/* diagonal systems */}
  <g transform="rotate(25 200 200)">
    <ellipse cx="200" cy="200" rx="70" ry="140" />
  </g>

  <g transform="rotate(-25 200 200)">
    <ellipse cx="200" cy="200" rx="70" ry="140" />
  </g>

  {/* broken arc feel */}
  <path
    d="M110 110 Q200 60 290 110"
    strokeDasharray="8 6"
  />

  <path
    d="M110 290 Q200 340 290 290"
    strokeDasharray="10 8"
  />
</svg>

  <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#777] mt-8">
    Initializing systems...
  </p>
</div>
            )}

            {/* Terminal */}
            {phase === 'terminal' && (
              <div className="w-full max-w-md font-mono text-[15px] text-[#444] leading-8 mt-8">
                {visibleLogs.map((log, i) => (
                  <div
                    key={i}
                    className="terminal-line"
                  >
                    {log}
                  </div>
                ))}

                <span className="terminal-cursor">
                  _
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── FULL WIDTH MARQUEE ───────────────────────── */}
      <div className="bg-ink text-acid overflow-hidden py-5 border-brutal-b">
        <div className="marquee-track font-display font-extrabold text-2xl tracking-tight">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map(
            (item, i) => (
              <span key={i} className="mr-12">
                {item}{' '}
                <span className="text-rust">
                  ✦
                </span>
              </span>
            )
          )}
        </div>
      </div>

      {/* ── CURRENTLY BUILDING ───────────────────────── */}
      <div className="bg-rust text-white flex flex-wrap items-center gap-3 px-6 sm:px-8 py-3 border-brutal-b font-mono text-body-sm">
        <span
          className="pulse-dot"
          style={{ background: '#CAFF00' }}
        />

        <strong>Currently building:</strong>

        AI-powered Resume Analyzer & Builder V2
        — smarter parsing, role-fit scoring,
        one-click tailoring
      </div>

      {/* ── STATS ───────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 border-brutal-b">
        {[
          {
            num: '5+',
            label: 'Projects shipped',
          },
          {
            num: '4+',
            label: 'AI models integrated',
          },
          {
            num: '∞',
            label: 'Things to experiment',
          },
        ].map(({ num, label }) => (
          <div
            key={label}
            className="py-6 px-8 border-brutal-r last:border-r-0 text-center lg:text-left"
          >
            <div className="font-display font-extrabold text-display-md text-ink leading-none mb-1">
              {num}
            </div>

            <div className="font-mono text-label uppercase tracking-widest text-[#888]">
              {label}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}