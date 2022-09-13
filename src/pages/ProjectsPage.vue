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
                div.col-xs-12
                  div(
                    :class="{ 'no-wrap': !isMobile }"
                  ).row
                    div.col-xs-12.col-md-3.q-pa-sm.text-center
                      q-card
                        q-card-section.q-pt-lg
                          a(href="https://github.com/OSSPhilippines/ossph.org" target="_blank")
                            q-img(
                              src="../assets/images/github-logo.png"
                              spinner-color="primary"
                              width="120px"
                              alt="Edukasyon.ph Logo"
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
                              alt="Edukasyon.ph Logo"
                            )
                            h2.text-h6 Pinoy-Made 🇵🇭
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
    const theTeam = [
      {
        name: 'Joff',
        role: 'Founder',
        photo: require('@/assets/images/joff.png'),
        socials: [
          {
            name: 'GitHub',
            icon: 'github',
            link: 'https://github.com/jofftiquez',
          },
          {
            name: 'Twitter',
            icon: 'twitter',
            link: 'https://twitter.com/jrtiquez',
          },
          {
            name: 'LinkedIn',
            icon: 'linkedin',
            link: 'https://linkedin.com/in/jofftiquez',
          },
        ],
      },
      {
        name: 'Waren',
        role: 'Community Leader',
        photo: require('@/assets/images/waren.png'),
        socials: [
          {
            name: 'Twitter',
            icon: 'twitter',
            link: 'https://twitter.com/warengonzaga',
          },
        ],
      },
      {
        name: 'Avie',
        role: 'Community Leader',
        photo: require('@/assets/images/avie.png'),
        socials: [
          {
            name: 'Twitter',
            icon: 'twitter',
            link: 'https://twitter.com/AvieDev',
          },
        ],
      },
      {
        name: 'Benj',
        role: 'Head Artist',
        photo: require('@/assets/images/benj.png'),
        socials: [
          {
            name: 'Twitter',
            icon: 'twitter',
            link: 'https://twitter.com/annabenjamine',
          },
        ],
      },
      {
        name: 'Kristian',
        role: 'Community Leader',
        photo: require('@/assets/images/kristian.png'),
        socials: [
          {
            name: 'Twitter',
            icon: 'twitter',
            link: 'https://twitter.com/k_quirapas',
          },
        ],
      },
      {
        name: 'Jet',
        role: 'Social Media Associate',
        photo: require('@/assets/images/jet.png'),
        socials: [
          {
            name: 'Twitter',
            icon: 'twitter',
            link: 'https://twitter.com/metaljet1',
          },
        ],
      },
      {
        name: 'Geo',
        role: 'Technical Writer',
        photo: require('@/assets/images/geo.png'),
        socials: [
          {
            name: 'GitHub',
            icon: 'github',
            link: 'https://github.com/geodelapaz',
          },
        ],
      },
    ];

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
      theTeam,
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
