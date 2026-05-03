/**
 * ProjectCard
 * ─────────────────────────────────────────────────────────────
 * Renders a single project. Supports two visual modes:
 *
 *   featured={true}  → Wide card spanning 2 columns, horizontal layout
 *   featured={false} → Standard vertical card (1 column)
 *
 * Props:
 *   project  - the project object from projects.js
 *
 * Special fields (featured cards only):
 *   caseStudyUrl  - Google Drive link → renders "Read Case Study" banner
 *   paperStatus   - "drafting" | "submitted" | "published" | null
 *                   → renders a research paper status badge
 *   paperUrl      - link to published paper (used when paperStatus = "published")
 */

// Maps tech tag names to their color classes for the colored badges
const TECH_COLORS = {
  "React":      "bg-primary/10 text-primary",
  "Node.js":    "bg-tertiary/10 text-tertiary",
  "Python":     "bg-secondary/10 text-secondary",
  "AI/ML":      "bg-primary/10 text-primary",
  "Electron":   "bg-tertiary/10 text-tertiary",
  "OCR":        "bg-secondary/10 text-secondary",
  "JavaScript": "bg-surface-container text-on-surface-variant",
}

// Maps paperStatus to a user-facing label and badge color style
const PAPER_STATUS_STYLES = {
  drafting:  { label: "Research Paper — Coming Soon",  classes: "bg-secondary/10 text-secondary border border-secondary/20" },
  submitted: { label: "Research Paper — Under Review", classes: "bg-tertiary/10 text-tertiary border border-tertiary/20"   },
  published: { label: "Research Paper — Published",    classes: "bg-primary/10 text-primary border border-primary/20"      },
}

// Returns the color class for a tech tag, falls back to neutral
function getTechColor(tag) {
  return TECH_COLORS[tag] || "bg-surface-container text-on-surface-variant"
}

export default function ProjectCard({ project }) {
  const {
    title, description, tech, github, liveUrl, image, featured,
    caseStudyUrl, paperStatus, paperUrl,
  } = project

  // ── Featured Card (wide, horizontal) ─────────────────────────
  if (featured) {
    const paper = PAPER_STATUS_STYLES[paperStatus] || null

    return (
      <div className="group lg:col-span-2 bg-white rounded-2xl border-2 border-primary/20 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col md:flex-row">

        {/* Project image — left half on desktop */}
        <div className="relative overflow-hidden md:w-1/2 h-64 md:h-auto bg-slate-100">
          <img
            src={image}
            alt={`${title} screenshot`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => { e.target.style.display = 'none' }}
          />
          {/* Featured badge overlay */}
          <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-on-primary text-[10px] font-bold rounded-full shadow-lg">
            ★ FEATURED
          </div>
        </div>

        {/* Card content — right half on desktop */}
        <div className="p-8 md:w-1/2 flex flex-col justify-center">

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((tag) => (
              <span key={tag} className={`px-2 py-1 text-[10px] font-bold rounded ${getTechColor(tag)}`}>
                {tag.toUpperCase()}
              </span>
            ))}
          </div>

          {/* Title + paper badge side by side */}
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <h3 className="text-h3 text-on-surface">{title}</h3>
            {/* Research paper status badge — only shows if paperStatus is set */}
            {paper && (
              <span className={`px-2.5 py-1 text-[10px] font-bold rounded-full ${paper.classes}`}>
                {paper.label}
              </span>
            )}
          </div>

          <p className="text-body-md text-on-surface-variant mb-6">{description}</p>

          {/* ── Case Study Banner ──────────────────────────────── */}
          {/* Only renders if caseStudyUrl is set in projects.js   */}
          {caseStudyUrl && (
            <a
              href={caseStudyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full px-5 py-3.5 mb-5 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 hover:from-primary/20 hover:to-secondary/20 hover:border-primary/40 transition-all group/cs"
            >
              <div className="flex items-center gap-3">
                {/* Document icon */}
                <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-[18px]">description</span>
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-on-surface">Read Case Study</p>
                  <p className="text-[11px] text-on-surface-variant">Full technical breakdown & results</p>
                </div>
              </div>
              {/* Arrow that nudges right on hover */}
              <span className="material-symbols-outlined text-primary text-[20px] group-hover/cs:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
          )}

          {/* ── Action Buttons (GitHub / Live Demo) ─────────────── */}
          <div className="flex gap-3">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-3 rounded-lg bg-primary text-on-primary text-sm font-semibold active:scale-95 transition-transform flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">play_circle</span>
                Live Demo
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-lg border border-outline-variant text-sm font-semibold hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">code</span>
                GitHub
              </a>
            )}
            {/* If paper is published, also show a link to it */}
            {paperStatus === 'published' && paperUrl && (
              <a
                href={paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-lg border border-secondary/40 text-secondary text-sm font-semibold hover:bg-secondary/5 transition-colors flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                Paper
              </a>
            )}
          </div>
        </div>
      </div>
    )
  }

  // ── Regular Card (vertical) ───────────────────────────────────
  return (
    <div className="group bg-white rounded-2xl border border-outline-variant/30 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col">

      {/* Project image */}
      <div className="relative overflow-hidden h-48 bg-slate-100">
        <img
          src={image}
          alt={`${title} screenshot`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => { e.target.style.display = 'none' }}
        />
      </div>

      {/* Card content */}
      <div className="p-6 flex-grow">

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((tag) => (
            <span key={tag} className={`px-2 py-1 text-[10px] font-bold rounded ${getTechColor(tag)}`}>
              {tag.toUpperCase()}
            </span>
          ))}
        </div>

        <h3 className="text-h3 text-on-surface mb-2">{title}</h3>
        <p className="text-body-md text-on-surface-variant mb-6">{description}</p>
      </div>

      {/* Action buttons pinned to the bottom */}
      <div className="p-6 pt-0 flex gap-3">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 rounded-lg bg-primary text-on-primary text-sm font-semibold active:scale-95 transition-transform flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">play_circle</span>
            Demo
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 rounded-lg border border-outline-variant text-sm font-semibold hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">code</span>
            GitHub
          </a>
        )}
        {/* Show a label if no links are available */}
        {!liveUrl && !github && (
          <span className="text-sm text-on-surface-variant italic">Private / Coming Soon</span>
        )}
      </div>
    </div>
  )
}
