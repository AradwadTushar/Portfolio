/**
 * ProjectCard.jsx
 * ─────────────────────────────────────────────────────────────
 * Clean, premium project card.
 * Prioritizes clarity, authentic actions, and uncluttered typography.
 * Supports horizontal (featured spotlight) and vertical (grid) layouts.
 * Supports inline video demos and PDF inspection via MediaViewerModal.
 */

import { openMedia } from '../../utils/mediaViewer.js';

// Clean vector icons
const PlayIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
    <path d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
);

const DownloadIcon = () => (
  <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const DiagramIcon = () => (
  <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
);

const GithubIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export default function ProjectCard({ project, layout = "vertical", index = 1, total = 5, onOpenModal }) {
  const {
    title,
    description,
    tech,
    image,
    badge,
    type,
    year,
    featured,
    primaryAction,
    secondaryActions = [],
  } = project;

  const isHorizontal = layout === "horizontal";

  // Helper for primary action click
  const handlePrimaryClick = (e) => {
    if (primaryAction && primaryAction.type === 'video') {
      e.preventDefault();
      openMedia({
        title: `${title} — Video Demo`,
        url: primaryAction.url,
        type: 'video',
      });
    }
  };

  // Helper for secondary action click
  const handleSecondaryClick = (e, action) => {
    if (action.type === 'caseStudy' || action.type === 'paper') {
      e.preventDefault();
      openMedia({
        title: `${title} — ${action.label}`,
        url: action.url,
        type: 'pdf',
      });
    }
  };

  // Helper for primary action icon
  const renderPrimaryIcon = () => {
    if (!primaryAction) return null;
    if (primaryAction.type === 'video') return <PlayIcon />;
    if (primaryAction.type === 'download') return <DownloadIcon />;
    if (primaryAction.type === 'github') return <GithubIcon />;
    return <ExternalLinkIcon />;
  };

  return (
    <article
      className={`border-2 border-ink bg-[#FAF7F2] shadow-[4px_4px_0px_0px_rgba(13,13,13,1)] transition-all duration-300 hover:shadow-[6px_6px_0px_0px_rgba(13,13,13,1)] flex flex-col ${
        isHorizontal ? "md:grid md:grid-cols-12 md:gap-0" : ""
      }`}
    >
      {/* ── IMAGE CANVAS ─────────────────────────────────────────── */}
      <div
        onClick={() => onOpenModal && onOpenModal(project)}
        className={`relative overflow-hidden bg-[#EDEAE0] cursor-pointer group/img ${
          isHorizontal
            ? "md:col-span-5 md:border-r-2 md:border-b-0 border-b-2 border-ink min-h-[260px] md:min-h-full"
            : "w-full h-52 sm:h-56 border-b-2 border-ink"
        }`}
        title="Click to explore interactive architecture diagram"
      >
        <img
          src={image}
          alt={`${title} interface preview`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />

        {/* Subtle scanline overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity pointer-events-none" />

        {/* Single Top-Left Badge */}
        {badge && (
          <div className="absolute top-3 left-3 bg-ink text-[#EDEAE0] font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 z-10 border border-ink flex items-center gap-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.25)]">
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                featured ? "bg-[#CAFF00] animate-pulse" : "bg-[#E84B2A]"
              }`}
            />
            <span>{badge}</span>
          </div>
        )}

        {/* Top-Right Index Pill */}
        <div className="absolute top-3 right-3 bg-[#FAF7F2]/90 backdrop-blur-xs text-ink font-mono text-[10px] tracking-wider px-2 py-0.5 border border-ink/40 select-none">
          {String(index).padStart(2, '0')}/{String(total).padStart(2, '0')}
        </div>

        {/* Hover Quick-Hint */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover/img:opacity-100 transition-opacity bg-ink text-[#CAFF00] font-mono text-[9px] uppercase tracking-wider px-2 py-1 border border-ink flex items-center gap-1.5 z-10">
          <DiagramIcon />
          <span>Architecture & Flow ↗</span>
        </div>
      </div>

      {/* ── CARD CONTENT ─────────────────────────────────────────── */}
      <div
        className={`p-6 sm:p-7 flex flex-col justify-between ${
          isHorizontal ? "md:col-span-7" : "flex-1"
        }`}
      >
        <div>
          {/* Metadata Sub-header */}
          <div className="flex items-center justify-between gap-2 mb-2 font-mono text-[11px] text-[#777] uppercase tracking-wider">
            <span>{type || 'Engineering Build'}</span>
            <span>{year}</span>
          </div>

          {/* Title */}
          <h3
            onClick={() => onOpenModal && onOpenModal(project)}
            className="font-display font-extrabold text-2xl sm:text-3xl text-ink leading-tight mb-3 cursor-pointer hover:text-rust transition-colors flex items-start justify-between gap-2 group/title"
          >
            <span>{title}</span>
            <span className="text-sm font-mono text-[#888] group-hover/title:text-rust transition-colors mt-1">
              ↗
            </span>
          </h3>

          {/* Description */}
          <p className="font-mono text-xs sm:text-[13px] text-[#555] leading-relaxed mb-5">
            {description}
          </p>

          {/* Curated Tech Stack */}
          {tech && (
            <div className="flex flex-wrap gap-1.5 mb-6">
              {tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] uppercase tracking-wider bg-[#EDEAE0] border border-ink/20 px-2 py-0.5 text-[#333]"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* ── ACTION BAR ───────────────────────────────────────────── */}
        <div className="pt-4 border-t border-ink/20 flex flex-wrap items-center justify-between gap-3">
          {/* Main CTAs: Primary Action + Architecture Button */}
          <div className="flex flex-wrap items-center gap-2.5">
            {primaryAction && (
              <a
                href={primaryAction.url}
                onClick={handlePrimaryClick}
                target={primaryAction.type === 'video' ? undefined : "_blank"}
                rel={primaryAction.type === 'video' ? undefined : "noopener noreferrer"}
                className="btn-ink px-4 py-2 text-[11px] font-bold border-2 border-ink flex items-center gap-1.5 transition-all shadow-[2px_2px_0px_0px_rgba(13,13,13,1)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]"
              >
                {renderPrimaryIcon()}
                <span>{primaryAction.label}</span>
              </a>
            )}

            {onOpenModal && (
              <button
                onClick={() => onOpenModal(project)}
                className="btn-ghost px-3.5 py-2 text-[11px] font-bold border-2 border-ink flex items-center gap-1.5 transition-all hover:bg-ink hover:text-[#CAFF00]"
                title="Inspect interactive architecture diagram & technical specs"
              >
                <DiagramIcon />
                <span>Architecture</span>
              </button>
            )}
          </div>

          {/* Secondary Text Links (Case Study, Research Paper, GitHub) */}
          {secondaryActions.length > 0 && (
            <div className="flex flex-wrap items-center gap-3 font-mono text-[11px]">
              {secondaryActions.map((action, i) => (
                <a
                  key={i}
                  href={action.url}
                  onClick={(e) => handleSecondaryClick(e, action)}
                  target={action.type === 'caseStudy' || action.type === 'paper' ? undefined : "_blank"}
                  rel={action.type === 'caseStudy' || action.type === 'paper' ? undefined : "noopener noreferrer"}
                  className="text-[#666] hover:text-ink hover:underline flex items-center gap-1 transition-colors cursor-pointer"
                >
                  {action.type === 'github' && <GithubIcon />}
                  <span>{action.label}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
