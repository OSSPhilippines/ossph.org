<template lang="pug">
generic-panel(
  :panel-classes="['items-center']"
  padding-top="10px"
  padding-bottom="10px"
  hide-hr
)
  div.row.items-center.justify-center
    div.col-xs-12.col-md-8.text-center
      h2(:class="{ 'text-h2': !isMobile, 'text-h4': isMobile }" data-aos="fade-down").ossph-font Our #[span.ossph-text-gradient-main Projects] 💼
      p(data-aos="fade-down").ossph-text-paragraph.q-mb-xl OSSPH's growing list of projects powered by the community!
  div.row.items-center.justify-center
    div.col-xs-12.col-md-10
      div.row
        template(v-for="project in projects")
          div(data-aos="fade-up").col-xs-12.col-md-6.q-pa-sm
            q-card.shadow-1
              q-card-section.q-pt-lg
                div(:class="{ 'no-wrap': !isMobile }").row.items-start.q-gutter-sm
                  div.col-xs-12.col-md-3
                    q-img(
                      :src="project.icon"
                      spinner-color="primary"
                      width="100px"
                    )
                  div.col-xs-12.col-md-9
                    a(:href="project.link" target="_blank")
                      span.text-h6 {{project.name}}
                    p {{project.description}}
                    q-btn(
                      label="Visit Project"
                      icon-right="open_in_new"
                      color="primary"
                      target="_blank"
                      outline
                      no-caps
                      :href="project.link"
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

    const projects = [
      {
        name: 'Vue Stripe',
        link: 'https://github.com/vue-stripe',
        icon: require('../assets/images/vue-stripe-logo-variant-1-small.png'),
        description: 'Stripe Checkout & Elements for Vue.js',
      },
      {
        name: 'OSSPH Website',
        link: 'https://github.com/OSSPhilippines/ossph.org',
        icon: require('../assets/images/github-logo.png'),
        description: 'Official website of Open Source Software PH',
      },
      {
        name: 'Paymongo for Node.js',
        link: 'https://paymongo.ossph.org',
        icon: require('../assets/images/github-logo.png'),
        description: 'Nodes.js wrapper for Paymongo\'s REST API',
      },
      {
        name: 'Pinoy-Made 🇵🇭',
        link: 'https://github.com/OSSPhilippines/pinoy-made',
        icon: require('../assets/images/github-logo.png'),
        description: 'A collection of Filipino-made open source projects',
      },
      {
        name: 'Freefolio',
        link: 'https://github.com/OSSPhilippines/freefolio',
        icon: require('../assets/images/github-logo.png'),
        description: 'A collection of fast and free static portfolio websites',
      },
      {
        name: 'Hacktoberfest 2022 Participants',
        link: 'https://github.com/OSSPhilippines/hacktober-fest-2022-participants',
        icon: require('../assets/images/github-logo.png'),
        description: 'List of Hacktoberfest 2022 participants',
      },
      {
        name: 'V Animate CSS',
        link: 'https://github.com/OSSPhilippines/v-animate-css',
        icon: require('../assets/images/github-logo.png'),
        description: 'A Vue.js plugin for Animate CSS',
      },
      {
        name: 'My Philippines Travel Level Map',
        link: 'https://github.com/OSSPhilippines/philippine-map-app',
        icon: require('../assets/images/github-logo.png'),
        description: 'A website to help you visualize your travel history across the Philippines',
      },
    ];

    return {
      projects,
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
