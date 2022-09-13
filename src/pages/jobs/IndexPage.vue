<template lang="pug">
generic-panel(
  :panel-classes="['grey-panel', 'bg-transparent']"
  padding-top="0px"
  padding-top-mobile="0px"
  hide-hr
)
  div.row.items-center.justify-center
    div.col-xs-12.col-md-8.text-center
      h1.text-weight-medium.text-h2.text-primary Jobs
      p.text-body1.q-mb-xl Find a Job or Hire Developers in the Philippines
</template>

<script>
import { computed } from 'vue';
import { useBuildMeta } from '@/composables/meta';
import { useMeta, useQuasar } from 'quasar';
import GenericPanel from '@/components/commons/GenericPanel.vue';
export default {
  components: {
    GenericPanel,
  },
  setup () {
    useMeta(useBuildMeta({ page: 'Jobs', description: 'Find a Job or Hire Developers in the Philippines' }));
    const $q = useQuasar();
    const isMobile = computed(() => $q.screen.lt.md);

    return {
      isMobile,
    };
  },
};
</script>

<style scoped>
.custom-q-card {
  border: 2px solid black;
}

.grey-panel {
  background-color: #fefefe;
}

.white-panel {
  background-color: #fff;
}

.custom-q-card:hover {
  cursor: pointer;
  box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.3) !important;
  -webkit-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.3) !important;
  -moz-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.3) !important;
  color: #0099cc !important;
}

a {
  text-decoration: none;
}
</style>
