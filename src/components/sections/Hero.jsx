/**
 * Hero.jsx
 * ─────────────────────────────────────────────────────────────
 * Brutalist editorial hero section.
 * Responsive across mobile, laptops, and ultra-wide displays.
 * Features:
 * - High-impact responsive typography
 * - Up-to-date active tech stack categorized by capability
 * - Interactive Cyber Dashboard (Node Matrix, Stream Logs, Tech Radar)
 * - 4-column balanced telemetry stats bar
 */

import { useEffect, useState, useRef, useCallback } from 'react';
import NeuralSignature from '../ui/NeuralSignature.jsx';
import { openResume } from '../../utils/mediaViewer.js';

const STACK_CATEGORIES = [
  {
    category: 'AI & Agents',
    items: ['LangGraph', 'Azure OpenAI', 'GPT-4o', 'FastAPI', 'PaddleOCR', 'Vector RAG'],
    badge: 'Core Focus',
  },
  {
    category: 'Full-Stack & Mobile',
    items: ['React 18', 'Next.js', 'React Native (Expo)', 'Node.js', 'Electron', 'PostgreSQL'],
    badge: 'Production',
  },
  {
    category: 'Systems & Tooling',
    items: ['Zustand', 'Docker', 'SQLite', 'WebSockets', 'OpenTelemetry', 'WeasyPrint'],
    badge: 'Runtime',
  },
];

