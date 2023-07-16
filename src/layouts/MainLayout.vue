<template lang="pug">
q-layout(
  view="hHh lpR ffr"
  @scroll="onScroll"
).whole-bg
  q-header(
    :dense="isMobile"
  ).bg-primary.text-white
    q-toolbar(color="primary" style="height: 70px")
      q-btn(
        v-if="isMobile"
        icon="menu"
        aria-label="Drawer Menu"
        flat
        round
        @click="drawerLeft = !drawerLeft"
      )
      q-btn(
        size="lg"
        unelevated
        no-caps
        to="/"
      )
        //- q-img(
        //-   src="../assets/images/ossph-logo-text-white.png"
        //-   style="width: 100px"
        //- )
        span.text-h4.ossph-font OSSPH
      q-space
      template(v-if="!isMobile")
        template(v-for="(item, index) in menu")
          template(v-if="item.link")
            q-btn(
              size="lg"
              target="_blank"
              style="min-width: 100px;"
              unelevated
              no-caps
              :icon="item.icon"
              :label="item.name"
              :href="item.link"
            ).q-mr-sm
          template(v-if="item.route")
            q-btn(
              size="lg"
              style="min-width: 100px;"
              unelevated
              no-caps
              :icon="item.icon"
              :label="item.name"
              :to="item.route"
            ).q-mr-sm

  q-drawer(
    v-if="isMobile"
    v-model="drawerLeft"
    side="left"
    class="bg-primary"
    bordered
    :width="300"
    :breakpoint="500"
  )
    q-list
      template(v-for="(item, index) in menu")
        q-item(
          clickable
          v-ripple
          @click="onGoToPanel(item)"
        )
          q-item-section
            q-card(bordered flat)
              q-card-section {{item.name}}
  q-page-container#top
    router-view

  q-footer(style="height: 200px;").ossph-gradient-bg.q-pb-md.text-center.text-white
    q-toolbar.q-gutter-sm.q-my-lg.soc-med-toolbar
      q-btn(
        label="Discord"
        href="https://discord.com/servers/open-source-software-ph-905496362982981723"
        target="_blank"
        icon="fa-brands fa-discord"
        outline
        rounded
        no-caps
      ).btn-soc-med
      q-btn(
        label="Facebook"
        href="https://www.facebook.com/ossph.org"
        target="_blank"
        icon="fa-brands fa-facebook"
        outline
        rounded
        no-caps
      ).btn-soc-med
      q-btn(
        label="Twitter"
        href="https://twitter.com/OSSPhilippines"
        target="_blank"
        icon="fa-brands fa-twitter"
        outline
        rounded
        no-caps
      ).btn-soc-med
      q-btn(
        label="Press Kit"
        href="https://bit.ly/3xjDvN2"
        target="_blank"
        icon="fa fa-newspaper"
        outline
        rounded
        no-caps
      ).btn-soc-med
    p.text-body1
      | Copyright © {{new Date().getFullYear()}}
      br(v-if="isMobile")
      |  Open Source Software PH. All Rights Reserved.</template>

<script>
import { ref, inject, computed } from 'vue';
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';

export default {
  setup () {
    const smoothScroll = inject('smoothScroll');
    const $q = useQuasar();
    const isMobile = computed(() => $q.screen.lt.md);
    const router = useRouter();
    const header = ref(false);
    const footer = ref(false);
    const drawerLeft = ref(false);
    const menu = ref([
      {
        name: 'About Us',
        link: 'https://blog.ossph.org/ossph/',
      },
      {
        name: 'The Team',
        route: '/team',
      },
      {
        name: 'Projects',
        route: '/projects',
      },
      {
        name: 'Blog',
        link: 'https://blog.ossph.org',
      },
      {
        name: 'GitHub',
        icon: 'fa-brands fa-github',
        link: 'https://github.com/OSSPhilippines',
      },
    ]);

    if (isMobile.value) header.value = false;

    function onScroll (info) {
      if (info.position >= 150) {
        footer.value = true;
      } else {
        footer.value = false;
      }
      if (isMobile.value) {
        header.value = true;
        return;
      }
      if (info.position >= 150) {
        header.value = true;
      } else {
        header.value = false;
      }
    }

    function onScrollToTop () {
      smoothScroll({
        scrollTo: document.getElementById('top'),
        updateHistory: false,
      });
    }

    function onGoToPanel (card) {
      const panelId = card.panelId;
      drawerLeft.value = false;
      if (card.panelId) {
        smoothScroll({
          scrollTo: document.getElementById(panelId),
          updateHistory: false,
        });
      }
      if (card.route) router.push(card.route);
      if (card.link) window.open(card.link, '_blank').focus();
    }

    return {
      drawerLeft,
      footer,
      header,
      isMobile,
      menu,
      onScroll,
      onGoToPanel,
      onScrollToTop,
    };
  },
};
</script>

<style scoped>
.whole-bg {
  background: rgb(255,255,255);
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(227,249,255,1) 100%);
}

.soc-med-toolbar {
  justify-content: center;
  flex-wrap: wrap;
}

.btn-soc-med >>> span.q-btn__content {
  gap: 0.75rem;
}

.btn-soc-med >>> span.q-btn__content i.on-left {
  margin-right: 0;
}
</style>
