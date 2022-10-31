/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'headlineBorder': "url('headline-border.png')",
        'highlight': 'linear-gradient( to top, rgba(253, 206, 39, 0.85) 50%, transparent 50% )'
      },
      colors: {
        'purple': "#101FA3",
        'agenda-background': '#F2CED0',
      }
    },
  },
  plugins: [],
}
