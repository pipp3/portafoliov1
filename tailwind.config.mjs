/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0891b2',
        secondary: '#164e63',
        textH2: '#3b82f6',
        textSpan: '#0284c7',
        dark: {
          bg: '#121212',
          card: '#1e1e1e',
          text: '#e5e5e5',
          muted: '#a0a0a0',
          border: '#333333'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}