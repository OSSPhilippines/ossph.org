<template>
  <!-- <div :data-theme="theme"> -->
  <div>
    <toolbar/>
    <slot />
    <commons-footer/>
  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
import CommonsFooter from '@/components/commons/Footer.vue';
import Toolbar from '@/components/commons/Toolbar.vue';
const THEMES = [
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
];
export default {
  components: {
    CommonsFooter,
    Toolbar,
  },
  setup () {
    const theme = ref(null);
    watch(theme, (value) => {
      localStorage.setItem('daisyui-theme', value);
    });
    onMounted(() => {
      theme.value = localStorage.getItem('daisyui-theme') || 'dark';
    });
    return {
      theme,
      themes: THEMES,
    };
  },
};
</script>
