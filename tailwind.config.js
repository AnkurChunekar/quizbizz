/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Sora", "sans-serif"],
      },
      colors: {
        "japanese-indigo": "#243B55",
        "dark-gunmetal": "#141E30",
        "dark-bg": "#0E131F",
        primary: "#0066FF",
        "oxford-blue": "#002b46",
        "blue-pigment": "#363795",
      },
    },
  },
  plugins: [],
};
