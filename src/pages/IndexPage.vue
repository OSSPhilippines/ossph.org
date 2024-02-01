<template lang="pug">
generic-panel(
  :panel-classes="['items-center']"
  padding-top="0"
).overflow-hidden
  div.row.items-center.justify-center
    div(data-aos="fade-right").col-xs-12.col-md-6.q-gutter-sm
      h1(:class="{ 'text-h1': !isMobile, 'text-h3': isMobile }").ossph-font.text-primary.text-weight-medium #[span.ossph-text-gradient-main Open Source] Software PH
      h2(:class="{ 'text-h2': !isMobile, 'text-h4': isMobile }").text-weight-medium The leading Open Source Software Community in the Philippines
      q-btn(
        label="Join The Movement!"
        size="lg"
        color="primary"
        icon="discord"
        href="https://discord.gg/DvtqKrWb86"
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
    div(v-if="!isMobile" data-aos="fade-left").col-xs-12.col-md-6.text-center
      img(
        src="../assets/images/github-org-screenshot.png"
        height="850"
      )

generic-panel(
  :panel-classes="['items-center']"
  padding-top="10px"
)
  div.row.items-center.justify-center
    div.col-xs-12.col-md-8
      q-card(flat).bg-transparent
        q-card-section.text-center
          h2(:class="{ 'text-h2': !isMobile, 'text-h4': isMobile }" data-aos="fade-down").ossph-font Our #[span.ossph-text-gradient-main Community Partners] 💪
          div.row.justify-center
            div.col-xs-12
              div.row.items-center.justify-center
                div.col-xs-12.text-center
                  div.row.justify-center.items-center
                    div(data-aos="fade-up").col-xs-12.col-md-3.q-pa-sm
                      a(href="https://stripe.com?ref=https://ossph.org" target="_blank")
                        q-img(
                          src="../assets/images/stripe-logo.png"
                          spinner-color="primary"
                          width="170px"
                          alt="Stripe Logo"
                        )
                        q-tooltip Stripe
                    div(data-aos="fade-up").col-xs-12.col-md-3.q-pa-sm
                      a(href="https://www.microsoft.com/en-us?ref=https://ossph.org" target="_blank")
                        q-img(
                          src="../assets/images/microsoft-logo.png"
                          spinner-color="primary"
                          width="170px"
                          alt="Microsoft Logo"
                        )
                        q-tooltip Microsoft
                    div(data-aos="fade-up").col-xs-12.col-md-3.q-pa-sm
                      a(href="https://www.edukasyon.ph?ref=https://ossph.org" target="_blank")
                        q-img(
                          src="../assets/images/edukasyon.jpg"
                          spinner-color="primary"
                          width="170px"
                          alt="Edukasyon.ph Logo"
                        )
                        q-tooltip Edukasyon.ph
                    div(data-aos="fade-up").col-xs-12.col-md-3.q-pa-sm
                      a(href="https://www.facebook.com/AWS.SiklabPH/?ref=https://ossph.org" target="_blank")
                        q-img(
                          src="../assets/images/aws-siklab-logo.png"
                          spinner-color="primary"
                          width="180px"
                          alt="AWS Siklab Logo"
                        )
                        q-tooltip AWS Siklab
                    div(data-aos="fade-up").col-xs-12.col-md-3.q-pa-sm
                      a(href="https://web3philippines.org/?ref=https://ossph.org" target="_blank")
                        q-img(
                          src="../assets/images/web3phl-logo.png"
                          spinner-color="primary"
                          width="200px"
                          alt="Web3 Philippines Logo"
                        )
                        q-tooltip Web3 Philippines
                    div(data-aos="fade-up").col-xs-12.col-md-3.q-pa-sm
                      a(href="https://pycon-2024.python.ph/?ref=https://ossph.org" target="_blank")
                        q-img(
                          src="../assets/images/python-ph-logo-black.png"
                          spinner-color="primary"
                          width="300px"
                          alt="Web3 Philippines Logo"
                        )
                        q-tooltip Python Philippines

generic-panel(
  :panel-classes="['items-center']"
  padding-top="10px"
)
  div.row.items-center.justify-center
    div.col-xs-12.col-md-8
      q-card(flat).bg-transparent
        q-card-section.text-center
          h2(:class="{ 'text-h2': !isMobile, 'text-h4': isMobile }" data-aos="fade-down").ossph-font Our #[span.ossph-text-gradient-main Sponsors] 😇
          div.row.justify-center
            div.col-xs-12
              div.row.items-center.justify-center
                div.col-xs-12.text-center
                  div.row.justify-center.items-center
                    div(data-aos="fade-up").col-xs-6.col-md-3.q-pa-sm
                      a(href="https://daily.dev?ref=https://ossph.org" target="_blank")
                        q-img(
                          src="../assets/images/daily-dev-logo.png"
                          spinner-color="primary"
                          width="170px"
                          alt="Daily Dev Logo"
                        )
                    div(data-aos="fade-up").col-xs-6.col-md-3.q-pa-sm
                      a(href="https://twitter.com/AvieDev?ref=https://ossph.org" target="_blank")
                        q-img(
                          src="../assets/images/avie.png"
                          spinner-color="primary"
                          width="120px"
                          alt="Avie Dev Photo"
                        )
                    div(data-aos="fade-up").col-xs-6.col-md-3.q-pa-sm
                      a(href="https://twitter.com/jrtiquez?ref=https://ossph.org" target="_blank")
                        q-img(
                          src="../assets/images/joff.png"
                          spinner-color="primary"
                          width="120px"
                          alt="Joff Photo"
                        )
                    div(data-aos="fade-up").col-xs-6.col-md-3.q-pa-sm
                      a(href="https://github.com/jeydpeaschocolatebar?ref=https://ossph.org" target="_blank")
                        q-img(
                          src="../assets/images/jade.png"
                          spinner-color="primary"
                          width="120px"
                          alt="Jade Photo"
                        )
                div.col-xs-12.text-center.q-mt-xl
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
  padding-top="0"
).overflow-hidden
  div.row.items-center.justify-center.text-center
    div.col-xs-12.col-md-8
      h2(:class="{ 'text-h2': !isMobile, 'text-h4': isMobile }" data-aos="fade-down").ossph-font #[span.ossph-text-gradient-main Active] Community 🎉
    div(data-aos="fade-right").col-xs-12.col-md-7
      img(
        src="../assets/images/discord-community-screenshot.png"
        width="100%"
      )
    div(data-aos="fade-left").col-xs-12.col-md-5.q-pt-md.q-px-lg
      p(:class="{ 'text-justify': isMobile }").ossph-text-paragraph OSSPH's active Discord community is a vibrant hub of open source enthusiasts and contributors from around the world, sharing knowledge, collaborating on projects, and supporting each other in their journeys. If you're passionate about open source and want to connect with like-minded people, come join us and be a part of the fun!
      q-btn(
        label="Join The Movement!"
        size="lg"
        color="primary"
        icon="discord"
        href="https://discord.gg/DvtqKrWb86"
        target="_blank"
        no-caps
        unelevated
      )

