<template lang="pug">
div
  div(
    v-bind="$attrs"
    :style="{ height: fullHeight ? '100vh' : null, 'padding-top': isMobile ? paddingTopMobile : paddingTop, 'padding-bottom': isMobile ? paddingBottomMobile : paddingBottom }"
    :class="containerClasses"
  ).custom-panel.justify-center
    div.col-xs-12.col-md-10
      slot(name="default")
  hr(v-if="!hideHr").custom-hr
</template>

<script>
import { computed } from 'vue';
import { useQuasar } from 'quasar';
export default {
  props: {
    panelClasses: {
      type: Array,
      default: () => ([]),
    },
    fullHeight: Boolean,
    paddingBottom: {
      type: String,
      default: '70px',
    },
    paddingTop: {
      type: String,
      default: '70px',
    },
    paddingBottomMobile: {
      type: String,
      default: '40px',
    },
    paddingTopMobile: {
      type: String,
      default: '40px',
    },
    hideHr: Boolean,
  },
  setup (props) {
    const $q = useQuasar();
    const isMobile = computed(() => $q.screen.lt.md);
    const containerClasses = computed(() => {
      return [
        'row',
        ...props.panelClasses,
      ];
    });
    return {
      containerClasses,
      isMobile,
    };
  },
};
</script>

<style scoped>
.custom-panel {
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.10); */
}

.custom-hr {
  border: none !important;
  height: 1px !important;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0)) !important;
}
</style>
