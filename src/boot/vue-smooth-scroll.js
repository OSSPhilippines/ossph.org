import { boot } from 'quasar/wrappers';
import VueSmoothScroll from 'vue3-smooth-scroll';

export default boot(({ app }) => {
  app.use(VueSmoothScroll);
});
