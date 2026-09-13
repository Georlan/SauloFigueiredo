/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        editorial: '-0.045em',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,.05), 0 28px 80px rgba(255,255,255,.06)',
      },
    },
  },
  plugins: [],
}
