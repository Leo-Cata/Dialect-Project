/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        atkinson: ['Atkinson Hyperlegible', 'sans-serif'],
      },
      colors: {
        mainYellow: '#FFFAA4',
        mainCyan: '#5CE4CA',
        mainSalmon: '#FF7D7D',
        mainFont: '#003D31',
        secondaryFont: '#596966',
        secondaryYellow: '#FFFAE9',
      },
    },
  },
  plugins: [],
};
