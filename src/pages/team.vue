
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
import {
  META_DESCRIPTION,
  META_TITLE,
} from '~/constants/meta';

export default {
  setup () {
    const title = `Team - ${META_TITLE}`;
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
