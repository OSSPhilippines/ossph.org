// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  preset: 'node-server',
  // head: {
  //   link: [
  //     {
  //       rel: 'stylesheet',
  //       href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Roboto+Mono:wght@400;500;600&display=swap',
  //     },
  //   ],
  // },
  buildModules: [
    '@nuxtjs/google-fonts',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  nitro: {
    preset: 'firebase',
  },
  tailwindcss: {
    configPath: 'tailwind.config',
  },
  googleFonts: {
    families: {
      Roboto: true,
    },
    useStylesheet: true,
    display: 'swap',
  },
});
