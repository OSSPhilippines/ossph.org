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
        template(v-for="team in activeTeamData" :key="team.name")
          team-member-card(:team="team")
      h1.text-h4 Past Volunteers
      div.row.wrap
        template(v-for="team in inactiveTeamData" :key="team.name")
          team-member-card(:team="team")

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
import { computed, ref } from 'vue'
import { useBuildMeta } from '@/composables/meta'
import { useMeta, useQuasar } from 'quasar'
import GenericPanel from '@/components/commons/GenericPanel.vue'
import TeamMemberCard from '@/components/TeamMemberCard.vue'
import teamData from '@/assets/fixtures/team'
export default {
  components: {
    GenericPanel,
    TeamMemberCard,
  },
  setup() {
    useMeta(
      useBuildMeta({
        page: 'The Team',
        description: "Here are the amazing people behind OSSPH's initiatives",
      })
    )
    const $q = useQuasar()
    const isMobile = computed(() => $q.screen.lt.md)
    const selectedRole = ref(null)

    // Get unique roles from team data
    const roleOptions = computed(() => {
      const roles = [...new Set(teamData.map(member => member.role))]
      return roles.map(role => ({
        label: role,
        value: role,
      }))
    })

    // Filter team data based on selected role
    const activeTeamData = computed(() => {
      let filtered = teamData.filter(team => team.active)
      if (selectedRole.value) {
        filtered = filtered.filter(team => team.role === selectedRole.value)
      }
      return filtered
    })

    const inactiveTeamData = computed(() => {
      let filtered = teamData.filter(team => !team.active)
      if (selectedRole.value) {
        filtered = filtered.filter(team => team.role === selectedRole.value)
      }
      return filtered
    })

    return {
      isMobile,
      activeTeamData,
      inactiveTeamData,
      selectedRole,
      roleOptions,
    }
  },
}
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
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.3) !important;
  -webkit-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.3) !important;
  -moz-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.3) !important;
  color: #0099cc !important;
}

a {
  text-decoration: none;
}
</style>
