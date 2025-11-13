<template lang="pug">
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
          template(v-for="social in team.socials" :key="social.name")
            q-item(
              target="_blank"
              v-close-popup
              clickable
              :href="social.link"
            )
              q-item-section(avatar)
                q-icon(:name="social.icon")
              q-item-section {{social.name}}
</template>

<script>
export default {
  name: 'TeamMemberCard',
  props: {
    team: {
      type: Object,
      required: true,
    },
  },
};
</script>
