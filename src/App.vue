<template>
  <router-view />
</template>

<script>
import { defineComponent, onMounted, onUnmounted } from 'vue';

export default defineComponent({
  name: 'App',
  setup () {
    // Handle unhandled promise rejections from browser extensions
    const handleUnhandledRejection = (event) => {
      // Suppress errors from browser extensions that close message channels
      if (event.reason && typeof event.reason === 'object') {
        const message = event.reason.message || event.reason.toString();
        if (message && message.includes('message channel closed')) {
          event.preventDefault(); // Prevent error from showing in console
        }
      }
      // Allow other errors to be handled normally
    };

    // Handle errors from browser extensions
    const handleError = (event) => {
      if (event.message && event.message.includes('message channel closed')) {
        event.preventDefault(); // Prevent error from showing in console
      }
    };

    onMounted(() => {
      window.addEventListener('unhandledrejection', handleUnhandledRejection);
      window.addEventListener('error', handleError);
    });

    onUnmounted(() => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      window.removeEventListener('error', handleError);
    });
  },
});
</script>
