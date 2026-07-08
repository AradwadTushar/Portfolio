import { useState } from 'react';
import projects from '../../data/projects.js';
import ProjectCard from '../ui/ProjectCard.jsx';

/**
 * Projects
 * ─────────────────────────────────────────────────────────────
 * Restructured premium two-tier layout:
 * - Tier 1: Case Studies (Vertical Grid, showing shipped + documented work)
 * - Tier 2: Other Builds (Accordion list, showing secondary/open-source tools)
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
    <section id="projects" className="border-brutal-b py-20 px-6 sm:px-8 lg:px-12 bg-[#F5F0E8]">
      <div className="max-w-[1100px] mx-auto">
        
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
        <div className="mb-20">
          <div className="flex align-baseline justify-between border-b-2 border-ink pb-3 mb-6 select-none">
            <h3 className="font-mono text-[12px] uppercase tracking-wider font-bold text-ink flex items-center gap-2">
              <span className="pulse-dot h-2 w-2" style={{ background: '#E84B2A' }} />
              Case Studies
            </h3>
            <span className="font-mono text-[10px] text-[#888]">
              {String(caseStudies.length).padStart(2, '0')} projects — Shipped and documented
            </span>
          </div>

          {/* Grid Layout: Top 2 side-by-side, remaining 1 full-width */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {caseStudies.slice(0, 2).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {caseStudies.length > 2 && (
            <div className="grid grid-cols-1 gap-6">
              {caseStudies.slice(2).map((project) => (
                <ProjectCard key={project.id} project={project} />
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
