/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Inter', 'sans-serif'],
        'secondary': ['Inter', 'sans-serif'],
        'code': ['JetBrains Mono', 'monospace']
      },
      colors: {
        'dark': {
          DEFAULT: '#fff',
          light: '#374151'
        },
        'accent': {
          DEFAULT: '#1f2937',
          dark: '#111827'
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