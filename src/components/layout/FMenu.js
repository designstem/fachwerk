import { Vue } from "../../../fachwerk.js"

export default {
  description: `
Displays a navigation menu. It can display inline content as shown here. Also the content can be fetched from local or remote file (using \`src\` prop).

Menu also responds to \`openmenu\` and \`closemenu\` events that trigger menu opening and closing.

<button v-on:click="send('openmenu')">Open menu</button>

<f-menu>

### I am a menu content

<button v-on:click="send('closemenu')">
  Close menu
</button>

</f-menu>

  `,
  props: {
    src: { default: '', type: String },
  },
  data: () => ({ open: false }),
  mounted() {
    Vue.prototype.$global.$on('openmenu', () => this.open = true)
    Vue.prototype.$global.$on('closemenu', () => {
      console.log('aaa');
      this.open = false
    })
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
