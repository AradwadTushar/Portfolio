/**
 * ProjectCard
 * ─────────────────────────────────────────────────────────────
 * Upgraded Case study card for featured projects.
 * Supports "vertical" (grid) and "horizontal" (full-width) layouts.
 * Replaces amateur emojis with premium vector SVGs.
 */

const GlobeIcon = () => (
  <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const GithubIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const PhoneDownloadIcon = () => (
  <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <path d="M12 18h.01" />
    <path d="m9 10 3 3 3-3" />
    <path d="M12 6v7" />
  </svg>
);

export default function ProjectCard({ project, layout = "vertical" }) {
  const {
    id, title, description, tech, github, liveUrl, image,
    caseStudyUrl, category,
  } = project;

  const isHorizontal = layout === "horizontal";

  return (
    <div className={`project-card flex border-2 border-ink relative overflow-hidden group bg-[#FAF7F2] ${
      isHorizontal ? "flex-col md:flex-row col-span-1 md:col-span-2" : "flex-col"
    }`}>
      
      {/* Image Container with CRT Scanlines & Hover Zoom */}
      <div className={`card-img-container relative overflow-hidden bg-[#EDEAE0] flex-shrink-0 ${
        isHorizontal 
          ? "w-full md:w-[46%] h-56 md:h-auto border-b-2 md:border-b-0 md:border-r-2 border-ink" 
          : "w-full h-48 sm:h-52 border-b-2 border-ink"
      }`}>
        <img
          src={image}
          alt={`${title} screenshot`}
          className="w-full h-full object-cover"
          onError={(e) => { e.target.style.display = 'none' }}
        />
        {/* Case Study badge */}
        <div className="absolute top-3.5 left-3.5 bg-ink text-acid font-mono text-[0.6rem] uppercase tracking-widest px-2.5 py-1 z-20 flex items-center gap-1.5 border border-ink">
          <span className="h-1.5 w-1.5 rounded-full bg-[#E84B2A] animate-pulse" />
          Case Study
        </div>
      </div>

      {/* Body Content */}
      <div className="feat-body p-6 sm:p-8 flex flex-1 flex-col justify-between relative z-10">
        <div>
          {/* Tech tags */}
          <div className="feat-tags flex flex-wrap gap-1.5 mb-4">
            {tech.map((tag) => (
              <span key={tag} className="proj-tag font-mono text-[0.6rem] uppercase tracking-widest border border-ink/40 px-2 py-0.5 text-[#555] bg-surface/50">
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-display font-extrabold text-display-md leading-tight group-hover:text-acid transition-colors">{title}</h3>
            <span className="proj-arrow text-lg mt-0.5 flex-shrink-0">↗</span>
          </div>

          {/* Description */}
          <p className="proj-desc font-mono text-body-sm text-[#555] leading-relaxed mb-6">
            {description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="feat-actions flex items-center gap-2.5 mt-auto z-20">
          {caseStudyUrl && (
            <a
              href={caseStudyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ink px-4 py-2 text-[0.68rem] font-bold border-2 border-ink flex items-center gap-1.5 transition-all"
            >
              Read Case Study →
            </a>
          )}
          
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link w-9 h-9 border-2 border-ink flex items-center justify-center hover:bg-[#CAFF00] hover:text-ink transition-colors"
              title={category && category.includes('Mobile') ? 'Download Mobile App' : 'Visit Live Site'}
            >
              {category && category.includes('Mobile') ? <PhoneDownloadIcon /> : <GlobeIcon />}
            </a>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link w-9 h-9 border-2 border-ink flex items-center justify-center hover:bg-[#CAFF00] hover:text-ink transition-colors"
              title="View Source on GitHub"
            >
              <GithubIcon />
            </a>
          )}
        </div>
      </div>

      {/* Large Decorative Hollow Number */}
      <span className="proj-num font-display font-extrabold text-[7.5rem] leading-none pointer-events-none select-none absolute bottom-[-15px] right-2 transition-all duration-300">
        {String(id).padStart(2, '0')}
      </span>
    </div>
  );
}
