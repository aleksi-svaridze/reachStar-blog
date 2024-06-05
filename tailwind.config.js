/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': {
          100: '#f9fcff',
          200: '#5A7184',
          500: "#183B56",
          600: '#1565D8'
        },
        'blue-light': '#1565D8',
        'blue-dark': '#0D2436',
        'gray': {
          300: '#959EAD'
        }
      }
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      opensans: ["Open Sans", "sans-serif"],
      raleway: ["Raleway", "sans-serif"]
    },
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  darkMode: 'selector',
}