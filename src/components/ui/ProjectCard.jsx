/**
 * ProjectCard
 * ─────────────────────────────────────────────────────────────
 * Case study card for featured projects.
 * Renders in a uniform vertical layout (Image on top, Body below).
 * Preserves CRT scanlines, hover zoom, and background numbers.
 */

export default function ProjectCard({ project }) {
  const {
    id, title, description, tech, github, liveUrl, image,
    caseStudyUrl, category,
  } = project;

  return (
    <div className="project-card flex flex-col bg-[#FAF7F2] border-2 border-ink relative overflow-hidden group">
      
      {/* Image Container with CRT Scanlines & Hover Zoom */}
      <div className="card-img-container relative h-[200px] sm:h-[220px] overflow-hidden border-b-2 border-ink bg-[#EDEAE0] flex-shrink-0">
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
      <div className="feat-body p-6 flex flex-1 flex-col justify-between relative z-10">
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
              className="btn-ink px-4 py-2 text-[0.68rem] font-bold border-2 border-ink flex items-center gap-1.5"
            >
              Read Case Study →
            </a>
          )}
          
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link w-9 h-9 border-2 border-ink flex items-center justify-center font-mono hover:bg-[#CAFF00] hover:text-ink transition-colors"
              title={category && category.includes('Mobile') ? 'Download Mobile App' : 'Visit Live Site'}
            >
              {category && category.includes('Mobile') ? '📲' : '🌐'}
            </a>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link w-9 h-9 border-2 border-ink flex items-center justify-center font-mono hover:bg-[#CAFF00] hover:text-ink transition-colors"
              title="View Source on GitHub"
            >
              💻
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
