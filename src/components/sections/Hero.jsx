/**
 * Hero
 * ─────────────────────────────────────────────────────────────
 * Two-column brutalist layout
 */

import { useEffect, useState, useRef } from 'react'
import NeuralSignature from '../ui/NeuralSignature.jsx'

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
  const [activeTab, setActiveTab] = useState('matrix')
  const [radarInfo, setRadarInfo] = useState(null)
  const [terminalLogs, setTerminalLogs] = useState([
    '[INIT] initializing AI runtime...',
    '[INIT] local models online...',
    '[INIT] inference pipeline ready...',
  ])
  
  const logContainerRef = useRef(null)

  const handleLogAdded = (logText) => {
    setTerminalLogs((prev) => {
      const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      return [...prev.slice(-14), `[${timestamp}] ${logText}`];
    });
  };

  const handleRadarUpdate = (info) => {
    setRadarInfo(info);
  };

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [terminalLogs]);

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
              <div className={`flex-1 relative overflow-hidden p-4 flex items-center justify-center min-h-[260px] transition-colors duration-300 ${activeTab === 'matrix' ? 'bg-[#0D0D0D]' : 'bg-[#FAF7F2]'}`}>
                <div className="scanlines" />
                <div className="noise" />

                {/* MATRIX VIEW */}
                <div className={`w-full h-full min-h-[250px] relative ${activeTab === 'matrix' ? 'block' : 'hidden'}`}>
                  <NeuralSignature
                    onLogAdded={handleLogAdded}
                    onRadarUpdate={handleRadarUpdate}
                    accent="#E84B2A"
                    height="100%"
                  />
                </div>

                {/* LOG STREAM VIEW */}
                <div className={`w-full h-full flex flex-col justify-between ${activeTab === 'logs' ? 'block' : 'hidden'}`}>
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
                    Real-time compilation logs
                  </div>
                </div>

                {/* TECH RADAR VIEW */}
                <div className={`w-full h-full flex flex-col items-center justify-center p-2 ${activeTab === 'radar' ? 'flex' : 'hidden'}`}>
                  {/* Radar Telemetry Header */}
                  <div className="w-full max-w-[280px] font-mono text-[9px] text-[#888] flex justify-between mb-2 select-none">
                    <span>SYS_SCANNER: ACTIVE</span>
                    <span>LOCK: {radarInfo ? radarInfo.target.toUpperCase() : 'STANDBY'}</span>
                  </div>

                  <div className="relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px]">
                    <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
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

                      {/* Active target tracking pointer */}
                      {radarInfo && (
                        <>
                          {/* Radial lock-on line from center to target */}
                          <line
                            x1="200"
                            y1="200"
                            x2={radarInfo.xPct * 400}
                            y2={radarInfo.yPct * 400}
                            stroke="#CAFF00"
                            strokeWidth="1.2"
                            strokeDasharray="3 3"
                            opacity="0.6"
                          />
                          
                          {/* Radar targeted dot */}
                          <circle
                            cx={radarInfo.xPct * 400}
                            cy={radarInfo.yPct * 400}
                            r="6"
                            fill="#CAFF00"
                            stroke="#0d0d0d"
                            strokeWidth="1.5"
                            className="radar-target"
                          />
                          
                          {/* Text HUD next to targeted dot */}
                          <text
                            x={radarInfo.xPct * 400}
                            y={radarInfo.yPct * 400 - 10}
                            textAnchor="middle"
                            className="font-mono text-[9px] uppercase tracking-wider font-bold fill-[#E84B2A] select-none"
                          >
                            {radarInfo.target}
                          </text>
                        </>
                      )}
                    </svg>
                  </div>

                  {/* Telemetry Footer Info */}
                  <div className="w-full max-w-[280px] font-mono text-[8px] text-[#aaa] flex justify-between mt-2 select-none uppercase">
                    <span>BEARING: {radarInfo ? `${radarInfo.angle}°` : '0°'}</span>
                    <span>DIST: {radarInfo ? `${radarInfo.distance}m` : '0m'}</span>
                    <span>SIG: {radarInfo ? `${radarInfo.progress}%` : '0.00%'}</span>
                  </div>
                </div>
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