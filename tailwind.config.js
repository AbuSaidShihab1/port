/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      fontFamily:{
        "sora":[ "Sora", "sans-serif"]
      },
      content:{
      "icon":'url("../src/assets/arrow.png")'
      },
      colors:{
        "subheading":"#2a1454",
        "maincolor":"#f41a4a",
        "color2":"#2400ff",
        "color3":"#9b8dff",
        "color4":"#4654f9",
        "color5":"#814cec",
        "reviewcolor":"rgba(0,0,0,0.5)",
        "graycolor":"rgba(0, 0, 0, 0.8)",
        "bordercolor":"rgba(0, 0, 0, .05)",
        "skillcolor":"rgba(0, 0, 0, 0.3)"
      }
    },
  },
  plugins: [],
}