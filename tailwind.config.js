/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./node_modules/flowbite.{js,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#0060A0',
      },
      fontFamily: {
        sans: ["'Roboto Condensed'", 'sans-serif'],
      },
    },
  },
  daisyui: {
    base: false,
  },
  plugins: [
    '@tailwindcss/forms',
    '@tailwindcss/container-queries',
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
};
