/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ejs}",
  "./public/**/*.html",
],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Coffee, sans-serif"]
      },
      width: {
        '127': '34rem',
      },
      colors: {
        "bookmark-purple": "#5267DF",
        "bookmark-red": "#FA5959",
        "bookmark-blue": "#242A45",
        "bookmark-grey": "#9194A2",
        "bookmark-white": "#f7f7f7",
        "custom-purple": "#E9D5FF",
        "gradient-red-dark": "#450a0a",
        "gradient-red-light": "#b91c1c",
      },
      linearGradientColors: {
        "custom-gradient": ["#000000", "#656565"]
      },
      backgroundImage: theme => ({
        "custom-gradient": "linear-gradient(to bottom right, #000000, #656565"
      }),
    },
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "640px",
      md: "769px",
      lg: "1124px",
      xl: "1124px",
      "2xl": "1124px",
    },
  },
  plugins: [require("daisyui")],
}