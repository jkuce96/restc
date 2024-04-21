/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customRed: "#8F1628"
      }
    },
  },
  plugins: [require("daisyui")],
}