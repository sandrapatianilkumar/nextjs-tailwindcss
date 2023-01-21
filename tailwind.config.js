/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./pages/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        vuejs:{
          100:"#49e695",
          932:"#000000"
        }
      },
    },
  },
  plugins: [],
}
