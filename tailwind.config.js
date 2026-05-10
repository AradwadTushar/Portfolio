/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream:   "#F5F0E8",
        ink:     "#0D0D0D",
        acid:    "#CAFF00",
        rust:    "#E84B2A",
        muted:   "#888880",
        surface: "#EDEAE0",
      },
      fontFamily: {
        mono:    ["'Space Mono'", "monospace"],
        display: ["'Syne'", "sans-serif"],
        sans:    ["'Space Mono'", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem,8vw,6.5rem)", { lineHeight: "0.9",  letterSpacing: "-0.04em", fontWeight: "800" }],
        "display-lg": ["clamp(2rem,5vw,3.5rem)",   { lineHeight: "1.0",  letterSpacing: "-0.04em", fontWeight: "800" }],
        "display-md": ["clamp(1.4rem,3vw,2rem)",   { lineHeight: "1.1",  letterSpacing: "-0.03em", fontWeight: "800" }],
        "body-lg":    ["1rem",                      { lineHeight: "1.8",  fontWeight: "400" }],
        "body-sm":    ["0.82rem",                   { lineHeight: "1.7",  fontWeight: "400" }],
        "label":      ["0.68rem",                   { lineHeight: "1.0",  letterSpacing: "0.12em",  fontWeight: "400" }],
      },
      maxWidth: {
        container: "1200px",
      },
      borderWidth: {
        DEFAULT: "2px",
      },
    },
  },
  plugins: [],
}
