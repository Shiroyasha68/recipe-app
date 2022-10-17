/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow-recipe': '#ffe32c',
        'red-recipe': '#e32219',
        'white-recipe': '#e9f1f7',
      }
    },
  },
  plugins: [],
}
