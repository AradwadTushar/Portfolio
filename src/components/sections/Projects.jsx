import { useState, useMemo } from 'react';
import projects from '../../data/projects.js';
import ProjectCard from '../ui/ProjectCard.jsx';
import ProjectModal from '../ui/ProjectModal.jsx';

// Clean vector icons
const ChevronIcon = ({ isExpanded }) => (
  <svg
    className={`w-3.5 h-3.5 text-[#555] transition-transform duration-300 ${
      isExpanded ? 'rotate-180' : ''
    }`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const ExternalArrowIcon = () => (
  <svg className="w-3 h-3 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
    <path d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
);

const GithubIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedId, setExpandedId] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  // Split primary showcase projects from list-only builds
  const gridProjects = useMemo(() => projects.filter((p) => !p.listOnly), []);
  const listProjects = useMemo(() => projects.filter((p) => p.listOnly), []);

  // Filter Categories: Domain-specific, clean
  const categories = ['All', 'AI', 'Mobile', 'Web', 'Desktop'];

  const getCategoryCount = (cat) => {
    if (cat === 'All') return gridProjects.length;
    return gridProjects.filter((p) =>
      Array.isArray(p.category) ? p.category.includes(cat) : p.category === cat
    ).length;
  };

  // Filter showcase projects dynamically
  const filteredGridProjects = useMemo(() => {
    if (activeCategory === 'All') return gridProjects;
    return gridProjects.filter((p) => {
      if (Array.isArray(p.category)) return p.category.includes(activeCategory);
      return p.category === activeCategory;
    });
  }, [gridProjects, activeCategory]);

  const toggleAccordion = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Featured spotlight card (Brand Guardian AI when in All or AI)
  const featuredProject = filteredGridProjects.find((p) => p.featured);
  const regularProjects = featuredProject
    ? filteredGridProjects.filter((p) => p.id !== featuredProject.id)
    : filteredGridProjects;

  return (
    <section
      id="projects"
      className="border-brutal-b py-16 sm:py-24 px-6 sm:px-10 lg:px-16 2xl:px-24 bg-[#F5F0E8] projects-grid-bg relative overflow-hidden w-full"
    >
      {/* ── AMBIENT MARGIN ACCENTS (SUBTLE) ────────────────────────── */}
      <div className="hidden 2xl:block absolute left-8 top-[25%] opacity-20 rotate-[-5deg] font-mono text-[11px] border border-ink/40 px-2.5 py-1 select-none pointer-events-none">
        #LangGraph
      </div>
      <div className="hidden 2xl:block absolute left-12 top-[60%] opacity-20 rotate-[6deg] font-mono text-[11px] border border-ink/40 px-2.5 py-1 select-none pointer-events-none">
        #PaddleOCR
      </div>
      <div className="hidden 2xl:block absolute right-8 top-[30%] opacity-20 rotate-[4deg] font-mono text-[11px] border border-ink/40 px-2.5 py-1 select-none pointer-events-none">
        #FastAPI
      </div>
      <div className="hidden 2xl:block absolute right-12 top-[70%] opacity-20 rotate-[-6deg] font-mono text-[11px] border border-ink/40 px-2.5 py-1 select-none pointer-events-none">
        #Zustand
      </div>

      {/* ── MAIN CONTENT CONTAINER ─────────────────────────────────── */}
      <div className="w-full relative z-10">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <span className="font-mono text-label uppercase tracking-widest text-[#888] block mb-2">
            02 — Selected Engineering Work
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-display font-extrabold text-display-lg text-ink leading-tight">
                Systems & tools.<br />
                Shipped with purpose.
              </h2>
            </div>
            <p className="font-mono text-xs sm:text-sm text-[#666] max-w-md leading-relaxed">
              Real-world systems spanning multimodal AI, mobile engines, and offline desktop POS. Click <strong>Architecture</strong> on any card to inspect system flowcharts and specifications.
            </p>
          </div>
        </div>

        {/* ── CLEAN CATEGORY FILTER TOOLBAR ────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-4 border-b-2 border-ink">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              const count = getCategoryCount(cat);

              // Don't render empty categories
              if (count === 0 && cat !== 'All') return null;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-mono text-xs uppercase tracking-wider px-4 py-2 border-2 border-ink transition-all flex items-center gap-2 select-none ${
                    isActive
                      ? 'bg-ink text-[#CAFF00] font-bold shadow-[2px_2px_0px_0px_rgba(232,75,42,1)] translate-x-[-1px] translate-y-[-1px]'
                      : 'bg-[#FAF7F2] text-ink hover:bg-[#EDEAE0]'
                  }`}
                >
                  <span>{cat === 'AI' ? 'AI & LLMs' : cat}</span>
                  <span className={`text-[10px] ${isActive ? 'text-rust' : 'text-[#888]'}`}>
                    [{String(count).padStart(2, '0')}]
                  </span>
                </button>
              );
            })}
          </div>

          {/* Telemetry info indicator */}
          <div className="flex items-center gap-2 font-mono text-[11px] text-[#777] select-none">
            <span className="pulse-dot h-2 w-2" style={{ background: '#E84B2A' }} />
            <span>
              {String(filteredGridProjects.length).padStart(2, '0')} {filteredGridProjects.length === 1 ? 'build' : 'builds'} displayed
            </span>
          </div>
        </div>

        {/* ── TIER 1: PRIMARY SHOWCASE GRID ────────────────────────── */}
        <div className="mb-20">
          {filteredGridProjects.length === 0 ? (
            <div className="border-2 border-dashed border-ink/40 p-12 text-center bg-[#FAF7F2]">
              <p className="font-mono text-sm text-[#777] mb-4">No projects match this category.</p>
              <button
                onClick={() => setActiveCategory('All')}
                className="btn-ink text-xs px-4 py-2"
              >
                Reset to All Projects
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Featured Spotlight Card */}
              {featuredProject && (
                <div className="w-full">
                  <ProjectCard
                    project={featuredProject}
                    layout="horizontal"
                    index={1}
                    total={filteredGridProjects.length}
                    onOpenModal={setSelectedProject}
                  />
                </div>
              )}

              {/* Remaining Projects Grid */}
              {regularProjects.length > 0 && (
                <div
                  className={`grid gap-8 ${
                    regularProjects.length === 1 && !featuredProject
                      ? 'grid-cols-1'
                      : 'grid-cols-1 md:grid-cols-2'
                  }`}
                >
                  {regularProjects.map((project, idx) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      layout={regularProjects.length === 1 && !featuredProject ? 'horizontal' : 'vertical'}
                      index={featuredProject ? idx + 2 : idx + 1}
                      total={filteredGridProjects.length}
                      onOpenModal={setSelectedProject}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* ── TIER 2: OTHER BUILDS & OPEN SOURCE UTILITIES ─────────── */}
        <div>
          {/* Section Divider & Header */}
          <div className="flex items-baseline justify-between border-b-2 border-ink pb-3 mb-6 select-none">
            <h3 className="font-mono text-xs uppercase tracking-wider font-bold text-ink flex items-center gap-2">
              <span className="h-2 w-2 bg-[#888]" />
              Other Builds & Utilities
            </h3>
            <span className="font-mono text-[11px] text-[#888]">
              {String(listProjects.length).padStart(2, '0')} builds cataloged
            </span>
          </div>

          {/* Clean Accordion / Registry List */}
          <div className="bg-[#FAF7F2] border-2 border-ink shadow-[4px_4px_0px_0px_rgba(13,13,13,1)]">
            {listProjects.map((build, index) => {
              const isExpanded = expandedId === build.id;
              const formattedIndex = String(gridProjects.length + index + 1).padStart(2, '0');

              return (
                <div
                  key={build.id}
                  className="border-b border-ink/20 py-4 px-5 sm:px-6 hover:bg-[#EDEAE0]/70 transition-colors duration-200 last:border-b-0"
                >
                  {/* Row Trigger */}
                  <div
                    onClick={() => toggleAccordion(build.id)}
                    className="grid grid-cols-[36px_1fr_auto] gap-4 items-center cursor-pointer select-none"
                  >
                    {/* Index */}
                    <span className="font-mono text-xs text-[#888] font-bold">{formattedIndex}</span>

                    {/* Details */}
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="font-mono text-sm sm:text-base font-bold text-ink leading-tight">
                          {build.title}
                        </h4>
                        <span className="font-mono text-[9px] uppercase bg-ink/5 border border-ink/20 text-[#666] px-1.5 py-0.5">
                          {build.badge || 'Open Source'}
                        </span>
                      </div>
                      <p className="font-mono text-xs text-[#666] mt-1 line-clamp-1">
                        {build.description}
                      </p>
                    </div>

                    {/* Toggle Indicator */}
                    <div className="flex items-center gap-3">
                      <ChevronIcon isExpanded={isExpanded} />
                    </div>
                  </div>

                  {/* Expanded Content Drawer */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-ink/15 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-mono text-[11px] uppercase tracking-wider text-[#888] mb-1 font-bold">
                          System Summary
                        </h5>
                        <p className="font-mono text-xs text-[#444] leading-relaxed mb-3">
                          {build.architectureOverview || build.description}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {build.tech &&
                            build.tech.map((t) => (
                              <span
                                key={t}
                                className="font-mono text-[9px] uppercase tracking-wider bg-white border border-ink/20 px-1.5 py-0.5 text-[#555]"
                              >
                                {t}
                              </span>
                            ))}
                        </div>
                      </div>

                      <div className="flex flex-col justify-between items-start md:items-end gap-3 pt-2 md:pt-0">
                        {build.primaryAction && (
                          <a
                            href={build.primaryAction.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-ink text-[11px] px-3.5 py-1.5 border-2 border-ink flex items-center gap-1.5"
                          >
                            <GithubIcon />
                            <span>{build.primaryAction.label}</span>
                            <ExternalArrowIcon />
                          </a>
                        )}

                        <button
                          onClick={() => setSelectedProject(build)}
                          className="font-mono text-xs text-rust hover:underline flex items-center gap-1"
                        >
                          <span>Explore Architecture Diagram →</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── PROJECT ARCHITECTURE MODAL DRAWER ─────────────────────── */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
