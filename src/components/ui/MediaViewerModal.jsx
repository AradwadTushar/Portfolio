import { useEffect, useState } from 'react';

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

const VideoIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const DocumentIcon = () => (
  <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

/**
 * Converts standard Google Drive view links to direct iframe preview embeds.
 * Example: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 *       -> https://drive.google.com/file/d/FILE_ID/preview
 */
function getEmbedUrl(rawUrl) {
  if (!rawUrl) return '';
  const driveMatch = rawUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (driveMatch && driveMatch[1]) {
    return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
  }
  return rawUrl;
}

export default function MediaViewerModal({ media, onClose }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!media) return;

    setIsLoading(true);
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
  }, [media, onClose]);

  if (!media) return null;

  const { title, url, type = 'pdf' } = media;
  const embedUrl = getEmbedUrl(url);
  const isVideo = type === 'video';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 lg:p-8 bg-ink/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className={`w-full flex flex-col bg-[#FAF7F2] border-2 border-ink shadow-[8px_8px_0px_0px_rgba(13,13,13,1)] overflow-hidden relative ${
          isVideo ? 'max-w-4xl' : 'max-w-5xl h-[88vh]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── CONTROL TITLE BAR ─────────────────────────────────────── */}
        <div className="bg-[#EDEAE0] px-5 py-3.5 sm:px-6 sm:py-4 border-b-2 border-ink flex items-center justify-between gap-4 select-none">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="font-mono text-[9px] uppercase tracking-widest bg-ink text-[#CAFF00] font-bold px-2 py-0.5 border border-ink flex items-center gap-1.5 flex-shrink-0">
              {isVideo ? <VideoIcon /> : <DocumentIcon />}
              <span>{isVideo ? 'Video Demo' : 'Document'}</span>
            </span>

            <h3 className="font-mono text-xs sm:text-sm font-bold text-ink truncate leading-tight">
              {title}
            </h3>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0 font-mono text-xs">
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ink px-3 py-1.5 text-[10px] sm:text-xs font-bold border-2 border-ink flex items-center gap-1.5"
                title="Open in new tab / Google Drive"
              >
                <span>Open in Drive</span>
                <ExternalLinkIcon />
              </a>
            )}

            <button
              onClick={onClose}
              className="border-2 border-ink bg-[#FAF7F2] hover:bg-ink hover:text-[#CAFF00] px-2.5 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors flex items-center gap-1"
              title="Close viewer (ESC)"
            >
              <span>ESC</span>
              <CloseIcon />
            </button>
          </div>
        </div>

        {/* ── VIEWER CANVAS ─────────────────────────────────────────── */}
        <div className="flex-1 relative bg-black/95 flex items-center justify-center overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#FAF7F2] z-10 font-mono text-xs text-[#666]">
              <div className="pulse-dot h-3 w-3 mb-2" style={{ background: '#E84B2A' }} />
              <span>Loading preview securely...</span>
            </div>
          )}

          <iframe
            src={embedUrl}
            title={title}
            className={`w-full border-0 ${
              isVideo ? 'aspect-video min-h-[380px] sm:min-h-[480px]' : 'h-full min-h-[500px]'
            }`}
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
            onLoad={() => setIsLoading(false)}
          />
        </div>

        {/* ── FOOTER BAR ───────────────────────────────────────────── */}
        <div className="px-5 py-2.5 bg-[#EDEAE0] border-t-2 border-ink flex items-center justify-between font-mono text-[10px] text-[#777] select-none">
          <span>Google Drive Cloud Preview</span>
          <button
            onClick={onClose}
            className="hover:text-ink hover:underline uppercase tracking-wider"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
}
