<template lang="pug">
generic-panel(
  :panel-classes="['items-center']"
  padding-top="10px"
  padding-bottom="10px"
  hide-hr
)
  div.row.items-center.justify-center
    div.col-xs-12.col-md-8.text-center
      h1.text-weight-medium.text-h2.text-primary Our Projects
      p.text-body1.q-mb-xl OSSPH's growing list of projects powered by the community!
  div.row.items-center.justify-center
    div.col-xs-12.col-md-8
      q-card(flat).bg-transparent
        q-card-section
          div.row
            div.col-xs-12
              div.row
                div.col-xs-12red
                  div.row
                    div.col-xs-12.col-md-3.q-pa-sm.text-center
                      q-card
                        q-card-section.q-pt-lg
                          a(href="https://github.com/vue-stripe" target="_blank")
                            q-img(
                              src="../assets/images/vue-stripe-logo-variant-1-small.png"
                              spinner-color="primary"
                              width="120px"
                              alt="Vue Stripe Logo"
                            )
                            h2.text-h6 Vue Stripe
                    div.col-xs-12.col-md-3.q-pa-sm.text-center
                      q-card
                        q-card-section.q-pt-lg
                          a(href="https://github.com/OSSPhilippines/ossph.org" target="_blank")
                            q-img(
                              src="../assets/images/github-logo.png"
                              spinner-color="primary"
                              width="120px"
                              alt="GitHub Logo"
                            )
                            h2.text-h6 OSSPH Website
                    div.col-xs-12.col-md-3.q-pa-sm.text-center
                      q-card
                        q-card-section.q-pt-lg
                          a(href="https://github.com/OSSPhilippines/pinoy-made" target="_blank")
                            q-img(
                              src="../assets/images/github-logo.png"
                              spinner-color="primary"
                              width="120px"
                              alt="GitHub Logo"
                            )
                            h2.text-h6 Pinoy-Made 🇵🇭
                    div.col-xs-12.col-md-3.q-pa-sm.text-center
                      q-card
                        q-card-section.q-pt-lg
                          a(href="https://github.com/OSSPhilippines/freefolio" target="_blank")
                            q-img(
                              src="../assets/images/github-logo.png"
                              spinner-color="primary"
                              width="120px"
                              alt="GitHub Logo"
                            )
                            h2.text-h6 Freefolio
                    div.col-xs-12.col-md-3.q-pa-sm.text-center
                      q-card
                        q-card-section.q-pt-lg
                          a(href="https://github.com/OSSPhilippines/hacktober-fest-2022-participants" target="_blank")
                            q-img(
                              src="../assets/images/github-logo.png"
                              spinner-color="primary"
                              width="120px"
                              alt="GitHub Logo"
                            )
                            h2.text-h6 Hacktoberfest 2022 Participants
                    div.col-xs-12.col-md-3.q-pa-sm.text-center
                      q-card
                        q-card-section.q-pt-lg
                          a(href="https://github.com/OSSPhilippines/v-animate-css" target="_blank")
                            q-img(
                              src="../assets/images/github-logo.png"
                              spinner-color="primary"
                              width="120px"
                              alt="GitHub Logo"
                            )
                            h2.text-h6 V Animate CSS
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
    useMeta(useBuildMeta({ page: 'Our Projects', description: 'OSSPH\'s growing list of projects powered by the community!' }));
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
