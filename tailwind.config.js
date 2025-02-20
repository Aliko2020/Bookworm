/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#f1f1f1", 
        "custom-yellow": "#FFBF00"
      },
    },
  },
  plugins: [],
}
