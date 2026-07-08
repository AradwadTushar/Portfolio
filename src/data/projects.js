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
    category: ["AI", "Web"],
    tech: ["React", "AI/ML", "OCR", "JavaScript", "Python"],
    github: "https://github.com/AradwadTushar/NutriLens---An-Ingredient-Scanner-",
    liveUrl: "https://drive.google.com/file/d/1nmPrRFSIGwnWIaKynPd3_0XXLAPOZJ8t/view?usp=drive_link",
    image: "/images/projects/nutrilens.jpg",
    featured: true,
    caseStudyUrl: "https://drive.google.com/file/d/1ySgw6A2Jm1yFiffbgImRvOrUp0wekvWw/view?usp=sharing",
    paperStatus: "drafting",
    paperUrl: "https://drive.google.com/file/d/1ySgw6A2Jm1yFiffbgImRvOrUp0wekvWw/view?usp=drive_link",
  },
  {
    id: 2,
    title: "Salon Management App",
    description:
      "Desktop application for managing salon billing, services, and customer communication through an integrated dashboard.",
    category: ["Desktop"],
    tech: ["Electron", "JavaScript", "Node.js"],
    github: "https://github.com/AradwadTushar/Salon-Management-App",
    liveUrl: null,
    image: "/images/projects/salon-app.jpg",
    featured: false,
  },
  {
    id: 3,
    title: "ResumeIQ AI",
    description:
      "AI-powered resume builder, ATS optimization & analytics engine featuring a live document editor, Jinja2/WeasyPrint rendering, and local PDF parsing.",
    category: ["AI", "Web"],
    tech: ["React", "Python", "AI/ML", "FastAPI", "PostgreSQL", "Clerk"],
    github: "https://github.com/AradwadTushar/AI-Based-Resume-Builder-and-Analyzer",
    liveUrl: "https://resumeiq-ai.pages.dev/",
    image: "/images/projects/resumeiq.jpg",
    featured: false,
    caseStudyUrl: "https://drive.google.com/file/d/1ORS7VJDtdXRafkX6lI7_H2FNfiJEXQ0x/view?usp=drive_link",
  },
  {
    id: 4,
    title: "E-Commerce Storefront",
    description:
      "A clean, modern e-commerce storefront with product filtering, dynamic cart management, and interactive checkout systems.",
    category: ["Web"],
    tech: ["React", "Node.js", "JavaScript"],
    github: "https://github.com/AradwadTushar/E-commerse",
    liveUrl: null,
    image: "/images/projects/ecommerce.jpg",
    featured: false,
  },
  {
    id: 5,
    title: "StudyTracker",
    description:
      "Offline-first React Native (Expo) study management app for competitive exams featuring syllabus parsing, state-aware AI study companion (Pip), and local quizzes.",
    category: ["Mobile", "AI"],
    tech: ["React Native", "Expo", "Zustand", "AsyncStorage", "KaTeX"],
    github: "https://github.com/AradwadTushar/StudyTracker",
    liveUrl: "https://drive.google.com/file/d/13je_EfqXosmHbDmci_me22YbBX5cHMBO/view?usp=drivesdk",
    image: "/images/projects/studytracker.jpg",
    featured: false,
    caseStudyUrl: "https://drive.google.com/file/d/1in--yRFxUlP-XP8OUxcN-6-QzA-OpHrz/view?usp=drive_link",
  },
  {
    id: 6,
    title: "WhatsApp CRM dashboard",
    description:
      "Service and finance tracking dashboard driven directly by incoming WhatsApp messages and conversational prompts.",
    category: ["Web", "AI"],
    tech: ["React", "Node.js", "WebSockets", "WhatsApp API"],
    github: "https://github.com/AradwadTushar",
    liveUrl: null,
    image: "/images/projects/whatsapp-crm.jpg",
    featured: false,
  },
]

export default projects
