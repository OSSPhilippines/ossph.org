<template>
  <generic-panel class="bg-red-50 font-primary">
    <div class="grid grid-cols-2">
      <div>
        <h1>Open Source Software PH</h1>
        <h2>The leading Open Source Software Community in the Philippines</h2>
        <button class="btn btn-primary">Join The Movement</button>
        <button class="btn btn-primary">Help Us Grow</button>
      </div>
      <div>
        <img src="https://loremflickr.com/640/480/nightlife" alt="Night Life" />
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
