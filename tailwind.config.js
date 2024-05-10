/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./js/**/*.{html,js}",
    "./{html,js}",
    "./index.html",
  ],
  theme: {
    extend: {
      height: {
        'cstmh': 'calc(100vh - 4rem)',
      }
    },
  },
  plugins: [],
}

