/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    // "./pages/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '480px',
        'md': '768px',
        'lg': '976px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      spacing:{
        '1':'2px',
        '2':'16px',
        '3':'24px',
        '4':'32px',
        '5':'48px'
      },
      colors:{
        vuejs:{
          100:"#49e695",
          932:"#000000"
        }
      },
      fontSize:{
        sm:'12px',
        xl:'15px',
        base:'18px'
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities, addComponents, e, config }) {
      // Add your custom styles here
    }),
  ],
}
