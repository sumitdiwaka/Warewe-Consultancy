/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      colors: {
        gold: { DEFAULT: '#D4AF37', mid: '#EADFB0', light: '#F7F0D6', link: '#E5D28A' },
        page: '#F5F6F8',
        ink: '#1A1A1A',
        muted: '#8A8F98',
      },
      boxShadow: { card: '0 1px 6px rgba(20,20,40,0.06)' },
    },
  },
  plugins: [],
};
