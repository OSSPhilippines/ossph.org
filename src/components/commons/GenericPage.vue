<template lang="pug">
q-page(:padding="padding")
  slot(name="default")
  q-page-sticky(position="bottom-right" :offset="[18, 18]")
    slot(name="fab")
  q-dialog(
    v-model="loading"
    full-screen
    persistent
  )
    q-spinner(
      size="50px"
      color="primary"
    )
</template>

<script>
export default {
  props: {
    padding: Boolean,
    loading: Boolean,
  },
  setup () {
  },
};
</script>
