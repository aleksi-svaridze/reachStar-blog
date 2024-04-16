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
        },
        'blue-light': '#1565D8',
        'blue-dark': '#0D2436'
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      opensans: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
  darkMode: 'selector',
}