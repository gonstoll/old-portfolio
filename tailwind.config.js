/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const {fontFamily} = defaultTheme

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  plugins: [
    function ({addVariant}) {
      addVariant('peer-group-valid', '.peer:checked ~ .peer-group &')
    },
  ],
  theme: {
    extend: {
      colors: {
        white: 'var(--color-white)',
        black: 'var(--color-black)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      translate: {
        'toggle-checked': 'calc(100% - 2px)',
      },
    },
  },
}

