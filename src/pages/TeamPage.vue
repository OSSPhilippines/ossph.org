<template lang="pug">
generic-panel(
  :panel-classes="['grey-panel', 'bg-transparent']"
  padding-top="0px"
  padding-top-mobile="0px"
  hide-hr
)
  div.row.items-center.justify-center
    div.col-xs-12.col-md-8.text-center
      h1.text-weight-medium.text-h2.text-primary The OSSPH Team
      p.text-body1.q-mb-xl Here are the amazing people behind OSSPH's initiatives
      div.row.wrap.justify-center
        template(v-for="team in theTeam")
          div.col-xs-12.col-md-3.q-pa-md.text-center
            q-img(
              :src="team.photo"
            ).q-mb-md
            div
              span.text-h4 {{team.name}}
            div
              span.text-body1 {{team.role}}
            div
              q-btn(
                label="Connect"
                color="primary"
                flat
                no-caps
              ).full-width
                q-menu(fit)
                  q-list
                    template(v-for="social in team.socials")
                      q-item(
                        target="_blank"
                        v-close-popup
                        clickable
                        :href="social.link"
                      )
                        //- q-item-section(avatar)
                        //-   q-icon(:name="social.icon")
                        q-item-section {{social.name}}

      div.row.wrap.justify-center
        div.col-xs-12.q-mt-lg.text-center
          q-btn(
            label="Join Our Team!"
            size="lg"
            color="primary"
            no-caps
            unelevated
            href="https://forms.gle/MjHy9WmB7cEeXDVV9"
            target="_blank"
          ).q-mb-xl
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
    useMeta(useBuildMeta({ page: 'The Team', description: 'Here are the amazing people behind OSSPH\'s initiatives' }));
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
