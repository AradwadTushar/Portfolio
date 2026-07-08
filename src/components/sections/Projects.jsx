import { useState } from 'react';
import projects from '../../data/projects.js';
import ProjectCard from '../ui/ProjectCard.jsx';

/**
 * Projects
 * ─────────────────────────────────────────────────────────────
 * Restructured premium two-tier layout:
 * - Tier 1: Case Studies (Vertical Grid + Full-Width Horizontal layout)
 * - Tier 2: Other Builds (Accordion list, showing secondary/open-source tools)
 * - Margins: Waving/reading Pip mascots and scattered skill tags fill outer desktop space.
 */
export default function Projects() {
  const [expandedId, setExpandedId] = useState(null);

  // Split projects based on existence of write-ups (caseStudyUrl)
  const caseStudies = projects.filter((p) => !!p.caseStudyUrl);
  const otherBuilds = projects.filter((p) => !p.caseStudyUrl);

  const toggleAccordion = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="border-brutal-b py-20 px-6 sm:px-8 lg:px-12 bg-[#F5F0E8] projects-grid-bg relative overflow-hidden">
      
      {/* ── BACKGROUND SCATTERED SKILLS (Left Margin) ───────────────── */}
      <div className="hidden xl:block absolute left-10 top-[22%] opacity-20 rotate-[-6deg] font-mono text-xs border border-ink/40 px-2 py-1 select-none pointer-events-none">
        #FastAPI
      </div>
      <div className="hidden xl:block absolute left-20 top-[42%] opacity-25 rotate-[8deg] font-mono text-xs border border-ink/40 px-2 py-1 select-none pointer-events-none">
        #Zustand
      </div>
      <div className="hidden xl:block absolute left-12 top-[64%] opacity-15 rotate-[-4deg] font-mono text-xs border border-ink/40 px-2 py-1 select-none pointer-events-none">
        #Electron
      </div>
      <div className="hidden xl:block absolute left-24 top-[84%] opacity-20 rotate-[12deg] font-mono text-xs border border-ink/40 px-2 py-1 select-none pointer-events-none">
        #WebSockets
      </div>

      {/* ── BACKGROUND SCATTERED SKILLS (Right Margin) ──────────────── */}
      <div className="hidden xl:block absolute right-16 top-[18%] opacity-25 rotate-[5deg] font-mono text-xs border border-ink/40 px-2 py-1 select-none pointer-events-none">
        #Docker
      </div>
      <div className="hidden xl:block absolute right-10 top-[38%] opacity-20 rotate-[-7deg] font-mono text-xs border border-ink/40 px-2 py-1 select-none pointer-events-none">
        #Ollama
      </div>
      <div className="hidden xl:block absolute right-24 top-[58%] opacity-30 rotate-[6deg] font-mono text-xs border border-ink/40 px-2 py-1 select-none pointer-events-none">
        #PostgreSQL
      </div>
      <div className="hidden xl:block absolute right-12 top-[78%] opacity-15 rotate-[-10deg] font-mono text-xs border border-ink/40 px-2 py-1 select-none pointer-events-none">
        #AsyncStorage
      </div>

      {/* ── LEFT FLOATING MASCOT: WAVING PIP ───────────────────────── */}
      <div className="hidden xl:block absolute left-4 lg:left-8 top-[10%] w-32 h-32 z-20 select-none pip-mascot-container">
        <div className="border-2 border-ink p-2 bg-[#FAF7F2] shadow-[4px_4px_0px_0px_rgba(13,13,13,1)] relative">
          <div className="absolute -top-3 left-2 bg-[#E84B2A] text-white text-[7px] px-1.5 py-0.5 font-mono uppercase tracking-widest border border-ink">
            Pip_v1.0
          </div>
          <img
            src="/images/mascot/pip-waving.png"
            alt="Pip Waving Mascot"
            className="w-full h-full object-contain pip-mascot"
          />
        </div>
      </div>

      {/* ── RIGHT FLOATING MASCOT: READING PIP ──────────────────────── */}
      <div className="hidden xl:block absolute right-4 lg:right-8 bottom-[10%] w-32 h-32 z-20 select-none pip-mascot-container">
        <div className="border-2 border-ink p-2 bg-[#FAF7F2] shadow-[4px_4px_0px_0px_rgba(13,13,13,1)] relative">
          <div className="absolute -top-3 left-2 bg-[#CAFF00] text-ink text-[7px] px-1.5 py-0.5 font-mono uppercase tracking-widest border border-ink font-bold">
            Pip_Agent
          </div>
          <img
            src="/images/mascot/pip-reading.png"
            alt="Pip Reading Mascot"
            className="w-full h-full object-contain pip-mascot"
          />
        </div>
      </div>

      {/* ── MAIN CONTENT CONTAINER ─────────────────────────────────── */}
      <div className="max-w-[1240px] mx-auto relative z-10">
        
        {/* Eyebrow & Main Section Header */}
        <div className="mb-14">
          <span className="font-mono text-label uppercase tracking-widest text-[#888] block mb-2">
            02 — Selected Work
          </span>
          <h2 className="font-display font-extrabold text-display-lg text-ink leading-none">
            Case studies first.<br />
            Everything else, honestly.
          </h2>
        </div>

        {/* ── TIER 1: CASE STUDIES ───────────────────────────────── */}
        <div className="mb-24">
          <div className="flex align-baseline justify-between border-b-2 border-ink pb-3 mb-6 select-none">
            <h3 className="font-mono text-[12px] uppercase tracking-wider font-bold text-ink flex items-center gap-2">
              <span className="pulse-dot h-2 w-2" style={{ background: '#E84B2A' }} />
              Case Studies
            </h3>
            <span className="font-mono text-[10px] text-[#888]">
              {String(caseStudies.length).padStart(2, '0')} projects — Shipped and documented
            </span>
          </div>

          {/* Grid Layout: Top 2 side-by-side (Vertical) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {caseStudies.slice(0, 2).map((project) => (
              <ProjectCard key={project.id} project={project} layout="vertical" />
            ))}
          </div>

          {/* Solo: Bottom project (Horizontal to prevent vertical stretching) */}
          {caseStudies.length > 2 && (
            <div className="grid grid-cols-1 gap-6">
              {caseStudies.slice(2).map((project) => (
                <ProjectCard key={project.id} project={project} layout="horizontal" />
              ))}
            </div>
          )}
        </div>

        {/* ── TIER 2: OTHER BUILDS ───────────────────────────────── */}
        <div>
          <div className="flex align-baseline justify-between border-b-2 border-ink pb-3 mb-6 select-none">
            <h3 className="font-mono text-[12px] uppercase tracking-wider font-bold text-ink flex items-center gap-2">
              <span className="h-2 w-2 bg-[#888]" />
              Other Builds
            </h3>
            <span className="font-mono text-[10px] text-[#888]">
              {String(otherBuilds.length).padStart(2, '0')} builds — Repository available, no write-up yet
            </span>
          </div>

          {/* Accordion List */}
          <div className="border-t border-ink flex flex-col">
            {otherBuilds.map((build, index) => {
              const isExpanded = expandedId === build.id;
              const formattedIndex = String(caseStudies.length + index + 1).padStart(2, '0');
              const buildTypeLabel = build.category && build.category.includes('Desktop') ? 'Desktop App' : 'Open Source';

              return (
                <div
                  key={build.id}
                  className="border-b border-ink/20 py-4 px-2 hover:bg-[#EDEAE0] transition-colors duration-200"
                >
                  {/* Row Trigger */}
                  <div
                    onClick={() => toggleAccordion(build.id)}
                    className="grid grid-cols-[28px_1fr_auto] gap-4 sm:gap-6 items-center cursor-pointer select-none"
                  >
                    {/* Index */}
                    <span className="font-mono text-xs text-[#aaa]">{formattedIndex}</span>

                    {/* Details */}
                    <div>
                      <h4 className="font-mono text-sm sm:text-base font-bold text-ink leading-tight">
                        {build.title}
                      </h4>
                      <p className="font-mono text-[11px] sm:text-xs text-[#666] mt-0.5">
                        {build.description}
                      </p>
                    </div>

                    {/* Telemetry Badge & Expansion Caret */}
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className="hidden sm:inline-block font-mono text-[9px] text-[#888] tracking-wider uppercase border border-ink/20 px-2 py-0.5 bg-surface/50">
                        {buildTypeLabel}
                      </span>
                      <span className={`text-xs text-[#555] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </div>
                  </div>

                  {/* Smooth Grid-Height Slide Accordion Panel */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                      isExpanded ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 pb-2 border-t border-ink/10 font-mono">
                        {/* Tech Chips */}
                        <div className="flex flex-wrap gap-1.5">
                          {build.tech.map((t) => (
                            <span
                              key={t}
                              className="text-[9px] uppercase tracking-wider bg-ink/5 border border-ink/20 px-2 py-0.5 text-[#555]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex items-center gap-3 self-end sm:self-auto">
                          {build.github && (
                            <a
                              href={build.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-ghost px-4 py-1.5 text-[10px] font-bold border-2 border-ink"
                            >
                              GitHub Code ↗
                            </a>
                          )}
                          {build.liveUrl && (
                            <a
                              href={build.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-ink px-4 py-1.5 text-[10px] font-bold border-2 border-ink"
                            >
                              Live Site ↗
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
