export default ({ app }) => {
  app.directive('colorize', {
    created (el, binding, vnode, prevVnode) {
      console.warn('🚀 ~ file: directives.js ~ line 4 ~ created ~ el', el);
      const { value } = binding;
      const wordsAndColors = value.map(item => {
        const [word, color] = item.split('::');
        return {
          word,
          color,
        };
      });
      let text = vnode.el.innerHTML || '';
      console.log('🚀 ~ file: directives.js ~ line 14 ~ created ~ text', text);
      wordsAndColors.forEach(item => {
        console.warn('item', item);
        const regex = new RegExp(item.word, 'gi');
        console.warn(regex);
        text = text.replace(regex, `<span style="color: ${item.color}">${item.word}</span>`);
      });
      console.warn('text', text);
      el.innerHTML = text;
    },
    // called right before the element is inserted into the DOM.
    beforeMount () {},
    // called when the bound element's parent component
    // and all its children are mounted.
    mounted () {
      console.warn('mounted');
    },
    // called before the parent component is updated
    beforeUpdate () {},
    // called after the parent component and
    // all of its children have updated
    updated () {},
    // called before the parent component is unmounted
    beforeUnmount () {},
    // called when the parent component is unmounted
    unmounted () {},

  });
};
