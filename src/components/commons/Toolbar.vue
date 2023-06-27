<template>
<nav class="navbar bg-primary text-white">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 text-black">
        <template v-for="(menu, index) in menus" :key="index">
          <li>
            <nuxt-link v-if="menu.link" :href="menu.link" target="_blank">
              <i v-if="menu.icon" :class="`${menu.icon}`"/>
              {{menu.name}}
            </nuxt-link>

            <nuxt-link v-if="menu.route" :to="{ name: menu.route }">
              <i v-if="menu.icon" :class="`${menu.icon}`"/>
              {{menu.name}}
            </nuxt-link>
          </li>
        </template>
      </ul>
    </div>

    <nuxt-link
      class="btn btn-ghost text-4xl ossph-font"
      :to="{ name: 'index' }"
    >
      OSSPH
    </nuxt-link>
  </div>

  <div class="navbar-end hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <template v-for="(menu, index) in menus" :key="index">
        <li>
          <nuxt-link v-if="menu.link" :href="menu.link" target="_blank">
            <i v-if="menu.icon" :class="`${menu.icon}`"/>
            {{menu.name}}
          </nuxt-link>

          <nuxt-link v-if="menu.route" :to="{ name: menu.route }">
            <i v-if="menu.icon" :class="`${menu.icon}`"/>
            {{menu.name}}
          </nuxt-link>
        </li>
      </template>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  setup () {
    const menus = [
      {
        name: 'About Us',
        link: 'https://blog.ossph.org/ossph/',
      },
      {
        name: 'The Team',
        route: 'team',
      },
      {
        name: 'Projects',
        route: 'projects',
      },
      {
        name: 'Blog',
        link: 'https://blog.ossph.org/',
      },
      {
        name: 'GitHub',
        link: 'https://github.com/OSSPhilippines',
        icon: 'lab la-github-alt',
      },
    ];

    return {
      menus,
    };
  },
};
</script>

<style scoped>

</style>
