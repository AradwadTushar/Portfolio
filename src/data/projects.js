/**
 * projects.js
 * ─────────────────────────────────────────────────────────────
 * This is the single source of truth for all your projects.
 * To add a new project, just copy one of the objects below
 * and fill in your details. The site will update automatically.
 *
 * Fields:
 *   id          - unique number (keep incrementing)
 *   title       - project name shown on the card
 *   description - 1-2 sentence summary
 *   category    - one of: "Web" | "Mobile" | "AI" | "Desktop"
 *   tech        - array of tech tags (used for tag filtering)
 *                 use: "React" | "Node.js" | "Python" | "AI/ML" | "Electron"
 *                 (and any extra tags like "OCR", "SQLite" — those show on
 *                  the card but won't appear as top-level filter buttons)
 *   github      - your GitHub repo URL (or null if private)
 *   liveUrl     - live demo URL (or null if none)
 *   image       - path to image in /public/images/projects/
 *                 e.g. "/images/projects/nutrilens.png"
 *                 (replace with your actual screenshot filename)
 *   featured      - true = this card spans 2 columns and is visually larger
 *                   (only set ONE project as featured at a time)
 *   caseStudyUrl  - Google Drive (or any) link to your case study PDF
 *                   (or null if none) — renders a "Read Case Study" banner
 *   paperStatus   - one of: "drafting" | "submitted" | "published" | null
 *                   "drafting"   → shows a "Research Paper — Coming Soon" badge
 *                   "submitted"  → shows "Research Paper — Under Review"
 *                   "published"  → shows "Research Paper — Published" (add paperUrl too)
 *   paperUrl      - link to the published paper (only used when paperStatus = "published")
 */

const projects = [
  {
    id: 1,
    title: "NutriLens",
    description:
      "AI-powered food label analyzer that extracts and summarizes product ingredients using OCR and LLMs for better dietary insights.",
    category: "AI",
    tech: ["React", "AI/ML", "OCR", "JavaScript", "Python"],
    github: "https://github.com/AradwadTushar/NutriLens---An-Ingredient-Scanner-", // ← replace with real URL
    liveUrl: "https://drive.google.com/file/d/1nmPrRFSIGwnWIaKynPd3_0XXLAPOZJ8t/view?usp=drive_link",
    image: "/images/projects/nutrilens.png",     // ← add your screenshot here
    featured: true,
    caseStudyUrl: "https://drive.google.com/...", // ← replace with your real Google Drive link
    paperStatus: "drafting",                      // "drafting" | "submitted" | "published" | null
    paperUrl: "https://drive.google.com/file/d/1ySgw6A2Jm1yFiffbgImRvOrUp0wekvWw/view?usp=drive_link",                               // only needed when paperStatus = "published"
  },
  {
    id: 2,
    title: "Salon Management App",
    description:
      "Desktop application for managing salon billing, services, and customer communication through an integrated dashboard.",
    category: "Desktop",
    tech: ["Electron", "JavaScript", "Node.js"],
   github: "https://github.com/AradwadTushar/Salon-Management-App", // ← replace with real URL
    liveUrl: null,
    image: "/images/projects/salon-app.png",     // ← add your screenshot here
    featured: false,
  },
  {
    id: 3,
    title: "Project Title",                       // ← replace with your project name
    description:
      "Short description of what this project does and the problem it solves.", // ← replace
    category: "Web",                              // ← "Web" | "Mobile" | "AI" | "Desktop"
    tech: ["React", "Node.js"],                   // ← your tech stack
    github: null,                                 // ← add URL or keep null
    liveUrl: null,
    image: "/images/projects/placeholder.png",   // ← add your screenshot
    featured: false,
  },
  {
    id: 4,
    title: "Project Title",                       // ← replace with your project name
    description:
      "Short description of what this project does and the problem it solves.", // ← replace
    category: "Web",                              // ← "Web" | "Mobile" | "AI" | "Desktop"
    tech: ["Python", "Node.js"],                  // ← your tech stack
    github: null,
    liveUrl: null,
    image: "/images/projects/placeholder.png",   // ← add your screenshot
    featured: false,
  },
]

export default projects
