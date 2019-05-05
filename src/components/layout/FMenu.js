import { Vue } from "../../../fachwerk.js"

export default {
  description: `
Displays navigation menu.

<f-menu>

### Here is a navigation menu

</f-menu>
  `,
  props: {
    src: { default: './menu.md', type: String },
  },
  data: () => ({ open: false }),
  mounted() {
    Vue.prototype.$global.$on('menu', open => this.open = open || true)
  },
  template: `
  <f-sidebar
    :open="open"
    :src="src"
    orientation="left"
    width="33vw"
    style="
      position: absolute;
      z-index: 100000;
      left: calc(var(--base) * 1.5);
      top: calc(var(--base) * 1.5);
      cursor: pointer;
    "
  >
    <a slot="button" class="quaternary" style="padding: 0 4px"><f-menu-icon /></a>
    <slot />
  </f-sidebar>
  `
};
