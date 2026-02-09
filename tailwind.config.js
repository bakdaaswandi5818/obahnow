/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003366', // Deep blue
          50: '#e6f0ff',
          100: '#cce0ff',
          200: '#99c2ff',
          300: '#66a3ff',
          400: '#3385ff',
          500: '#0066cc',
          600: '#004c99',
          700: '#003366',
          800: '#002244',
          900: '#001122',
        },
        secondary: {
          DEFAULT: '#FF6600', // Orange
          50: '#fff5e6',
          100: '#ffeacc',
          200: '#ffd699',
          300: '#ffc266',
          400: '#ffad33',
          500: '#ff9900',
          600: '#ff6600',
          700: '#cc5200',
          800: '#993d00',
          900: '#662900',
        },
      },
    },
  },
  plugins: [],
}
