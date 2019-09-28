
export default {
  props: {
    size: { default: 'narrow', type: String }
  },
  computed: {
    currentSize() {
      const sizeMap = { narrow: '33vw', half: '50vw', wide: '66vw' }
      return sizeMap[this.size] ? sizeMap[this.size] : sizeMap['narrow']
    }
  },
  template: `
  <portal to="overlay">
    <f-fade style="
      position: fixed;
      top: 0;
      right: 0; 
      bottom: 0;
      background: var(--white);
      overflowY: auto;
      box-shadow: -5px 0 10px rgba(0,0,0,0.15);
    "
    :style="{
      width: currentSize
    }"
  >
      <slot />
    </f-fade>
  </portal>
  `
};