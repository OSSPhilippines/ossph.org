<template lang="pug">
generic-panel(
  :panel-classes="['items-center']"
  padding-bottom="20px"
)
  div.row.items-center.justify-center
    div.col-xs-12.col-md-8.text-center
      q-img(
        src="../assets/images/ossph-logo-text-blue.png"
        style="width: 200px"
      )
      h1.text-h4.text-primary Open Source Software PH
      p.text-justify.text-body1 Open Source Software PH (OSSPH) is a developer-led initiative to grow the community of developers building open source software across the Philippines. Our goal is to help open source maintainers to get proper support for their projects. Our future plans include virtual meetups, training for new OSS maintainers, connecting them with mentors and companies that can potentially support them.
    div.col-xs-12.text-center.q-py-lg.q-gutter-sm
      q-btn(
        label="Join The Movement!"
        size="lg"
        color="primary"
        icon="discord"
        href="https://discord.com/invite/4ujGbRJyDN"
        target="_blank"
        no-caps
        unelevated
      )
      q-btn(
        label="Help Us Grow"
        size="lg"
        color="red"
        icon="fa fa-heart"
        href="https://github.com/sponsors/OSSPhilippines"
        target="_blank"
        no-caps
        outline
      )

generic-panel(
  :panel-classes="['items-center']"
  padding-top="10px"
  hide-hr
)
  div.row.items-center.justify-center
    div.col-xs-12.col-md-8
      q-card(flat).bg-transparent
        q-card-section.text-center
          h1.text-h5 Our Community Partners
          div.row.justify-center
            div.col-xs-12
              div.row.items-center.justify-center
                div.col-xs-12.text-center
                  div(
                    :class="{ 'no-wrap': !isMobile }"
                  ).row.justify-center.items-center
                    div.col-xs-12.col-md-3.q-pa-sm
                      a(href="https://stripe.com" target="_blank")
                        q-img(
                          src="../assets/images/stripe-logo.png"
                          spinner-color="primary"
                          width="170px"
                          alt="Stripe Logo"
                        )
                    div.col-xs-12.col-md-3.q-pa-sm
                      a(href="https://www.microsoft.com/en-us/" target="_blank")
                        q-img(
                          src="../assets/images/microsoft-logo.png"
                          spinner-color="primary"
                          width="170px"
                          alt="Microsoft Logo"
                        )
                    div.col-xs-12.col-md-3.q-pa-sm
                      a(href="https://www.edukasyon.ph/" target="_blank")
                        q-img(
                          src="../assets/images/edukasyon.jpg"
                          spinner-color="primary"
                          width="170px"
                          alt="Edukasyon.ph Logo"
                        )
                    div.col-xs-12.col-md-3.q-pa-sm
                      a(href="https://www.facebook.com/AWS.SiklabPH/" target="_blank")
                        q-img(
                          src="../assets/images/aws-siklab-logo.png"
                          spinner-color="primary"
                          width="180px"
                          alt="AWS Siklab Logo"
                        )
                    div.col-xs-12.col-md-3.q-pa-sm
                      a(href="https://web3philippines.org/" target="_blank")
                        q-img(
                          src="../assets/images/web3phl-logo.png"
                          spinner-color="primary"
                          width="200px"
                          alt="Web3 Philippines Logo"
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
    useMeta(useBuildMeta({ page: 'Home' }));
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
