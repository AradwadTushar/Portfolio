/**
 * ProjectCard
 * ─────────────────────────────────────────────────────────────
 * Brutalist card — preserves full data contract from projects.js:
 *   featured, caseStudyUrl, paperStatus, paperUrl, github, liveUrl
 *
 * Featured card → spans 2 cols (lg:col-span-2), horizontal layout
 * Regular card  → standard vertical card
 *
 * All cards live inside the grid in Projects.jsx.
 * Each card has a 2px ink border on right + bottom (grid handles gaps via borders).
 */

const PAPER_LABELS = {
  drafting:  'Paper — Coming soon',
  submitted: 'Paper — Under review',
  published: 'Paper — Published',
}

export default function ProjectCard({ project }) {
  const {
    title, description, tech, github, liveUrl, image,
    featured, caseStudyUrl, paperStatus, paperUrl,
  } = project

  const paperLabel = PAPER_LABELS[paperStatus] || null

  /* ── Featured card ─────────────────────────────────────── */
  if (featured) {
    return (
      <div className="project-card lg:col-span-2 border-brutal-b border-brutal-r flex flex-col md:flex-row">

        {/* Image — left half */}
        <div className="relative md:w-[45%] h-56 md:h-auto overflow-hidden border-brutal-b md:border-brutal-b-0 md:border-brutal-r bg-surface flex-shrink-0">
          <img
            src={image}
            alt={`${title} screenshot`}
            className="w-full h-full object-cover"
            onError={(e) => { e.target.style.display = 'none' }}
          />
          {/* Featured badge */}
          <div className="absolute top-3 left-3 bg-ink text-acid font-mono text-[0.6rem] uppercase tracking-widest px-2 py-1">
            ★ Featured
          </div>
        </div>

        {/* Content — right half */}
        <div className="flex flex-col justify-between p-8 flex-1">
          <div>
            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {tech.map((tag) => (
                <span key={tag} className="proj-tag font-mono text-[0.6rem] uppercase tracking-widest border border-current px-2 py-0.5">
                  {tag}
                </span>
              ))}
              {paperLabel && (
                <span className="font-mono text-[0.6rem] uppercase tracking-widest border border-rust text-rust px-2 py-0.5">
                  {paperLabel}
                </span>
              )}
            </div>

            {/* Title */}
            <div className="flex items-start justify-between gap-2 mb-3">
              <h3 className="font-display font-extrabold text-display-md">{title}</h3>
              <span className="proj-arrow text-xl mt-1 flex-shrink-0">↗</span>
            </div>

            {/* Description */}
            <p className="proj-desc font-mono text-body-sm text-[#555] mb-6 leading-relaxed">
              {description}
            </p>

            {/* Case study banner */}
            {caseStudyUrl && (
              <a
                href={caseStudyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full px-4 py-3 mb-6 border-2 border-ink hover:bg-acid transition-colors"
              >
                <span className="font-mono text-[0.7rem] uppercase tracking-widest">
                  Read case study
                </span>
                <span className="text-sm">→</span>
              </a>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn-ink text-[0.65rem]">
                Live demo ↗
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="btn-ghost text-[0.65rem]">
                GitHub ↗
              </a>
            )}
            {paperStatus === 'published' && paperUrl && (
              <a href={paperUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost text-[0.65rem]" style={{ borderColor: '#E84B2A', color: '#E84B2A' }}>
                Paper ↗
              </a>
            )}
          </div>
        </div>
      </div>
    )
  }

  /* ── Regular card ──────────────────────────────────────── */
  return (
    <div className="project-card border-brutal-b border-brutal-r flex flex-col">

      {/* Image */}
      <div className="relative h-44 overflow-hidden border-brutal-b bg-surface flex-shrink-0">
        <img
          src={image}
          alt={`${title} screenshot`}
          className="w-full h-full object-cover"
          onError={(e) => { e.target.style.display = 'none' }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((tag) => (
            <span key={tag} className="proj-tag font-mono text-[0.6rem] uppercase tracking-widest border border-current px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display font-extrabold text-display-md leading-tight">{title}</h3>
          <span className="proj-arrow text-lg mt-1 flex-shrink-0">↗</span>
        </div>

        {/* Description */}
        <p className="proj-desc font-mono text-body-sm text-[#555] leading-relaxed flex-1 mb-6">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mt-auto">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn-ink text-[0.65rem]">
              Demo ↗
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="btn-ghost text-[0.65rem]">
              GitHub ↗
            </a>
          )}
          {!liveUrl && !github && (
            <span className="font-mono text-[0.65rem] text-[#aaa] uppercase tracking-widest">
              Private / Coming soon
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
