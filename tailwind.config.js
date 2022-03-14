const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './ui/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: '400px',
      },
      colors: {
        light: colors.slate[50],
        dark: colors.slate[900],
        primary: colors.cyan,
        success: colors.emerald,
        error: colors.rose,
      },
      fontFamily: {
        lato: ['Lato', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(var(--gradient-color-stops-1)), radial-gradient(var(--gradient-color-stops-2)), radial-gradient(var(--gradient-color-stops-3))',
      },
      zIndex: {
        '-1': '-1',
        '-10': '-10',
        '-100': '-100',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};
