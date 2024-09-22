/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      primaryColor: {
        "primary": '#7B68EE',
      }
    },
  },
  plugins: [],
}