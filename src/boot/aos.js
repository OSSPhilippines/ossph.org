import { boot } from 'quasar/wrappers';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
export default boot(({ app }) => {
  AOS.init();
});
