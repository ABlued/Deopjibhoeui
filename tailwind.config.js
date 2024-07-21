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
      }
    },
    extend: {}
  },
  plugins: [require('flowbite/plugin')]
};
