/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bb-blue': '#0080FF',
        'bb-dark-blue': '#005FBC',
        'bb-light-blue': '',
        'bb-gray': '#BBBBBB',
        'bb-dark-gray': '#AAAAAA',
        'bb-light-gray': '#CCCCCC',
        'bb-black': '#121212',
        'bb-chrome': '#EEEEEE',
        'bb-white': '',
      },
      fontSize: {
        'bb-xxs': '0.625rem',
        'bb-md': '0.938rem',
      },
      padding: {
        '3.7': '0.938rem'
      },
      boxShadow: {
        'mg': '0px 2px 5px 0px #0000000D'
      },
      lineHeight: {
        '4.2': '1.099'
      },
      margin: {
        '0.5': '0.063rem'
      }
    },
  },
}

