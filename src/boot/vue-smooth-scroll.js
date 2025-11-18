import { boot } from 'quasar/wrappers';
import VueSmoothScroll from 'vue3-smooth-scroll';

export default boot(({ app }) => {
  app.use(VueSmoothScroll);

  // Provide `smoothScroll` function for injection in components
  // `vue3-smooth-scroll plugin` provides smoothScroll functionality.
  // We wrap it to ensure it's available via inject
  app.provide('smoothScroll', (options) => {
    // Try to use the plugin's smoothScroll method if available
    if (app.config.globalProperties.$smoothScroll) {
      return app.config.globalProperties.$smoothScroll(options);
    }
    // Fallback to native smooth scroll if plugin method not available
    if (options && options.scrollTo) {
      options.scrollTo.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
