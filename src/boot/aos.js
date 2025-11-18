import { boot } from 'quasar/wrappers';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

export default boot(() => {
  AOS.init({
    once: true, // Don't trigger animations on scroll back up
  });
});
