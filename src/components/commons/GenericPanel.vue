<template lang="pug">
div(
  v-bind="$attrs"
  :style="{ height: fullHeight ? '100vh' : null }"
  :class="containerClasses"
).custom-panel.justify-center
  div.col-xs-12.col-md-8.q-py-xl.q-px-sm
    slot(name="default")
</template>

<script>
import { computed } from 'vue';
export default {
  props: {
    panelClasses: {
      type: Array,
      default: () => ([]),
    },
    fullHeight: Boolean,
  },
  setup (props) {
    const containerClasses = computed(() => {
      return [
        'row',
        ...props.panelClasses,
      ];
    });
    return {
      containerClasses,
    };
  },
};
</script>

<style scoped>
.custom-panel {
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.12); */
}
</style>
