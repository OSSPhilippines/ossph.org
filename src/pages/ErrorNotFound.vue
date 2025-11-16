<template>
  <div class="fullscreen bg-primary text-white text-center q-pa-md flex flex-center">
    <div class="column items-center">
      <img width="200" src="../assets/images/ossph-logo-text-white.png" alt="OSSPH Logo" class="q-mb-xl">
      <span class="text-h1">404</span>
      <p class="text-h4">Nothing to see here 👀</p>
      <q-btn
        class="q-mt-xl"
        color="white"
        unelevated
        outline
        to="/"
        label="Go Home"
        aria-label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useMeta } from 'quasar';
import { useBuildMeta } from '@/composables/meta';

export default defineComponent({
  name: 'ErrorNotFound',
  setup () {
    useMeta(useBuildMeta({
      page: '404 - Page Not Found',
      title: '404 - Page Not Found | Open Source Software PH',
      description: 'The page you are looking for could not be found. Return to the Open Source Software PH homepage.',
      twitterTitle: '404 - Page Not Found | OSSPH',
      twitterDescription: 'The page you are looking for could not be found.',
    }));
  },
});
</script>
