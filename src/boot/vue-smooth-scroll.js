import { boot } from 'quasar/wrappers'
import VueSmoothScroll from 'vue3-smooth-scroll'

export default boot(({ app }) => {
  // Install the vue3-smooth-scroll plugin
  // This provides:
  // 1. $smoothScroll on app.config.globalProperties (for Options API: this.$smoothScroll)
  // 2. v-smooth-scroll directive for template usage
  // 3. 'smoothScroll' via app.provide() (accessible via inject('smoothScroll') in Composition API)
  app.use(VueSmoothScroll)

  // The plugin already provides 'smoothScroll' via inject(), so we don't need to provide it ourselves
  // Components can use: const smoothScroll = inject('smoothScroll')
})
