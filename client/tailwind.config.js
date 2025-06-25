/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  extend: {
    fontFamily: {
      retro: ['"Luckiest Guy"', 'cursive'],
    },
    colors: {
      retroOrange: '#F97432',
      retroTeal: '#8DD3C7',
      retroCream: '#FFF4E0',
    },
  },
},
  plugins: [],
}
