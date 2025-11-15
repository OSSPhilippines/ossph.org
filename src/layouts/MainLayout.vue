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
        href="https://discord.gg/DvtqKrWb86"
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
      |  Open Source Software PH. All Rights Reserved.

  //- Scroll to top button - fixed position to float above footer
  q-btn(
    v-if="showScrollToTop"
    fab
    icon="keyboard_arrow_up"
    color="primary"
    @click="onScrollToTop"
    aria-label="Scroll to top"
    class="scroll-to-top-btn"
  )
</template>

<script>
import { ref, inject, computed } from 'vue'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const smoothScroll = inject('smoothScroll')
    const $q = useQuasar()
    const isMobile = computed(() => $q.screen.lt.md)
    const router = useRouter()
    const header = ref(false)
    const footer = ref(false)
    const drawerLeft = ref(false)
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
        name: 'Awesome',
        route: '/awesome',
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
    ])

    if (isMobile.value) header.value = false

    const showScrollToTop = ref(false)

    function onScroll(info) {
      if (info.position >= 150) {
        footer.value = true
        showScrollToTop.value = true
      } else {
        footer.value = false
        showScrollToTop.value = false
      }
      if (isMobile.value) {
        header.value = true
        return
      }
      if (info.position >= 150) {
        header.value = true
      } else {
        header.value = false
      }
    }

    function onScrollToTop() {
      // Only execute on client-side
      if (typeof window === 'undefined') return

      if (smoothScroll) {
        // Use smoothScroll to scroll to top (position 0)
        smoothScroll({
          scrollTo: 0,
          updateHistory: false,
        })
      } else {
        // Fallback to native smooth scroll
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

    function onGoToPanel(card) {
      drawerLeft.value = false

      // Handle route navigation with smooth scroll to top
      if (card.route) {
        router.push(card.route).then(() => {
          // Scroll to top after route navigation
          setTimeout(() => {
            onScrollToTop()
          }, 100)
        })
        return
      }

      // Handle panel ID scrolling (if panelId exists)
      if (typeof document !== 'undefined' && card.panelId) {
        const panelElement = document.getElementById(card.panelId)
        if (panelElement && smoothScroll) {
          smoothScroll({
            scrollTo: panelElement,
            updateHistory: false,
          })
        } else if (panelElement) {
          // Fallback to native smooth scroll
          panelElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
        return
      }

      // Handle external links
      if (typeof window !== 'undefined' && card.link) {
        try {
          const newWindow = window.open(card.link, '_blank')
          // Don't call `focus()` as it can trigger extension message channel errors
          if (newWindow) {
            newWindow.opener = null // Security best practice
          }
        } catch (err) {
          // Silently handle errors from browser extensions blocking `window.open`
          console.warn('Could not open link:', err)
        }
      }
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
      showScrollToTop,
    }
  },
}
</script>

<style scoped>
.whole-bg {
  background: rgb(255, 255, 255);
  background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(227, 249, 255, 1) 100%);
}

.soc-med-toolbar {
  justify-content: center;
  flex-wrap: wrap;
}

.btn-soc-med :deep(span.q-btn__content) {
  gap: 0.75rem;
}

.btn-soc-med :deep(span.q-btn__content i.on-left) {
  margin-right: 0;
}

.scroll-to-top-btn {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 2000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition:
    opacity 0.3s,
    transform 0.3s;
}

.scroll-to-top-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}
</style>
