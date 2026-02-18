/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#5247e6",
        "primary-dark": "#4035b0",
        "primary-light": "#eef2ff",
        "background-light": "#f8fafc",
        "background-dark": "#0f172a",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"],
        "sans": ["Inter", "sans-serif"],
      },
      borderRadius: {
        "DEFAULT": "0.375rem",
        "md": "0.375rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "full": "9999px"
      },
      boxShadow: {
        "glow": "0 0 20px -5px rgba(82, 71, 230, 0.15)",
      }
    },
  },
  plugins: [],
}
