/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    colors: {
      primary: {
        dark: '#1F4EF5',
        main: '#4880EE',
        light: '#83B4F9',
        lighter: '#ECF3FE'
      },
      border: {
        gray: '#D9D9D9',
        gray2: '#CDCDCD'
      },
      error: {
        main: '#FF1A43'
      },
      column: {
        main: '#F1F6F7'
      },
      text: {
        main: '#1A1E27',
        light: '#505866',
        lighter: '#B1B8C0'
      }
    },
    extend: {}
  },
  plugins: [require('flowbite/plugin')]
};
