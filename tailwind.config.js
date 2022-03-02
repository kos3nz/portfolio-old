const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: '400px',
      },
      colors: {
        primary: colors.indigo,
        light: colors.slate[100],
        dark: colors.slate[900],
      },
      fontFamily: {
        lato: ['Lato', ...defaultTheme.fontFamily.sans],
      },
      zIndex: {
        '-1': '-1',
        '-10': '-10',
        '-100': '-100',
      },
    },
  },
  variants: {},
  plugins: [],
};
