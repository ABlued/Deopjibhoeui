/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],

  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      mobile: { max: '360px' },
      tablet: { max: '600px' },
      notTablet: { min: '600px' },
      laptop: '1200px',
      desktop: '1536px'
    },
    colors: {
      primary: {
        dark: '#1F4EF5',
        main: '#4880EE',
        light: '#83B4F9',
        lighter: '#ECF3FE',
        gray: '#C2D0E5'
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
      },
      table: {
        column: '#F1F6F7'
      }
    },
    extend: {}
  },
  plugins: [require('flowbite/plugin')]
};
