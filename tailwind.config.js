/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#0060a0',
      },
      fontFamily: {
        body: ["'Inter'", "'sans-serif'"],
        primary: ["'Roboto Condensed'", "'sans-serif'"],
        logo: ["'molot'", "'sans-serif'"],
      },
    },
  },
  daisyui: {
    base: true,
    themes: [
      {
        ossph: {
          primary: '#0060a0',
        },
      },
    ],
  },
  plugins: [
    '@tailwindcss/forms',
    '@tailwindcss/container-queries',
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
};
