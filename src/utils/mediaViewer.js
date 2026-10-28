/**
 * mediaViewer.js
 * Global event helper to trigger the inline MediaViewerModal (Videos & PDFs)
 * from any component with zero prop-drilling.
 */

export const RESUME_URL = 'https://drive.google.com/file/d/1hgkOUbmzkg4vuQFFRZ3gwQbotDMDFtkJ/view?usp=drive_link';

export function openMedia({ title, url, type = 'pdf' }) {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('open-media', {
        detail: { title, url, type },
      })
    );
  }
}

export function openResume() {
  openMedia({
    title: 'Tushar Aradwad — Resume (PDF)',
    url: RESUME_URL,
    type: 'pdf',
  });
}
