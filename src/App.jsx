// Layout components
import Navbar    from './components/layout/Navbar.jsx'
import BottomNav from './components/layout/BottomNav.jsx'
import Footer    from './components/layout/Footer.jsx'

// Page sections
import Hero     from './components/sections/Hero.jsx'
import Projects from './components/sections/Projects.jsx'
import About    from './components/sections/About.jsx'
import Contact  from './components/sections/Contact.jsx'

/**
 * App
 * ─────────────────────────────────────────────────────────────
 * Root component. Assembles the full single-page portfolio.
 *
 * Structure:
 *   <Navbar>        — fixed top bar (desktop + tablet)
 *   <main>
 *     <Hero>        — landing / intro section
 *     <Projects>    — filterable project grid
 *     <About>       — bio + stats
 *     <Contact>     — CTA links (email, GitHub, LinkedIn)
 *   </main>
 *   <Footer>        — name, socials, copyright
 *   <BottomNav>     — fixed bottom nav (mobile only, hidden on md+)
 */
export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

      <Footer />
      <BottomNav />
    </>
  )
}
