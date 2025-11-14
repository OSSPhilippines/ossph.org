<template>
  <div class="fullscreen bg-primary text-white text-center q-pa-md flex flex-center">
    <div class="column items-center">
      <img
        width="200"
        src="../assets/images/ossph-logo-text-white.png"
        alt="OSSPH Logo"
        class="q-mb-xl"
      />
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
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ErrorNotFound',
})
</script>
