/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // --- Stitch Design System Colors (from DESIGN.md) ---
        "primary":                    "#00685f",
        "on-primary":                 "#ffffff",
        "primary-container":          "#008378",
        "on-primary-container":       "#f4fffc",
        "primary-fixed":              "#89f5e7",
        "primary-fixed-dim":          "#6bd8cb",
        "on-primary-fixed":           "#00201d",
        "on-primary-fixed-variant":   "#005049",
        "inverse-primary":            "#6bd8cb",

        "secondary":                  "#712ae2",
        "on-secondary":               "#ffffff",
        "secondary-container":        "#8a4cfc",
        "on-secondary-container":     "#fffbff",
        "secondary-fixed":            "#eaddff",
        "secondary-fixed-dim":        "#d2bbff",
        "on-secondary-fixed":         "#25005a",
        "on-secondary-fixed-variant": "#5a00c6",

        "tertiary":                   "#0051d5",
        "on-tertiary":                "#ffffff",
        "tertiary-container":         "#316bf3",
        "on-tertiary-container":      "#fefcff",
        "tertiary-fixed":             "#dbe1ff",
        "tertiary-fixed-dim":         "#b4c5ff",
        "on-tertiary-fixed":          "#00174b",
        "on-tertiary-fixed-variant":  "#003ea8",

        "surface":                    "#f7f9fb",
        "surface-dim":                "#d8dadc",
        "surface-bright":             "#f7f9fb",
        "surface-container-lowest":   "#ffffff",
        "surface-container-low":      "#f2f4f6",
        "surface-container":          "#eceef0",
        "surface-container-high":     "#e6e8ea",
        "surface-container-highest":  "#e0e3e5",
        "surface-variant":            "#e0e3e5",
        "surface-tint":               "#006a61",
        "on-surface":                 "#191c1e",
        "on-surface-variant":         "#3d4947",
        "inverse-surface":            "#2d3133",
        "inverse-on-surface":         "#eff1f3",

        "outline":                    "#6d7a77",
        "outline-variant":            "#bcc9c6",

        "background":                 "#f7f9fb",
        "on-background":              "#191c1e",

        "error":                      "#ba1a1a",
        "on-error":                   "#ffffff",
        "error-container":            "#ffdad6",
        "on-error-container":         "#93000a",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        "h1":       ["48px", { lineHeight: "1.1",  letterSpacing: "-0.02em", fontWeight: "700" }],
        "h2":       ["30px", { lineHeight: "1.2",  letterSpacing: "-0.01em", fontWeight: "600" }],
        "h3":       ["24px", { lineHeight: "1.3",  fontWeight: "600" }],
        "body-lg":  ["18px", { lineHeight: "1.6",  fontWeight: "400" }],
        "body-md":  ["16px", { lineHeight: "1.6",  fontWeight: "400" }],
        "label-sm": ["14px", { lineHeight: "1.0",  letterSpacing: "0.01em", fontWeight: "500" }],
        "mono":     ["14px", { lineHeight: "1.5",  fontWeight: "400" }],
      },
      borderRadius: {
        "sm":      "0.25rem",
        "DEFAULT": "0.5rem",
        "md":      "0.75rem",
        "lg":      "1rem",
        "xl":      "1.5rem",
        "full":    "9999px",
      },
      maxWidth: {
        "container": "1200px",
      },
    },
  },
  plugins: [],
}
