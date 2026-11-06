/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        night: { 950: '#04070f', 900: '#060a18', 800: '#0b1226', 700: '#111a33' },
        brand: { 400: '#4d8dff', 500: '#1e6bff', 600: '#1553d6' },
        ice: { 300: '#9ce7ff', 400: '#5fd4ff' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'sans-serif'],
      },
      keyframes: {
        drift: {
          '0%': { transform: 'translateY(-10vh) rotate(0deg)', opacity: 0 },
          '10%': { opacity: 0.8 },
          '100%': { transform: 'translateY(110vh) rotate(360deg)', opacity: 0 },
        },
        airflow: {
          '0%': { transform: 'translateY(0) scaleY(0.6)', opacity: 0 },
          '30%': { opacity: 0.9 },
          '100%': { transform: 'translateY(90px) scaleY(1)', opacity: 0 },
        },
        ring: {
          '0%': { transform: 'scale(1)', opacity: 0.6 },
          '100%': { transform: 'scale(1.8)', opacity: 0 },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        drift: 'drift linear infinite',
        airflow: 'airflow 2.4s ease-out infinite',
        ring: 'ring 2s ease-out infinite',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
}
