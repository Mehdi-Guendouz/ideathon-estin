/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'headlineBorder': "url('./img/headline border.svg')",
        'highlight': 'linear-gradient( to top, rgba(253, 206, 39, 0.85) 60%, transparent 60% )'
      },
      colors: {
        'purple': "#101FA3",
        'agenda-background': '#F2CED0',
      }
    },
  },
  plugins: [],
}

