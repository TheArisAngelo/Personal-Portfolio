/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // <--- THIS IS THE KEY
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "neo-bg": "#FDF6E3", // Warm cream (Light mode)
        "neo-bg-dark": "#1F1B16", // Warm charcoal (Dark mode)
        "neo-white-dark": "#2A2620", // Slightly warmer card background for dark mode
        "neo-yellow": "#FFD700",
        "neo-red": "#FF4B4B",
        "neo-blue": "#2563EB",
        "neo-green": "#00E599",
      },
      boxShadow: {
        neo: "6px 6px 0px 0px #000000",
        "neo-sm": "4px 4px 0px 0px #000000",
        "neo-lg": "10px 10px 0px 0px #000000",
        "neo-dark": "6px 6px 0px 0px #FFFFFF", // White shadows for dark mode
        "neo-sm-dark": "4px 4px 0px 0px #FFFFFF",
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