generic-panel(
  :panel-classes="['items-center']"
  padding-top="0"
).overflow-hidden
  div.row.items-center.justify-center.text-center
    div.order-1.col-xs-12.col-md-8
      h2(:class="{ 'text-h2': !isMobile, 'text-h4': isMobile }" data-aos="fade-down").ossph-font #[span.ossph-text-gradient-main Learn] Regularly 💡
    div(data-aos="fade-right" :style="{ order: isMobile ? 3 : 2 }").col-xs-12.col-md-5.q-pt-md
      p(:class="{ 'text-justify': isMobile }").ossph-text-paragraph OSSPH's active blog provides regular updates on open source software development, cybersecurity, and other technology-related topics. By subscribing now, you can stay informed and learn about the latest trends and developments in the field.
      q-btn(
        label="Read Now!"
        size="lg"
        color="primary"
        icon="fa fa-book"
        href="https://blog.ossph.org/"
        target="_blank"
        no-caps
        unelevated
      )
    div(data-aos="fade-left" :style="{ order: isMobile ? 2 : 3 }").col-xs-12.col-md-7
      img(
        src="../assets/images/regular-blog-screenshot.png"
        width="100%"
      )

generic-panel(
  :panel-classes="['items-center']"
  padding-top="0"
  hide-hr
).overflow-hidden
  div.row.items-center.justify-center.text-center
    div.col-xs-12.col-md-8
      h2(:class="{ 'text-h2': !isMobile, 'text-h4': isMobile }" data-aos="fade-down").ossph-font #[span.ossph-text-gradient-main Contribution] & Collaboration 🍺
    div(data-aos="fade-right").col-xs-12.col-md-7
      img(
        src="../assets/images/github-org-screenshot.png"
        width="100%"
      )
    div(data-aos="fade-left").col-xs-12.col-md-5.q-pt-md.q-px-lg
      p(:class="{ 'text-justify': isMobile }").ossph-text-paragraph OSSPH has a wide range of open source projects for contributors to learn and contribute to, including software for education, healthcare, and community development. Join the OSSPH community and contribute now to make a positive impact on society!
      q-btn(
        label="Start Contributing Now!"
        size="lg"
        color="primary"
        icon="fa-brands fa-github"
        href="https://github.com/OSSPhilippines"
        target="_blank"
        no-caps
        unelevated
      ).btn-contribute
//- div.col-xs-12.col-md-6.text-center
//-   //- p.text-justify.ossph-text-paragraph Open Source Software PH (OSSPH) is a developer-led initiative to grow the community of developers building open source software across the Philippines. Our goal is to help open source maintainers to get proper support for their projects. Our future plans include virtual meetups, training for new OSS maintainers, connecting them with mentors and companies that can potentially support them.
//-   //- p.text-justify.ossph-text-paragraph Open Source Software PH (OSSPH) is a developer-led initiative to grow the community of developers building open source software across the Philippines.
//- div.col-xs-12.text-center.q-py-lg.q-gutter-sm
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

.btn-contribute {
  padding: 8px 16px;
}

.btn-contribute >>> span.q-btn__content {
  gap: 0.75rem;
}

.btn-contribute >>> span.q-btn__content i.on-left {
  margin-right: 0;
}

a {
  text-decoration: none;
}
</style>
