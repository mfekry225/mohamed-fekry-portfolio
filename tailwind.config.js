/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#4A7FD4', dim: '#2E5FB8', deep: '#1E3A8A' },
      },
      fontFamily: {
        sans: ['Tajawal', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      animation: {
        shimmer: 'shimmer 3s infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-20px)' } },
      },
    },
  },
  plugins: [],
};
