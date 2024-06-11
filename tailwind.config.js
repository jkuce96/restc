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
        '127': '38rem',
        '137': '48rem',
      },
      colors: {
        "bookmark-purple": "#5267DF",
        "bookmark-red": "#FA5959",
        "bookmark-blue": "#242A45",
        "bookmark-grey": "#9194A2",
        "bookmark-white": "#f7f7f7",
        "custom-purple": "#E9D5FF",
        "gradient-red-dark": "#585858",
        "gradient-red-light": "#95918F",
        "background": "#F0E9D9",
      },
      linearGradientColors: {
        "custom-gradient": ["#000000", "#656565"]
      },
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