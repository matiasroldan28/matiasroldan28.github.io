/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./html/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      aveny: ['Aveny'],
      druk: ["Druk"]
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}


