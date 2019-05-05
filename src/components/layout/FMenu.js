import { Vue } from "../../../fachwerk.js"

export default {
  description: `
Displays navigation menu.

<f-menu>

### I am a menu content

<button v-on:click="send('menu')">Trigger menu</button>

</f-menu>

Displays a navigation menu. It can display inline content as shown here. Also the content can be fetched from local or remote file (using \`src\` prop).

Menu also responds to \`menu\` event that triggers menu opening and closing:

<button v-on:click="send('menu')">Trigger menu</button>


  `,
  props: {
    src: { default: '', type: String },
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
