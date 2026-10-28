import { useState, useEffect } from 'react'

// Layout components
import Navbar    from './components/layout/Navbar.jsx'
import BottomNav from './components/layout/BottomNav.jsx'
import Footer    from './components/layout/Footer.jsx'

// Page sections
import Hero     from './components/sections/Hero.jsx'
import Projects from './components/sections/Projects.jsx'
import About    from './components/sections/About.jsx'
import Contact  from './components/sections/Contact.jsx'

// Modals
import MediaViewerModal from './components/ui/MediaViewerModal.jsx'

/**
 * App
 * ─────────────────────────────────────────────────────────────
 * Root component.
 * 100% Edge-to-edge fluid brutalist layout across all screen sizes.
 * Integrates global MediaViewerModal for inline videos, case studies,
 * research papers, and resumes.
 */
export default function App() {
  const [activeMedia, setActiveMedia] = useState(null)

  useEffect(() => {
    const handleOpenMedia = (e) => {
      if (e.detail && e.detail.url) {
        setActiveMedia(e.detail)
      }
    }

    window.addEventListener('open-media', handleOpenMedia)
    return () => window.removeEventListener('open-media', handleOpenMedia)
  }, [])

  return (
    <div className="w-full min-h-screen bg-cream text-ink antialiased overflow-x-hidden">
      <Navbar />

      <main className="w-full">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

      <Footer />
      <BottomNav />

      {/* Global Inline Media Viewer (Videos & PDFs) */}
      <MediaViewerModal
        media={activeMedia}
        onClose={() => setActiveMedia(null)}
      />
    </div>
  )
}
