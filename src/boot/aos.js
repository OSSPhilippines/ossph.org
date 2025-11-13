import { boot } from 'quasar/wrappers';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default boot(() => {
  // Only initialize AOS on client-side
  if (typeof window !== 'undefined') {
    // Initialize AOS with proper configuration
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false, // Allow animations to trigger again when scrolling back up
      mirror: false, // Don't animate elements when scrolling past them
      offset: 100, // Offset (in px) from the original trigger point
      delay: 0, // Delay (in ms) before animation starts
      anchorPlacement: 'top-bottom', // Defines which position of the element should trigger animation
    });
  }
});
