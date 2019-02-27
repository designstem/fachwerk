import { marked } from '../fachwerk.js'

export default {
  mounted() {
    //this.$el.getElementsByClassName("slot")[0].innerHTML;
  },
  data: () => ({ open: false }),
  template: `
    <div>
    <div
      v-if="open"
      style="
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        width:100px
      "
    >
      <slot />
    </div>
    <div
      @click="open = !open"
      style="
        position: fixed;
        top: 20px;
        right: 20px;
      "
    >
      Notes
    </div>
    </div>
  `
};
