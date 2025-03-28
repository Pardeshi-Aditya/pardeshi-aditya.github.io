/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Inter', 'sans-serif'],
        'secondary': ['Clash Display', 'sans-serif'],
        'code': ['JetBrains Mono', 'monospace']
      },
      colors: {
        'dark': {
          DEFAULT: '#082032',
          light: '#334756'
        },
        'accent': {
          DEFAULT: '#56baec',
          dark: '#4fa5d3'
        }
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite'
      }
    },
  },
  plugins: [],
}