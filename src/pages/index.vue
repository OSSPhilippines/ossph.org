<template>
  <generic-panel>
    <div class="grid grid-cols-1 md:grid-cols-2 md:h-[90vh] items-center md:relative">
      <div class="order-2 md:order-1">
        <div>
          <h1 class="text-6xl md:text-8xl text-center md:text-left ossph-text-gradient mb-8 md:mb-12">Open Source Software PH</h1>
          <h2 class="text-3xl md:text-6xl text-center md:text-left font-primary mb-8 md:mb-12">The leading Open Source Software Community in the Philippines</h2>
        </div>
        <div class="flex gap-2 justify-center md:justify-start">
          <button class="btn md:btn-lg btn-primary font-normal">
            Join The Movement
            <i class="lab la-discord text-3xl text-white"></i>
          </button>
          <button class="btn md:btn-lg btn-primary btn-outline font-normal">
            Help Us Grow
            <i class="las la-heart text-red-500 text-3xl"></i>
          </button>
        </div>
      </div>
      <div class="order-1 md:order-2">
        <img class="md:absolute top-0 mb-6" src="assets/images/ossph-screenshot-github.png" alt="">
      </div>
    </div>
  </generic-panel>

  <generic-panel class="bg-green-50">
    <div class="flex flex-col">
      <h1>Our Community Partners 💪</h1>
      <div class="grid grid-cols-5">
        <i class="las la-otter"></i>
        <i class="las la-otter"></i>
        <i class="las la-otter"></i>
        <i class="las la-otter"></i>
        <i class="las la-otter"></i>
      </div>
    </div>
  </generic-panel>

  <generic-panel class="bg-blue-50">
    <div class="flex flex-col">
      <h1>Our Sponsors 😇</h1>
      <div class="grid grid-cols-4">
        <i class="las la-otter"></i>
        <i class="las la-otter"></i>
        <i class="las la-otter"></i>
        <i class="las la-otter"></i>
      </div>
    </div>
  </generic-panel>

  <generic-panel>
    <div class="flex flex-col">
      <h1>Active Community 🎉</h1>
      <div class="grid grid-cols-2">
        <i class="las la-otter"></i>
        <i class="las la-otter"></i>
      </div>
    </div>
  </generic-panel>

  <generic-panel>
    <div class="flex flex-col">
      <h1>Learn Regularly 💡</h1>
      <div class="grid grid-cols-2">
        <i class="las la-otter"></i>
        <i class="las la-otter"></i>
      </div>
    </div>
  </generic-panel>

  <generic-panel>
    <div class="flex flex-col">
      <h1>Contribution & Collaboration 🍺</h1>
      <div class="grid grid-cols-2">
        <i class="las la-otter"></i>
        <i class="las la-otter"></i>
      </div>
    </div>
  </generic-panel>
</template>

<script>
import {
  definePageMeta,
  useSeoMeta,
} from '#imports';
import GenericPanel from '@/components/commons/GenericPanel.vue';
import {
  META_DESCRIPTION,
  META_TITLE,
} from '~/constants/meta';

export default {
  components: {
    GenericPanel,
  },

  setup () {
    const title = `Home - ${META_TITLE}`;
    const description = META_DESCRIPTION;

    useSeoMeta({
      title,
      description,
      ogTitle: title,
      ogDescription: description,
      ogType: 'website',
      ogUrl: 'https://ossph.org',
      ogImage: '~/assets/images/og-banner.png',
    });

    definePageMeta({
      layout: 'default',
    });
  },
};
</script>
