/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ejs}",
  "./public/**/*.html",
],
  theme: {
    extend: {
      colors: {
        "bookmark-purple": "#5267DF",
        "bookmark-red": "#FA5959",
        "bookmark-blue": "#242A45",
        "bookmark-grey": "#9194A2",
        "bookmark-white": "#f7f7f7",
        "custom-purple": "#E9D5FF",
      },
      linearGradientColors: {
        "custom-gradient": ["#000000", "#656565"]
      },
      backgroundImage: theme => ({
        "custom-gradient": "linear-gradient(to bottom right, #000000, #656565"
      }),
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"]
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      }
    },
  },
  plugins: [require("daisyui")],
}