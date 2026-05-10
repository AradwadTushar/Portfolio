import { useState, useMemo } from 'react'
import projects from '../../data/projects.js'
import ProjectCard from '../ui/ProjectCard.jsx'

/**
 * Projects
 * ─────────────────────────────────────────────────────────────
 * Brutalist grid with two filter rows (Category + Tech).
 * Both filters work together — AND logic.
 * Keeps the same data contract as the original projects.js.
 */

const CATEGORIES = ['All', 'Web', 'Mobile', 'AI', 'Desktop']
const TECH_TAGS   = ['All', 'React', 'Node.js', 'Python', 'AI/ML', 'Electron']

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeTech,     setActiveTech]     = useState('All')

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const catMatch  = activeCategory === 'All' || p.category === activeCategory
      const techMatch = activeTech     === 'All' || p.tech.includes(activeTech)
      return catMatch && techMatch
    })
  }, [activeCategory, activeTech])

  return (
    <section id="projects" className="border-brutal-b" style={{ background: '#F5F0E8' }}>

      {/* Section header */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between px-8 pt-16 pb-8 border-brutal-b gap-4">
        <h2 className="font-display font-extrabold text-display-lg text-ink">
          Selected work.
        </h2>
        <span className="font-mono text-label uppercase tracking-widest text-[#888]">
          {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Filters */}
      <div className="px-8 py-6 border-brutal-b flex flex-col gap-4">
        {/* Category */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-label uppercase tracking-widest text-[#888] mr-2 w-16">
            Category
          </span>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-label uppercase tracking-widest text-[#888] mr-2 w-16">
            Tech
          </span>
          {TECH_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTech(tag)}
              className={`filter-btn ${activeTech === tag ? 'active-secondary' : ''}`}
            >
              {tag}
            </button>
          ))}
          {(activeCategory !== 'All' || activeTech !== 'All') && (
            <button
              onClick={() => { setActiveCategory('All'); setActiveTech('All') }}
              className="font-mono text-label uppercase tracking-widest text-rust underline underline-offset-4 ml-2 bg-transparent border-none cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-center px-8">
          <p className="font-display font-bold text-display-md text-[#ccc] mb-4">∅</p>
          <p className="font-mono text-body-sm text-[#888]">No projects match the filters.</p>
          <button
            onClick={() => { setActiveCategory('All'); setActiveTech('All') }}
            className="btn-ghost mt-6 text-[0.65rem]"
          >
            Clear filters
          </button>
        </div>
      )}
    </section>
  )
}
