/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['"Playfair Display Variable"', 'serif'],
        'lato': ['Lato', 'sans-serif']
      },
      colors: {
        'primary': '#2C3E50',
        'secondary': '#34495E',
        'accent': '#D5B495'
      }
    }
  },
  plugins: []
}