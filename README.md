# Tushar Aradwad — Portfolio

Personal developer portfolio built with **Vite + React + Tailwind CSS**.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open in browser
# → http://localhost:5173
```

---

## Folder Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── images/
│       └── projects/          ← Drop your project screenshots here
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx     ← Top navigation bar
│   │   │   ├── BottomNav.jsx  ← Mobile-only bottom nav
│   │   │   └── Footer.jsx     ← Footer with socials
│   │   ├── sections/
│   │   │   ├── Hero.jsx       ← Landing / intro
│   │   │   ├── Projects.jsx   ← Filterable project grid
│   │   │   ├── About.jsx      ← Bio + stats
│   │   │   └── Contact.jsx    ← Email / GitHub / LinkedIn CTAs
│   │   └── ui/
│   │       └── ProjectCard.jsx ← Reusable project card component
│   ├── data/
│   │   └── projects.js        ← ⭐ Edit this to add/update projects
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## Adding a New Project

Open `src/data/projects.js` and add a new object to the array:

```js
{
  id: 5,                              // increment from the last id
  title: "My New Project",
  description: "What it does.",
  category: "Web",                    // "Web" | "Mobile" | "AI" | "Desktop"
  tech: ["React", "Node.js"],         // used for tag filtering
  github: "https://github.com/...",   // or null
  liveUrl: "https://...",             // or null
  image: "/images/projects/my-project.png",
  featured: false,                    // only one project should be true
}
```

Then drop the screenshot into `public/images/projects/`.

---

## Personalising

| What to update | Where |
|---|---|
| Your name / title | `index.html` `<title>` + `Navbar.jsx` |
| Hero headline / bio | `Hero.jsx` |
| Quote + bio paragraphs | `About.jsx` |
| Stats (apps / years) | `About.jsx` |
| Email address | `Contact.jsx` href="mailto:..." |
| GitHub / LinkedIn URLs | `Contact.jsx` + `Footer.jsx` |
| Hero image | `public/images/hero-placeholder.png` |
| Project images | `public/images/projects/*.png` |

---

## Build for Production

```bash
npm run build
# Output goes to /dist — deploy this folder anywhere (Vercel, Netlify, GitHub Pages)
```
