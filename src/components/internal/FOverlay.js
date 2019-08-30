
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
    <div style="
      position: fixed;
      top: 0;
      right: 0; 
      bottom: 0;
      background: var(--white);
      border-left: 2px solid var(--primary);
      overflowY: auto;
    "
    :style="{
      width: currentSize
    }"
  >
      <slot />
    </div>
  </portal>
  `
};
