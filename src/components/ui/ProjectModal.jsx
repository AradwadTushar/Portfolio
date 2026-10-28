import { useEffect, useState } from 'react';
import MermaidViewer from './MermaidViewer.jsx';
import { openMedia } from '../../utils/mediaViewer.js';

// Clean vector icons
const CloseIcon = () => (
  <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
    <path d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
);

const PlayIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const DownloadIcon = () => (
  <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-3.5 h-3.5 fill-none stroke-current text-rust flex-shrink-0 mt-0.5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('architecture'); // 'architecture' | 'workflow' | 'specs'

  useEffect(() => {
    if (!project) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const {
    id,
    title,
    headline,
    description,
    architectureOverview,
    type,
    year,
    badge,
    tech = [],
    diagram,
    workflowDiagram,
    highlights = [],
    challenges = [],
    primaryAction,
    secondaryActions = [],
  } = project;

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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 lg:p-8 bg-ink/75 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="w-full max-w-5xl max-h-[92vh] flex flex-col bg-[#FAF7F2] border-2 border-ink shadow-[8px_8px_0px_0px_rgba(13,13,13,1)] overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── UNIFIED EDITORIAL HEADER ─────────────────────────────── */}
        <div className="bg-[#EDEAE0] px-6 py-5 sm:px-8 border-b-2 border-ink flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            {/* Metadata Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-1.5 font-mono text-[10px] uppercase tracking-widest text-[#777]">
              <span className="font-bold text-rust">PROJ_{String(id).padStart(2, '0')}</span>
              <span>·</span>
              <span className="bg-ink text-[#EDEAE0] px-2 py-0.5 border border-ink font-semibold">
                {badge || type}
              </span>
              <span>·</span>
              <span>{year}</span>
            </div>

            {/* Title & Tagline */}
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink leading-tight">
              {title}
            </h2>
            {headline && (
              <p className="font-mono text-xs text-[#666] mt-1">
                {headline}
              </p>
            )}
          </div>

          {/* Quick Header CTAs + Close Button */}
          <div className="flex items-center gap-2.5 sm:self-center flex-shrink-0">
            {primaryAction && (
              <a
                href={primaryAction.url}
                onClick={handlePrimaryClick}
                target={primaryAction.type === 'video' ? undefined : "_blank"}
                rel={primaryAction.type === 'video' ? undefined : "noopener noreferrer"}
                className="btn-ink px-3.5 py-1.5 text-xs font-bold border-2 border-ink flex items-center gap-1.5 shadow-[2px_2px_0px_0px_rgba(13,13,13,1)] hover:shadow-none cursor-pointer"
              >
                {primaryAction.type === 'video' && <PlayIcon />}
                {primaryAction.type === 'download' && <DownloadIcon />}
                <span>{primaryAction.label}</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="border-2 border-ink bg-[#FAF7F2] hover:bg-ink hover:text-[#CAFF00] px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 select-none"
              title="Close dialog (ESC)"
            >
              <span>ESC</span>
              <CloseIcon />
            </button>
          </div>
        </div>

        {/* ── TABS NAVIGATION ──────────────────────────────────────── */}
        <div className="flex border-b-2 border-ink bg-[#F5F0E8] font-mono text-xs select-none overflow-x-auto">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-6 py-3 uppercase tracking-wider font-bold border-r-2 border-ink transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'architecture'
                ? 'bg-[#FAF7F2] text-ink border-b-2 border-b-[#FAF7F2] -mb-[2px] z-10'
                : 'text-[#666] hover:bg-[#EAE5D9]'
            }`}
          >
            <span className="text-rust">01.</span> System Architecture
          </button>

          {workflowDiagram && (
            <button
              onClick={() => setActiveTab('workflow')}
              className={`px-6 py-3 uppercase tracking-wider font-bold border-r-2 border-ink transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'workflow'
                  ? 'bg-[#FAF7F2] text-ink border-b-2 border-b-[#FAF7F2] -mb-[2px] z-10'
                  : 'text-[#666] hover:bg-[#EAE5D9]'
              }`}
            >
              <span className="text-rust">02.</span> State Machine DAG
            </button>
          )}

          <button
            onClick={() => setActiveTab('specs')}
            className={`px-6 py-3 uppercase tracking-wider font-bold border-r-2 border-ink transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'specs'
                ? 'bg-[#FAF7F2] text-ink border-b-2 border-b-[#FAF7F2] -mb-[2px] z-10'
                : 'text-[#666] hover:bg-[#EAE5D9]'
            }`}
          >
            <span className="text-rust">{workflowDiagram ? '03.' : '02.'}</span> Engineering Specs & Challenges
          </button>
        </div>

        {/* ── MODAL BODY ───────────────────────────────────────────── */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 scrollbar-thin bg-[#FAF7F2]">
          
          {/* TAB 1: SYSTEM ARCHITECTURE */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              {/* Architecture Intro */}
              <div className="border-l-2 border-rust pl-4 py-1 bg-rust/5 pr-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-rust font-bold block mb-1">
                  Architecture Overview
                </span>
                <p className="font-mono text-xs sm:text-[13px] text-[#333] leading-relaxed max-w-3xl">
                  {architectureOverview || description}
                </p>
              </div>

              {/* Diagram Canvas */}
              {diagram ? (
                <div>
                  <div className="flex items-center justify-between mb-2 select-none font-mono text-[11px] text-[#777]">
                    <span className="uppercase tracking-wider">
                      Interactive Architecture Flowchart
                    </span>
                    <span className="text-[10px] text-[#999]">Mermaid Rendered Engine</span>
                  </div>
                  <div className="bg-white border-2 border-ink p-4 sm:p-6 overflow-x-auto shadow-[4px_4px_0px_0px_rgba(13,13,13,0.06)]">
                    <MermaidViewer chart={diagram} id={`diagram-${id}`} />
                  </div>
                </div>
              ) : (
                <div className="p-8 border-2 border-dashed border-ink/30 bg-white font-mono text-xs text-[#888] text-center">
                  Detailed architecture documentation available in the GitHub repository.
                </div>
              )}

              {/* Core Pillars */}
              {highlights.length > 0 && (
                <div className="pt-2">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-ink mb-3">
                    Key Technical Highlights:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {highlights.map((h, i) => (
                      <div
                        key={i}
                        className="p-3.5 border-2 border-ink/20 bg-white font-mono text-xs text-[#444] leading-relaxed flex items-start gap-2.5"
                      >
                        <CheckIcon />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: WORKFLOW STATE MACHINE */}
          {activeTab === 'workflow' && workflowDiagram && (
            <div className="space-y-6">
              <div className="border-l-2 border-rust pl-4 py-1 bg-rust/5 pr-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-rust font-bold block mb-1">
                  Autonomous State Transitions
                </span>
                <p className="font-mono text-xs sm:text-[13px] text-[#333] leading-relaxed">
                  Deterministic state graph orchestrating ingestion, OCR signal extraction, vector retrieval, and LLM reasoning.
                </p>
              </div>

              <div className="bg-white border-2 border-ink p-4 sm:p-6 overflow-x-auto shadow-[4px_4px_0px_0px_rgba(13,13,13,0.06)]">
                <MermaidViewer chart={workflowDiagram} id={`workflow-${id}`} />
              </div>
            </div>
          )}

          {/* TAB 3: SPECS & CHALLENGES */}
          {activeTab === 'specs' && (
            <div className="space-y-6">
              {/* Applied Tech Stack */}
              <div>
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-ink mb-2.5">
                  Applied Technologies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs uppercase tracking-wider bg-white border-2 border-ink px-3 py-1 font-bold shadow-[2px_2px_0px_0px_rgba(13,13,13,0.08)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Engineering Challenges & Solutions */}
              {challenges.length > 0 && (
                <div>
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-ink mb-3">
                    Engineering Challenges & Solutions:
                  </h4>
                  <div className="space-y-3.5">
                    {challenges.map((c, i) => (
                      <div
                        key={i}
                        className="p-5 border-2 border-ink bg-white font-mono text-xs shadow-[3px_3px_0px_0px_rgba(13,13,13,0.06)]"
                      >
                        <h5 className="font-bold text-ink text-sm mb-1.5 flex items-center gap-2">
                          <span className="text-rust">#{i + 1}</span>
                          <span>{c.title}</span>
                        </h5>
                        <p className="text-[#555] leading-relaxed text-xs">{c.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* ── UNIFIED FOOTER ───────────────────────────────────────── */}
        <div className="px-6 py-4 sm:px-8 bg-[#EDEAE0] border-t-2 border-ink flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3">
            {primaryAction && (
              <a
                href={primaryAction.url}
                onClick={handlePrimaryClick}
                target={primaryAction.type === 'video' ? undefined : "_blank"}
                rel={primaryAction.type === 'video' ? undefined : "noopener noreferrer"}
                className="btn-ink px-3.5 py-1.5 text-xs font-bold border-2 border-ink flex items-center gap-1.5 cursor-pointer"
              >
                <span>{primaryAction.label}</span>
                <ExternalLinkIcon />
              </a>
            )}

            {secondaryActions.map((action, i) => (
              <a
                key={i}
                href={action.url}
                onClick={(e) => handleSecondaryClick(e, action)}
                target={action.type === 'caseStudy' || action.type === 'paper' ? undefined : "_blank"}
                rel={action.type === 'caseStudy' || action.type === 'paper' ? undefined : "noopener noreferrer"}
                className="btn-ghost px-3.5 py-1.5 text-xs font-bold border-2 border-ink flex items-center gap-1.5 bg-[#FAF7F2] cursor-pointer"
              >
                <span>{action.label}</span>
                <ExternalLinkIcon />
              </a>
            ))}
          </div>

          <button
            onClick={onClose}
            className="text-[#666] hover:text-ink transition-colors ml-auto flex items-center gap-1 uppercase tracking-wider"
          >
            <span>Close Drawer</span>
            <CloseIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
