/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0A0A0A',
          darkGray: '#121212',
          cardGray: 'rgba(22, 22, 22, 0.7)',
          accentBlue: '#007FFF',
          accentLightBlue: '#3399FF',
          textMuted: '#8E8E93'
        }
      },
      fontFamily: {
        sans: ['SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      backdropBlur: {
        premium: '20px'
      }
    },
  },
  plugins: [],
}