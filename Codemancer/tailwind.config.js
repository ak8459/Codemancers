/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'kalam': ['Kalam', 'sans-serif'],
      'creta': ['Crete Round', 'serif'],
      'protest': ['Protest Revolution', 'serif'],
      'madi': ['Madimi One', 'serif'],
      'mitr': ['Mitr', 'sans-serif'],
      'roboto': ['Roboto Slab', 'serif'],
    }
  },
  plugins: [],
}