const MARQUEE_ITEMS = [
  'Autonomous AI Agents',
  'LangGraph',
  'Full-Stack Systems',
  'React Native',
  'Desktop POS',
  'Multimodal OCR',
  'Open Source',
  'Vector RAG',
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState('matrix');
  const [activeStackCategory, setActiveStackCategory] = useState(0);
  const [radarInfo, setRadarInfo] = useState(null);
  const [terminalLogs, setTerminalLogs] = useState([
    '[INIT] LangGraph orchestration runtime online...',
    '[INIT] Azure Video Indexer OCR pipeline synchronized...',
    '[INIT] Vector RAG & regulatory embeddings active...',
    '[INFO] XERJ Corpus Hub contributor pipeline verified...',
  ]);

  const logContainerRef = useRef(null);

  const handleLogAdded = useCallback((logText) => {
    setTerminalLogs((prev) => {
      const timestamp = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      return [...prev.slice(-14), `[${timestamp}] ${logText}`];
    });
  }, []);

  const handleRadarUpdate = useCallback((info) => {
    setRadarInfo(info);
  }, []);

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [terminalLogs]);

  return (
    <>
      {/* ── HERO GRID ───────────────────────────────────────── */}
      <section
        id="home"
        className="mt-[58px] grid grid-cols-1 lg:grid-cols-2 border-brutal-b min-h-[calc(100vh-58px)] bg-[#F5F0E8] w-full"
      >
        {/* LEFT COLUMN: IDENT & VALUE PROP */}
        <div className="flex flex-col justify-between p-8 sm:p-12 lg:p-16 2xl:p-24 border-brutal-b lg:border-brutal-b-0 lg:border-brutal-r bg-[#FAF7F2]">
          <div>
            {/* Status & Availability Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-8">
              <div className="inline-flex items-center gap-2 bg-ink text-[#CAFF00] font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 border border-ink shadow-[2px_2px_0px_0px_rgba(232,75,42,1)]">
                <span className="pulse-dot" />
                <span>Available for work</span>
              </div>

              <a
                href="https://hub.xerj.org/contributors/AradwadTushar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[#555] hover:text-ink bg-[#EDEAE0] px-2.5 py-1.5 border border-ink/20 transition-colors"
                title="Verified XERJ Corpus Hub AI Contributor"
              >
                <span className="text-rust font-bold">✦</span>
                <span>XERJ AI Contributor</span>
              </a>
            </div>

            {/* Display Headline */}
            <h1 className="font-display font-extrabold text-[3.8rem] sm:text-[4.8rem] lg:text-[4.5rem] xl:text-[5.5rem] 2xl:text-[6.5rem] text-ink mb-6 leading-[0.92] tracking-tight">
              Tushar
              <br />
              <span className="text-rust">Aradwad.</span>
            </h1>

            {/* Sub-headline & Bio */}
            <div className="max-w-xl 2xl:max-w-2xl space-y-4 mb-10">
              <p className="font-display font-bold text-lg sm:text-xl text-ink leading-snug">
                Full-Stack Engineer & AI Systems Developer.
              </p>
              <p className="font-mono text-xs sm:text-sm text-[#555] leading-relaxed border-l-2 border-rust pl-4">
                22, B.Tech IT graduate from Pune. I architect and ship end-to-end software: autonomous LangGraph DAGs, multimodal OCR pipelines, offline-first mobile apps, and high-performance desktop POS systems.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="btn-ink px-6 py-3.5 text-xs font-bold shadow-[3px_3px_0px_0px_rgba(13,13,13,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
              >
                <span>See Shipped Work</span>
                <span>→</span>
              </a>

              <button
                onClick={openResume}
                className="btn-ghost px-5 py-3.5 text-xs font-bold border-2 border-ink bg-transparent hover:bg-[#CAFF00] hover:text-ink transition-colors flex items-center gap-1.5"
                title="Preview Resume PDF inline"
              >
                <span>Resume (PDF)</span>
                <span>↗</span>
              </button>

              <a
                href="#contact"
                className="btn-ghost px-6 py-3.5 text-xs font-bold border-2 border-ink bg-transparent hover:bg-ink hover:text-[#CAFF00]"
              >
                <span>Let&apos;s Talk</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Left Footer Telemetry */}
          <div className="pt-8 mt-10 border-t border-ink/15 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] text-[#777]">
            <span className="uppercase tracking-widest">Pune, India · IST (UTC+5:30)</span>
            <span className="text-rust font-bold">Ranked Top 8% Intern @ DevTown</span>
          </div>
        </div>

        {/* RIGHT COLUMN: TECH STACK & SYSTEM CYBER DASHBOARD */}
        <div className="flex flex-col justify-between bg-[#F5F0E8] min-w-0">
          
          {/* ── MODERN TECH STACK MATRIX ──────────────────────────── */}
          <div className="p-6 sm:p-8 xl:p-10 border-brutal-b bg-[#FAF7F2]">
            <div className="flex items-center justify-between mb-4 select-none">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#777] font-bold">
                Active Engineering Stack
              </span>
              <span className="font-mono text-[9px] text-rust uppercase tracking-wider">
                Production Verified
              </span>
            </div>

            {/* Category Selector Tabs */}
            <div className="flex gap-1.5 mb-4 border-b border-ink/15 pb-2 overflow-x-auto select-none">
              {STACK_CATEGORIES.map((cat, idx) => (
                <button
                  key={cat.category}
                  onClick={() => setActiveStackCategory(idx)}
                  className={`font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 border transition-all whitespace-nowrap ${
                    activeStackCategory === idx
                      ? 'bg-ink text-[#CAFF00] border-ink font-bold'
                      : 'bg-[#EDEAE0] text-[#666] border-ink/20 hover:text-ink'
                  }`}
                >
                  {cat.category}
                </button>
              ))}
            </div>

            {/* Dynamic Categorized Tags */}
            <div className="flex flex-wrap gap-2">
              {STACK_CATEGORIES[activeStackCategory].items.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs uppercase tracking-wider bg-[#EDEAE0] border-2 border-ink px-2.5 py-1 font-bold text-ink shadow-[2px_2px_0px_0px_rgba(13,13,13,0.1)] hover:bg-[#CAFF00] hover:text-ink transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* ── SYSTEM CYBER DASHBOARD ────────────────────────────── */}
          <div className="p-6 sm:p-8 xl:p-10 flex-1 flex flex-col justify-center">
            <div className="border-2 border-ink bg-[#FAF7F2] flex flex-col h-[360px] sm:h-[400px] xl:h-[420px] relative shadow-[4px_4px_0px_0px_rgba(13,13,13,1)] overflow-hidden">
              
              {/* Terminal Title Bar */}
              <div className="bg-ink text-white px-4 py-2.5 flex items-center justify-between font-mono text-[10px] border-b-2 border-ink select-none flex-shrink-0">
                <div className="flex items-center gap-2">
                  <span className="pulse-dot bg-[#CAFF00]" />
                  <span className="tracking-widest">SYSTEM TELEMETRY ENGINE</span>
                </div>
                <span className="text-[#888]">v3.2.0_SYS</span>
              </div>

              {/* Sub-tabs */}
              <div className="flex border-b-2 border-ink bg-[#EDEAE0] select-none flex-shrink-0 font-mono text-[10px]">
                <button
                  onClick={() => setActiveTab('matrix')}
                  className={`flex-1 py-2 uppercase tracking-wider border-r-2 border-ink transition-all ${
                    activeTab === 'matrix' ? 'bg-[#CAFF00] text-ink font-bold' : 'hover:bg-[#EAE5D9] text-[#666]'
                  }`}
                >
                  01. Node Matrix
                </button>
                <button
                  onClick={() => setActiveTab('logs')}
                  className={`flex-1 py-2 uppercase tracking-wider border-r-2 border-ink transition-all ${
                    activeTab === 'logs' ? 'bg-[#CAFF00] text-ink font-bold' : 'hover:bg-[#EAE5D9] text-[#666]'
                  }`}
                >
                  02. Log Stream
                </button>
                <button
                  onClick={() => setActiveTab('radar')}
                  className={`flex-1 py-2 uppercase tracking-wider transition-all ${
                    activeTab === 'radar' ? 'bg-[#CAFF00] text-ink font-bold' : 'hover:bg-[#EAE5D9] text-[#666]'
                  }`}
                >
                  03. Tech Radar
                </button>
              </div>

              {/* Dynamic Viewport */}
              <div
                className={`flex-1 relative overflow-hidden p-3 flex items-center justify-center transition-colors duration-300 ${
                  activeTab === 'matrix' ? 'bg-[#0D0D0D]' : 'bg-[#FAF7F2]'
                }`}
              >
                <div className="scanlines" />
                <div className="noise" />

                {/* 01. NODE MATRIX */}
                <div className={`w-full h-full relative ${activeTab === 'matrix' ? 'block' : 'hidden'}`}>
                  <NeuralSignature
                    onLogAdded={handleLogAdded}
                    onRadarUpdate={handleRadarUpdate}
                    accent="#E84B2A"
                    height="100%"
                  />
                </div>

                {/* 02. STREAM LOGS */}
                <div className={`w-full h-full flex flex-col justify-between ${activeTab === 'logs' ? 'flex' : 'hidden'}`}>
                  <div
                    ref={logContainerRef}
                    className="w-full flex-1 overflow-y-auto font-mono text-xs text-[#333] leading-relaxed p-2 scrollbar-thin space-y-1.5"
                  >
                    {terminalLogs.map((log, i) => (
                      <div key={i} className="border-l-2 border-rust/40 pl-2">
                        {log}
                      </div>
                    ))}
                    <span className="terminal-cursor text-rust font-bold">_</span>
                  </div>
                  <div className="font-mono text-[9px] uppercase tracking-wider text-[#999] pt-2 border-t border-ink/10 select-none">
                    Real-time pipeline diagnostics
                  </div>
                </div>

                {/* 03. TECH RADAR */}
                <div className={`w-full h-full flex flex-col items-center justify-center p-2 ${activeTab === 'radar' ? 'flex' : 'hidden'}`}>
                  <div className="w-full max-w-[280px] font-mono text-[9px] text-[#777] flex justify-between mb-2 select-none">
                    <span>SYS_SCANNER: ACTIVE</span>
                    <span>LOCK: {radarInfo ? radarInfo.target.toUpperCase() : 'STANDBY'}</span>
                  </div>

                  <div className="relative w-[180px] h-[180px] sm:w-[210px] sm:h-[210px]">
                    <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                      <circle cx="200" cy="200" r="180" stroke="#0D0D0D" strokeWidth="1" strokeDasharray="4 4" opacity="0.12" />
                      <circle cx="200" cy="200" r="130" stroke="#0D0D0D" strokeWidth="1" strokeDasharray="4 4" opacity="0.18" />
                      <circle cx="200" cy="200" r="80" stroke="#0D0D0D" strokeWidth="1" opacity="0.25" />
                      <circle cx="200" cy="200" r="30" stroke="#0D0D0D" strokeWidth="1" opacity="0.35" />

                      <line x1="200" y1="10" x2="200" y2="390" stroke="#0D0D0D" strokeWidth="0.5" opacity="0.15" />
                      <line x1="10" y1="200" x2="390" y2="200" stroke="#0D0D0D" strokeWidth="0.5" opacity="0.15" />

                      <g className="radar-sweep-group" style={{ transformOrigin: '200px 200px' }}>
                        <line x1="200" y1="200" x2="200" y2="20" stroke="#E84B2A" strokeWidth="2.5" />
                        <polygon points="200,200 200,20 160,30" fill="url(#sweep-gradient)" opacity="0.18" />
                      </g>

                      <defs>
                        <linearGradient id="sweep-gradient" x1="200" y1="200" x2="160" y2="30" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#E84B2A" stopOpacity="0" />
                          <stop offset="100%" stopColor="#E84B2A" stopOpacity="1" />
                        </linearGradient>
                      </defs>

                      {radarInfo && (
                        <>
                          <line
                            x1="200"
                            y1="200"
                            x2={radarInfo.xPct * 400}
                            y2={radarInfo.yPct * 400}
                            stroke="#CAFF00"
                            strokeWidth="1.2"
                            strokeDasharray="3 3"
                            opacity="0.7"
                          />
                          <circle
                            cx={radarInfo.xPct * 400}
                            cy={radarInfo.yPct * 400}
                            r="6"
                            fill="#CAFF00"
                            stroke="#0d0d0d"
                            strokeWidth="1.5"
                            className="radar-target"
                          />
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

                  <div className="w-full max-w-[280px] font-mono text-[8px] text-[#999] flex justify-between mt-2 select-none uppercase">
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

      {/* ── FULL WIDTH MARQUEE ───────────────────────────────── */}
      <div className="bg-ink text-[#CAFF00] overflow-hidden py-4 border-brutal-b select-none">
        <div className="marquee-track font-display font-extrabold text-xl sm:text-2xl tracking-tight">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="mr-10 flex items-center gap-3">
              <span>{item}</span>
              <span className="text-rust">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── CURRENTLY BUILDING TELEMETRY ─────────────────────── */}
      <div className="bg-rust text-white flex flex-wrap items-center gap-3 px-6 sm:px-10 py-3 border-brutal-b font-mono text-xs sm:text-body-sm select-none">
        <span className="pulse-dot" style={{ background: '#CAFF00' }} />
        <strong className="uppercase tracking-wider">Active Build:</strong>
        <span>
          Brand Guardian AI v2 — Multimodal Video Compliance DAGs with Azure Video Indexer & LangGraph
        </span>
      </div>

      {/* ── 4-COLUMN BALANCED STATS BAR ───────────────────────── */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-brutal-b bg-[#FAF7F2]">
        {[
          {
            num: '07+',
            label: 'Projects Shipped',
            sub: 'AI, Mobile & Desktop',
          },
          {
            num: 'Top 8%',
            label: 'Ranked Intern',
            sub: 'DevTown Batch of 250',
          },
          {
            num: 'Verified',
            label: 'XERJ Contributor',
            sub: 'AI Corpus Hub',
          },
          {
            num: '22 yrs',
            label: 'Pune, India',
            sub: 'B.Tech IT Graduate',
          },
        ].map(({ num, label, sub }, idx) => (
          <div
            key={label}
            className={`py-5 px-6 sm:px-8 border-brutal-b md:border-b-0 ${
              idx !== 3 ? 'md:border-brutal-r' : ''
            } ${idx % 2 === 0 ? 'border-r-2 border-ink md:border-r-2' : ''}`}
          >
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-ink leading-none mb-1">
              {num}
            </div>
            <div className="font-mono text-[10px] uppercase tracking-wider text-ink font-bold">
              {label}
            </div>
            <div className="font-mono text-[9px] text-[#888] mt-0.5">
              {sub}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}