/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,}"],
  darkMode: "class",
  theme: {
    fontSize: {
      sm: "0.5rem",
      base: "0.8rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    fontFamily: {},
    screens: {
      sm: { min: "640px", max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1280px", max: "1535px" },
      "2xl": { min: "1536px" },
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "serif"],
      },
      margin: {
        1: "14px",
        2: "16px",
        3: "18px",
        4: "20px",
      },
      colors: {
        vscBlue: "#0B64C1",
      },
    },
  },
  plugins: [],
}
