<template lang="pug">
generic-panel(
  :panel-classes="['grey-panel', 'bg-transparent']"
  padding-top="0px"
  padding-top-mobile="0px"
  hide-hr
)
  div.row.items-center.justify-center
    div.col-xs-12.col-md-8.text-center
      h2(:class="{ 'text-h2': !isMobile, 'text-h4': isMobile }").ossph-font The #[span.ossph-text-gradient-main OSSPH Team] ⚔️
      p(data-aos="fade-down").ossph-text-paragraph.q-mb-xl Here are the amazing people behind OSSPH's initiatives
      div.row.justify-center.q-mb-md
        div.col-xs-12.col-md-4
          q-select(
            v-model="selectedRole"
            :options="roleOptions"
            label="Filter by Role"
            outlined
            dense
            emit-value
            map-options
            clearable
          )
      h1.text-h4 Active Volunteers
      div.row.wrap
        template(v-for="team in activeTeamData")
          div(data-aos="fade-up").col-xs-12.col-md-2.q-pa-md.text-center
            q-img(
              :src="require(`@/assets/images/${team.photo}`)"
              :alt="`${team.name} - ${team.role}`"
            ).q-mb-md
            div
              span.text-h4 {{team.name}}
            div
              span.text-body1 {{team.role}}
            div(v-if="team.socials.length")
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
                        q-item-section(avatar)
                          q-icon(:name="social.icon")
                        q-item-section {{social.name}}
      h1.text-h4 Past Volunteers
      div.row.wrap
        template(v-for="team in inactiveTeamData")
          div(data-aos="fade-up").col-xs-12.col-md-2.q-pa-md.text-center
            q-img(
              :src="require(`@/assets/images/${team.photo}`)"
              :alt="`${team.name} - ${team.role}`"
            ).q-mb-md
            div
              span.text-h4 {{team.name}}
            div
              span.text-body1 {{team.role}}
            div(v-if="team.socials.length")
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
                        q-item-section(avatar)
                          q-icon(:name="social.icon")
                        q-item-section {{social.name}}

      div.row.wrap.justify-center
        div.col-xs-12.q-mt-lg.text-center.q-gutter-sm
          q-btn(
            label="Join Our Team!"
            size="lg"
            color="primary"
            href="https://forms.gle/MjHy9WmB7cEeXDVV9"
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
</template>

<script>
import { inject, computed, ref } from 'vue';
import { useBuildMeta } from '@/composables/meta';
import { useMeta, useQuasar } from 'quasar';
import GenericPanel from '@/components/commons/GenericPanel.vue';
import teamData from '@/assets/fixtures/team';
export default {
  components: {
    GenericPanel,
  },
  setup () {
    useMeta(useBuildMeta({
      page: 'The Team',
      description: 'Meet the amazing people behind OSSPH\'s initiatives. Our team of passionate developers, designers, and community leaders working together to grow open source in the Philippines.',
      twitterTitle: 'The Team - Open Source Software PH',
      twitterDescription: 'Meet the amazing people behind OSSPH\'s initiatives. Passionate developers, designers, and community leaders.',
    }));
    const smoothScroll = inject('smoothScroll');
    const $q = useQuasar();
    const isMobile = computed(() => $q.screen.lt.md);
    const selectedRole = ref(null);

    // Get unique roles from team data
    const roleOptions = computed(() => {
      const roles = [...new Set(teamData.map(member => member.role))];
      return roles.map(role => ({
        label: role,
        value: role,
      }));
    });

    // Filter team data based on selected role
    const activeTeamData = computed(() => {
      let filtered = teamData.filter((team) => team.active);
      if (selectedRole.value) {
        filtered = filtered.filter(team => team.role === selectedRole.value);
      }
      return filtered;
    });

    const inactiveTeamData = computed(() => {
      let filtered = teamData.filter((team) => !team.active);
      if (selectedRole.value) {
        filtered = filtered.filter(team => team.role === selectedRole.value);
      }
      return filtered;
    });

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
      activeTeamData,
      inactiveTeamData,
      onGoToPanel,
      selectedRole,
      roleOptions,
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
