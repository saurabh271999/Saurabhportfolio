/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
     screens: {
      'max700': {'max': '700px'},  // custom max-width breakpoint
      // existing breakpoints
      'sm': '640px',
      'md': '768px',
      // etc...
    },
  },
  plugins: [],
}
