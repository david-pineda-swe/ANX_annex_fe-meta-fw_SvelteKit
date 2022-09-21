const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.svelte', './src/**/*.css'],
  darkMode: false,
  theme: {
    extend: {},
    // NOTE - defaults from documentation
    // DOCS - https://v1.tailwindcss.com/docs/breakpoints
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}