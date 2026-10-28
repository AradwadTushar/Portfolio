/**
 * About
 * ─────────────────────────────────────────────────────────────
 * Two-column brutalist layout:
 *   Left  — large display quote + initials block
 *   Right — bio timeline + stat chips
 *   Bottom — Verified Industry Experience & Credentials (Option A)
 */

import { openMedia } from '../../utils/mediaViewer.js';

const TIMELINE = [
  { year: '2026', text: 'Shipped Salon Management desktop app in Electron' },
  { year: '2025', text: 'Graduated B.Tech (IT) — started going all-in on AI/ML' },
  { year: '2024', text: 'Built NutriLens: OCR + LLMs to decode food labels' },
  { year: '2023', text: 'Built AI-powered Resume Analyzer & Builder V1' },
  { year: '2022', text: 'Fell down the full-stack rabbit hole. Never came back.' },
];

const STATS = [
  { num: 'B.Tech IT', label: 'Graduated Aug 2025' },
  { num: '22',        label: 'Years old'           },
  { num: '6+',        label: 'Apps shipped'        },
  { num: '∞',         label: 'Stack experiments'   },
];

export default function About() {
  return (
    <section id="about" className="border-brutal-b bg-[#F5F0E8]">

      {/* Section label */}
      <div className="px-6 sm:px-10 lg:px-16 2xl:px-24 py-4 border-brutal-b bg-[#EDEAE0]">
        <span className="font-mono text-label uppercase tracking-widest text-[#888]">
          03 — About & Experience
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 border-brutal-b">

        {/* Left — quote + initials */}
        <div className="border-brutal-b lg:border-brutal-b-0 lg:border-brutal-r p-8 sm:p-12 lg:p-16 2xl:p-24 flex flex-col justify-between gap-12 bg-[#FAF7F2]">

          {/* Big quote */}
          <div>
            <p className="font-display font-extrabold text-display-lg text-ink leading-tight mb-8">
              "I don't wait<br />
              to feel ready.<br />
              <span className="text-rust">I build to get there."</span>
            </p>
            <p className="font-mono text-body-sm text-[#666] max-w-sm leading-relaxed">
              Most 22-year-olds are still figuring out what they want to do.
              I already know — build things that are genuinely useful, ship them,
              and learn what textbooks can't teach.
            </p>
          </div>

          {/* Initials block */}
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 bg-ink flex items-center justify-center flex-shrink-0 shadow-[3px_3px_0px_0px_rgba(232,75,42,1)]">
              <span className="font-display font-extrabold text-acid text-2xl">TA</span>
            </div>
            <div>
              <p className="font-display font-bold text-lg text-ink leading-tight">Tushar Aradwad</p>
              <p className="font-mono text-label uppercase tracking-widest text-[#888]">
                Full-Stack · AI/ML · Pune, India
              </p>
            </div>
          </div>
        </div>

        {/* Right — bio + timeline + stats */}
        <div className="p-8 sm:p-12 lg:p-16 2xl:p-24 flex flex-col gap-10 bg-[#FAF7F2]">

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
              <div key={label} className="border-2 border-ink p-4 bg-white shadow-[2px_2px_0px_0px_rgba(13,13,13,1)]">
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

      {/* ── VERIFIED EXPERIENCE & CREDENTIALS (Option A) ─────── */}
      <div className="px-6 sm:px-10 lg:px-16 2xl:px-24 py-16 bg-[#F5F0E8]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="font-mono text-label uppercase tracking-widest text-[#888] block mb-1">
              Verified Experience & Credentials
            </span>
            <h3 className="font-display font-extrabold text-display-md text-ink leading-tight">
              Proof of work.<br />
              Ranked & verified.
            </h3>
          </div>
          <p className="font-mono text-xs text-[#666] max-w-sm">
            Industry internship training and engineering simulations backed by verifiable credentials and recommendation letters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: XERJ Corpus Hub */}
          <div className="border-2 border-ink bg-white p-6 flex flex-col justify-between shadow-[4px_4px_0px_0px_rgba(13,13,13,1)]">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-[10px] uppercase tracking-wider bg-ink text-[#CAFF00] font-bold px-2 py-0.5 border border-ink">
                  Open-Source AI
                </span>
                <span className="font-mono text-xs text-[#888]">
                  Verified Contributor
                </span>
              </div>

              <h4 className="font-display font-bold text-xl text-ink mb-1">
                XERJ Corpus Hub
              </h4>
              <p className="font-mono text-xs text-rust font-bold mb-3">
                XERJ Organization · AI Corpus
              </p>

              <p className="font-mono text-xs text-[#555] leading-relaxed mb-4">
                Recognized contributor to the global XERJ Corpus Hub. Contributing dataset structures and repository pipelines that advance predictability and standardization across frontier AI models.
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {['Dataset Tooling', 'AI Predictability', 'Open Source', 'GitHub Pipeline'].map((tag) => (
                  <span key={tag} className="font-mono text-[9px] uppercase tracking-wider bg-ink/5 border border-ink/20 px-2 py-0.5 text-[#555]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-ink/20 font-mono">
              <a
                href="https://hub.xerj.org/contributors/AradwadTushar"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ink px-3 py-1.5 text-[10px] font-bold border-2 border-ink flex items-center gap-1.5"
                title="View verified XERJ contributor page"
              >
                <span>Contributor Hub</span>
                <span>↗</span>
              </a>
              <a
                href="https://github.com/xerj-org/xerj"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost px-3 py-1.5 text-[10px] font-bold border-2 border-ink flex items-center gap-1.5"
                title="View XERJ on GitHub"
              >
                <span>xerj/xerj</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Card 2: DevTown */}
          <div className="border-2 border-ink bg-white p-6 flex flex-col justify-between shadow-[4px_4px_0px_0px_rgba(13,13,13,1)]">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-[10px] uppercase tracking-wider bg-ink text-[#EDEAE0] font-bold px-2 py-0.5 border border-ink">
                  Rank: Top 20 / 250 (Top 8%)
                </span>
                <span className="font-mono text-xs text-[#888]">
                  May – Sep 2024
                </span>
              </div>

              <h4 className="font-display font-bold text-xl text-ink mb-1">
                Full-Stack Developer Intern
              </h4>
              <p className="font-mono text-xs text-rust font-bold mb-3">
                DevTown · 5-Month Industry Internship
              </p>

              <blockquote className="border-l-2 border-rust pl-3 py-1 font-mono text-xs text-[#555] leading-relaxed mb-4 italic">
                "In the batch of 250 students, proved himself among the top 20... Highly skilled with data and modeling."
              </blockquote>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {['Full-Stack Development', 'Data Modeling', 'REST APIs', 'Backend Architecture'].map((tag) => (
                  <span key={tag} className="font-mono text-[9px] uppercase tracking-wider bg-ink/5 border border-ink/20 px-2 py-0.5 text-[#555]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-ink/20 font-mono">
              <button
                onClick={() =>
                  openMedia({
                    title: 'DevTown Top 20 / 250 Letter of Recommendation',
                    url: 'https://drive.google.com/file/d/1DZTt6R7FtKThjRkk6J54T3Fqj7ug1_FD/view?usp=drive_link',
                    type: 'pdf',
                  })
                }
                className="btn-ink px-2.5 py-1.5 text-[10px] font-bold border-2 border-ink flex items-center gap-1"
                title="View Letter of Recommendation inline"
              >
                <span>Top 20 LOR</span>
                <span>↗</span>
              </button>
              <button
                onClick={() =>
                  openMedia({
                    title: 'DevTown Full-Stack Internship Certificate',
                    url: 'https://drive.google.com/file/d/1cgAnVwbebmvla-5E4sMF838gtgzxoYpf/view?usp=drive_link',
                    type: 'pdf',
                  })
                }
                className="btn-ghost px-2.5 py-1.5 text-[10px] font-bold border-2 border-ink flex items-center gap-1"
                title="View Internship Certificate inline"
              >
                <span>Certificate</span>
                <span>↗</span>
              </button>
              <a
                href="https://cert.devtown.in/verify/2p2s4z"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] text-[#888] hover:text-ink underline ml-auto"
                title="Verify digitally on DevTown"
              >
                Verify ↗
              </a>
            </div>
          </div>

          {/* Card 3: Skyscanner */}
          <div className="border-2 border-ink bg-white p-6 flex flex-col justify-between shadow-[4px_4px_0px_0px_rgba(13,13,13,1)]">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-[10px] uppercase tracking-wider bg-[#0D0D0D] text-white font-bold px-2 py-0.5 border border-ink">
                  Skyscanner Engineering
                </span>
                <span className="font-mono text-xs text-[#888]">
                  Nov 2024
                </span>
              </div>

              <h4 className="font-display font-bold text-xl text-ink mb-1">
                Software Engineering Simulation
              </h4>
              <p className="font-mono text-xs text-rust font-bold mb-3">
                Skyscanner · via Forage
              </p>

              <p className="font-mono text-xs text-[#555] leading-relaxed mb-4">
                Completed industry-standard engineering tasks: implemented custom React web applications with the Skyscanner Backpack UI framework, built scalable backend microservices, and engineered responsive flight itinerary interfaces.
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {['Backpack React UI', 'Microservices', 'Flight Itinerary API', 'System Usability'].map((tag) => (
                  <span key={tag} className="font-mono text-[9px] uppercase tracking-wider bg-ink/5 border border-ink/20 px-2 py-0.5 text-[#555]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-ink/20 font-mono">
              <span className="text-[10px] text-[#888]">
                ID: <span className="text-ink font-bold">7CZKGRoNhffk35feP</span>
              </span>
              <button
                onClick={() =>
                  openMedia({
                    title: 'Skyscanner Software Engineering Simulation Certificate',
                    url: 'https://drive.google.com/file/d/1DUM2ixcz37U3DIlu2xEyaZfgBjKqUtbR/view?usp=drive_link',
                    type: 'pdf',
                  })
                }
                className="btn-ink px-3 py-1.5 text-[10px] font-bold border-2 border-ink flex items-center gap-1.5"
                title="View Skyscanner Completion Certificate inline"
              >
                <span>View Certificate</span>
                <span>↗</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
