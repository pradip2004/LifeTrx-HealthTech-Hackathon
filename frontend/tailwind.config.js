/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(-76deg, rgba(255, 98, 109, 0.6), rgba(255, 161, 166, 0.6))',
      },
    },
  },
  plugins: [],
}