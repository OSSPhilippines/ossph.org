<template lang="pug">
generic-panel(
  :panel-classes="['items-center', 'grey-panel', 'bg-transparent']"
  hide-hr
)
  div.row.items-center.justify-center
    div.col-xs-12.col-md-8
      h1.text-h2.text-primary The Team #[span.text-h5 (Coming Soon)]
      //- p.text-justify.text-body1 Open Source Software PH (OSSPH) is a developer-led initiative to grow the community of developers building open source software across the Philippines. Our goal is to help open source maintainers to get proper support for their projects. Our future plans include virtual meetups, training for new OSS maintainers, connecting them with mentors and companies that can potentially support them.
    div.col-xs-12.col-md-8.q-py-lg
      q-btn(
        label="Join Our Team!"
        size="lg"
        color="primary"
        no-caps
        unelevated
        href="https://forms.gle/MjHy9WmB7cEeXDVV9"
        target="_blank"
      )
</template>

<script>
import { inject, computed } from 'vue';
import { useBuildMeta } from '@/composables/meta';
import { useMeta, useQuasar } from 'quasar';
import GenericPanel from '@/components/commons/GenericPanel.vue';
export default {
  components: {
    GenericPanel,
  },
  setup () {
    useMeta(useBuildMeta({ page: 'The Team' }));
    const smoothScroll = inject('smoothScroll');
    const $q = useQuasar();
    const isMobile = computed(() => $q.screen.lt.md);

    function onGoToPanel (card) {
      const panelId = card.panelId;
      if (card.panelId) {
        smoothScroll({
          scrollTo: document.getElementById(panelId),
          updateHistory: false,
        });
      }

      if (card.link) {
        window.open(card.link, '_blank').focus();
      }
    }

    return {
      isMobile,
      onGoToPanel,
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
