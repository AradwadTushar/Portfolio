/**
 * Hero
 * ─────────────────────────────────────────────────────────────
 * Two-column brutalist layout
 */

import { useEffect, useState, useRef } from 'react'

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

const NODES = [
  { id: 1, x: 80, y: 100, label: 'React' },
  { id: 2, x: 300, y: 120, label: 'FastAPI' },
  { id: 3, x: 150, y: 280, label: 'AI/ML' },
  { id: 4, x: 320, y: 260, label: 'PostgreSQL' },
  { id: 5, x: 220, y: 60, label: 'Python' },
  { id: 6, x: 80, y: 220, label: 'Electron' },
  { id: 7, x: 260, y: 190, label: 'Clerk' },
  { id: 8, x: 190, y: 140, label: 'WeasyPrint' },
]

export default function Hero() {
  const [activeTab, setActiveTab] = useState('matrix')
  const [mousePos, setMousePos] = useState({ x: 200, y: 200 })
  const [isHovered, setIsHovered] = useState(false)
  const [terminalLogs, setTerminalLogs] = useState([
    '> initializing AI runtime...',
    '> local models online...',
    '> inference pipeline ready...',
  ])
  
  const logContainerRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setTerminalLogs((prev) => {
        const nextLog = LOG_POOL[Math.floor(Math.random() * LOG_POOL.length)];
        return [...prev.slice(-12), nextLog];
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [terminalLogs]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 400;
    const y = ((e.clientY - rect.top) / rect.height) * 400;
    setMousePos({ x, y });
  };

  // Calculate nearest node for HUD lock-on feedback
  let nearestNode = null;
  let nearestDist = Infinity;
  if (isHovered && activeTab === 'matrix') {
    NODES.forEach((node) => {
      const dist = Math.hypot(node.x - mousePos.x, node.y - mousePos.y);
      if (dist < nearestDist) {
        nearestDist = dist;
        nearestNode = node;
      }
    });
    if (nearestDist > 100) {
      nearestNode = null;
    }
  }

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

          {/* SYSTEM PANEL - CYBER DASHBOARD */}
          <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center bg-[#FAF7F2]">
            <div className="border-2 border-ink bg-surface flex flex-col h-full min-h-[360px] relative shadow-[4px_4px_0px_0px_rgba(13,13,13,1)]">
              {/* Terminal Title Bar */}
              <div className="bg-ink text-surface px-4 py-2.5 flex items-center justify-between font-mono text-[10px] border-b-2 border-ink select-none">
                <div className="flex items-center gap-2">
                  <span className="pulse-dot bg-[#CAFF00]" />
                  <span className="tracking-widest">SYSTEM CORE ACTIVE</span>
                </div>
                <span className="text-[#666]">v2.5.0_PROD</span>
              </div>

              {/* Sub-tabs for switching views */}
              <div className="flex border-b-2 border-ink bg-[#EDEAE0] select-none">
                <button
                  onClick={() => setActiveTab('matrix')}
                  className={`flex-1 py-2 font-mono text-[10px] uppercase tracking-wider border-r-2 border-ink transition-all ${
                    activeTab === 'matrix' ? 'bg-[#CAFF00] text-ink font-bold' : 'hover:bg-[#EAE5D9] text-[#555]'
                  }`}
                >
                  01. Node Matrix
                </button>
                <button
                  onClick={() => setActiveTab('logs')}
                  className={`flex-1 py-2 font-mono text-[10px] uppercase tracking-wider border-r-2 border-ink transition-all ${
                    activeTab === 'logs' ? 'bg-[#CAFF00] text-ink font-bold' : 'hover:bg-[#EAE5D9] text-[#555]'
                  }`}
                >
                  02. Log Stream
                </button>
                <button
                  onClick={() => setActiveTab('radar')}
                  className={`flex-1 py-2 font-mono text-[10px] uppercase tracking-wider transition-all ${
                    activeTab === 'radar' ? 'bg-[#CAFF00] text-ink font-bold' : 'hover:bg-[#EAE5D9] text-[#555]'
                  }`}
                >
                  03. Tech Radar
                </button>
              </div>

              {/* Dynamic Workspace Container */}
              <div className="flex-1 relative overflow-hidden bg-[#FAF7F2] p-4 flex items-center justify-center min-h-[260px]">
                <div className="scanlines" />
                <div className="noise" />

                {/* MATRIX VIEW */}
                {activeTab === 'matrix' && (
                  <div className="w-full h-full relative flex items-center justify-center">
                    <svg
                      className="w-full h-full max-h-[300px] cursor-none"
                      viewBox="0 0 400 400"
                      fill="none"
                      onMouseMove={handleMouseMove}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <defs>
                        <pattern id="matrix-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0D0D0D" strokeWidth="0.5" opacity="0.08" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#matrix-grid)" />

                      {/* Holographic Diagnostic scanner line */}
                      <line x1="0" y1="0" x2="400" y2="0" stroke="#CAFF00" strokeWidth="2.5" className="matrix-scan-line" opacity="0.35" />

                      {/* Mesh connection lines */}
                      <line x1="80" y1="100" x2="220" y2="60" stroke="#0D0D0D" strokeWidth="1" opacity="0.1" />
                      <line x1="80" y1="100" x2="190" y2="140" stroke="#0D0D0D" strokeWidth="1" opacity="0.1" />
                      <line x1="220" y1="60" x2="300" y2="120" stroke="#0D0D0D" strokeWidth="1" opacity="0.1" />
                      <line x1="300" y1="120" x2="260" y2="190" stroke="#0D0D0D" strokeWidth="1" opacity="0.1" />
                      <line x1="190" y1="140" x2="260" y2="190" stroke="#0D0D0D" strokeWidth="1" opacity="0.1" />
                      <line x1="190" y1="140" x2="150" y2="280" stroke="#0D0D0D" strokeWidth="1" opacity="0.1" />
                      <line x1="80" y1="220" x2="150" y2="280" stroke="#0D0D0D" strokeWidth="1" opacity="0.1" />
                      <line x1="260" y1="190" x2="320" y2="260" stroke="#0D0D0D" strokeWidth="1" opacity="0.1" />
                      <line x1="150" y1="280" x2="320" y2="260" stroke="#0D0D0D" strokeWidth="1" opacity="0.1" />

                      {/* Interactive Mouse Connection Lines */}
                      {NODES.map((node) => {
                        const dist = Math.hypot(node.x - mousePos.x, node.y - mousePos.y);
                        const opacity = isHovered ? Math.max(0, 1 - dist / 160) : 0;
                        if (opacity <= 0) return null;
                        return (
                          <line
                            key={`mouse-conn-${node.id}`}
                            x1={node.x}
                            y1={node.y}
                            x2={mousePos.x}
                            y2={mousePos.y}
                            stroke="#E84B2A"
                            strokeWidth="1.5"
                            opacity={opacity * 0.75}
                            strokeDasharray="3 3"
                          />
                        );
                      })}

                      {/* Render Skill Nodes */}
                      {NODES.map((node) => {
                        const isClose = isHovered && Math.hypot(node.x - mousePos.x, node.y - mousePos.y) < 65;
                        const isLocked = nearestNode && nearestNode.id === node.id;
                        return (
                          <g key={node.id}>
                            {isLocked && (
                              <circle
                                cx={node.x}
                                cy={node.y}
                                r="15"
                                stroke="#E84B2A"
                                strokeWidth="1"
                                strokeDasharray="4 3"
                                fill="none"
                                className="animate-spin-slow"
                                style={{ transformOrigin: `${node.x}px ${node.y}px` }}
                              />
                            )}
                            <circle
                              cx={node.x}
                              cy={node.y}
                              r={isClose ? "7" : "5"}
                              fill={isClose ? "#E84B2A" : "#0D0D0D"}
                              className="transition-all duration-300"
                            />
                            <text
                              x={node.x}
                              y={node.y - 12}
                              textAnchor="middle"
                              className="font-mono text-[9px] uppercase tracking-wider select-none font-bold"
                              fill={isClose ? "#E84B2A" : "#888"}
                            >
                              {node.label}
                            </text>
                          </g>
                        );
                      })}

                      {/* Advanced HUD Crosshair */}
                      {isHovered && (
                        <g transform={`translate(${mousePos.x}, ${mousePos.y})`}>
                          <circle cx="0" cy="0" r="16" stroke="#E84B2A" strokeWidth="1" strokeDasharray="6 4" className="animate-spin-slow" style={{ transformOrigin: '0px 0px' }} />
                          <circle cx="0" cy="0" r="10" stroke="#0D0D0D" strokeWidth="0.8" opacity="0.3" fill="none" />
                          <circle cx="0" cy="0" r="2" fill="#E84B2A" />
                          <line x1="-15" y1="0" x2="15" y2="0" stroke="#E84B2A" strokeWidth="1" opacity="0.6" />
                          <line x1="0" y1="-15" x2="0" y2="15" stroke="#E84B2A" strokeWidth="1" opacity="0.6" />

                          {/* Telemetry locking HUD readout */}
                          <g transform="translate(20, -10)">
                            <rect x="-2" y="-10" width="95" height="28" fill="#0D0D0D" stroke="#E84B2A" strokeWidth="1" opacity="0.95" />
                            <text x="4" y="2" className="font-mono text-[8px] fill-[#CAFF00] font-bold tracking-widest">
                              LOCK: {nearestNode ? nearestNode.label.toUpperCase() : 'SEARCHING'}
                            </text>
                            <text x="4" y="12" className="font-mono text-[7px] fill-[#888] tracking-widest">
                              SIG: {nearestNode ? `${Math.round(100 - nearestDist * 0.8)}%` : '0.00%'}
                            </text>
                          </g>
                        </g>
                      )}
                    </svg>

                    <div className="absolute bottom-2 left-3 font-mono text-[9px] text-[#999] pointer-events-none uppercase tracking-widest">
                      LOC: {isHovered ? `X:${mousePos.x.toFixed(0)} Y:${mousePos.y.toFixed(0)}` : 'SYS: STANDBY'}
                    </div>
                  </div>
                )}

                {/* LOG STREAM VIEW */}
                {activeTab === 'logs' && (
                  <div className="w-full h-full flex flex-col justify-between">
                    <div
                      ref={logContainerRef}
                      className="w-full flex-1 overflow-y-auto max-h-[220px] font-mono text-[13px] text-[#444] leading-relaxed p-2 scrollbar-thin"
                    >
                      {terminalLogs.map((log, i) => (
                        <div key={i} className="mb-1 border-l-2 border-rust/30 pl-2">
                          {log}
                        </div>
                      ))}
                      <span className="terminal-cursor text-rust font-bold">_</span>
                    </div>
                    <div className="font-mono text-[8px] uppercase tracking-wider text-[#bbb] mt-2 select-none">
                      Real-time analytics engine stream
                    </div>
                  </div>
                )}

                {/* TECH RADAR VIEW */}
                {activeTab === 'radar' && (
                  <div className="w-full h-full flex items-center justify-center p-2">
                    <svg className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px]" viewBox="0 0 400 400" fill="none">
                      {/* Grid circles */}
                      <circle cx="200" cy="200" r="180" stroke="#0D0D0D" strokeWidth="1" strokeDasharray="4 4" opacity="0.1" />
                      <circle cx="200" cy="200" r="130" stroke="#0D0D0D" strokeWidth="1" strokeDasharray="4 4" opacity="0.15" />
                      <circle cx="200" cy="200" r="80" stroke="#0D0D0D" strokeWidth="1" opacity="0.25" />
                      <circle cx="200" cy="200" r="30" stroke="#0D0D0D" strokeWidth="1" opacity="0.35" />

                      {/* Axis lines */}
                      <line x1="200" y1="10" x2="200" y2="390" stroke="#0D0D0D" strokeWidth="0.5" opacity="0.15" />
                      <line x1="10" y1="200" x2="390" y2="200" stroke="#0D0D0D" strokeWidth="0.5" opacity="0.15" />

                      {/* Sweeper arm */}
                      <g className="radar-sweep-group" style={{ transformOrigin: '200px 200px' }}>
                        <line x1="200" y1="200" x2="200" y2="20" stroke="#E84B2A" strokeWidth="2.5" />
                        <polygon points="200,200 200,20 160,30" fill="url(#sweep-gradient)" opacity="0.15" />
                      </g>

                      <defs>
                        <linearGradient id="sweep-gradient" x1="200" y1="200" x2="160" y2="30" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#E84B2A" stopOpacity="0" />
                          <stop offset="100%" stopColor="#E84B2A" stopOpacity="1" />
                        </linearGradient>
                      </defs>

                      {/* Radar targets */}
                      <circle cx="120" cy="140" r="6" fill="#CAFF00" stroke="#0d0d0d" strokeWidth="1.5" className="radar-target" />
                      <circle cx="290" cy="260" r="6" fill="#E84B2A" stroke="#0d0d0d" strokeWidth="1.5" className="radar-target" style={{ animationDelay: '0.8s' }} />
                      <circle cx="250" cy="110" r="6" fill="#0D0D0D" stroke="#0d0d0d" strokeWidth="1.5" className="radar-target" style={{ animationDelay: '1.4s' }} />

                      {/* Node labels */}
                      <text x="120" y="120" textAnchor="middle" className="font-mono text-[9px] uppercase tracking-wider font-bold" fill="#888">AI CORES</text>
                      <text x="290" y="240" textAnchor="middle" className="font-mono text-[9px] uppercase tracking-wider font-bold" fill="#888">BACKEND</text>
                      <text x="250" y="90" textAnchor="middle" className="font-mono text-[9px] uppercase tracking-wider font-bold" fill="#888">FRONTEND</text>
                    </svg>
                  </div>
                )}
              </div>
            </div>
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