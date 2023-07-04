
<template>
  <div>
    <h1>Team</h1>
  </div>
</template>

<script>
import {
  definePageMeta,
  useSeoMeta,
} from '#imports';
import Constants from '~/constants';

export default {
  setup () {
    const title = `Team - ${Constants.TITLE_DEFAULT}`;
    const description = Constants.DESCRIPTION_DEFAULT;

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
