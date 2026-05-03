import { useState, useMemo } from 'react'
import projects from '../../data/projects.js'
import ProjectCard from '../ui/ProjectCard.jsx'

/**
 * Projects
 * ─────────────────────────────────────────────────────────────
 * Displays all projects from projects.js with two filter rows:
 *
 *   Row 1 — Category filters: All / Web / Mobile / AI / Desktop
 *   Row 2 — Tech tag filters: All / React / Node.js / Python / AI/ML / Electron
 *
 * Both filters work together — selecting a category AND a tag
 * shows only projects that match BOTH conditions.
 *
 * To add more category or tech options, update the constants below
 * and add the matching values in your projects.js data.
 */

// Top-level category filters — matches the `category` field in projects.js
const CATEGORIES = ['All', 'Web', 'Mobile', 'AI', 'Desktop']

// Tech tag filters — matches values in the `tech` array in projects.js
const TECH_TAGS = ['All', 'React', 'Node.js', 'Python', 'AI/ML', 'Electron']

export default function Projects() {
  // Which category button is active (default: show all)
  const [activeCategory, setActiveCategory] = useState('All')

  // Which tech tag button is active (default: show all)
  const [activeTech, setActiveTech] = useState('All')

  /**
   * filteredProjects
   * Recalculates whenever the active filters change.
   * useMemo prevents unnecessary re-renders.
   */
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Check category match (skip check if "All" is selected)
      const categoryMatch =
        activeCategory === 'All' || project.category === activeCategory

      // Check tech tag match (skip check if "All" is selected)
      const techMatch =
        activeTech === 'All' || project.tech.includes(activeTech)

      return categoryMatch && techMatch
    })
  }, [activeCategory, activeTech])

  return (
    <section id="projects" className="py-20 px-6 bg-surface-container-lowest">
      <div className="max-w-container mx-auto">

        {/* ── Section Header ──────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <h2 className="text-h2 text-on-surface mb-4">Featured Projects</h2>
            <p className="text-on-surface-variant max-w-xl">
              A selection of my most impactful work, from AI tools to desktop apps.
            </p>
          </div>
        </div>

        {/* ── Filter Row 1: Categories ─────────────────────────── */}
        <div className="mb-3">
          <p className="text-label-sm text-on-surface-variant mb-2 uppercase tracking-widest">
            Category
          </p>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-primary text-on-primary'           // active style
                    : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high' // inactive
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── Filter Row 2: Tech Tags ──────────────────────────── */}
        <div className="mb-12">
          <p className="text-label-sm text-on-surface-variant mb-2 uppercase tracking-widest">
            Tech
          </p>
          <div className="flex flex-wrap gap-2">
            {TECH_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTech(tag)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTech === tag
                    ? 'bg-secondary text-on-secondary'        // active style (purple for tech)
                    : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* ── Project Grid ─────────────────────────────────────── */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          /* Empty state — shown when no projects match the filters */
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <span className="material-symbols-outlined text-[48px] text-outline mb-4">
              search_off
            </span>
            <p className="text-on-surface-variant text-body-md">
              No projects match the selected filters.
            </p>
            <button
              onClick={() => { setActiveCategory('All'); setActiveTech('All') }}
              className="mt-4 text-primary text-sm font-medium hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
