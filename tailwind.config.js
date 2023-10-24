/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './context/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '320px',
      xm: '450px',
      xmm: '550px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    text: {
      small: '12px',
      medium: '14px',
      large: '16px',
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
      },
      colors: {
        primary: {
          50: '#FA7D8A',
          100: '#E95867',
          200: '#E7283C',
          300: '#E2081E',
          400: '#C21527',
          500: '#8C131F',
          600: '#671B23',
          700: '#4A1D22',
        },
        secondary: {
          50: '#F8F5F3',
          100: '#DAD6D3',
          200: '#C8C2BE',
          300: '#B5B0AD',
          400: '#9B928D',
          500: '#867D77',
          600: '#68605B',
          700: '#413C38',
        },
        system: {
          100: '#FFFEFE',
          200: '#FCFCFC',
          300: '#222222',
        },
        text: {
          black: '#333333',
          white: '#FEFEFE',
        },
        success: {
          100: '#8EFFA7',
          200: '#5DDD79',
          300: '#25BF47',
          400: '#009721',
        },
        warning: {
          100: '#FFEF98',
          200: '#FFE55B',
          300: '#FFD910',
          400: '#EBC500',
        },
        danger: {
          100: '#FF958E',
          200: '#FF574D',
          300: '#FF271A',
          400: '#CC0C00',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
});
