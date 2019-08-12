import { Vue } from "../../../fachwerk.js";

export default {
  description: `
Displays speaker / teacher notes.

Notes also respond to \`opennotes\` and \`closenotes\` events that trigger notes opening and closing.

<button v-on:click="send('opennotes')">Open notes</button>

<f-notes>

### I am a notes content

<button v-on:click="send('closenotes')">
  Close notes
</button>

</f-notes>
  `,
  props: {
    title: { default: "Teacher notes", type: String },
    width: { default: "33vw", type: String },
    /* @TODO: Remove this */
    className: { default: "quaternary", type: String }
  },
  data: () => ({ open: false }),
  mounted() {
    Vue.prototype.$global.$on("opennotes", () => this.open = true);
    Vue.prototype.$global.$on("closenotes", () => this.open = false);
  },
  // @TODO: Fix top calculation
  template: `
  <f-sidebar
    :open="open"
    :width="width"
    style="
      position: absolute;
      z-index: 10000;
      right: 95px;
      top: 12px;
    " 
    :style="{ '--sidebar-width': width }"
  >
      <a slot="button" :class="className">{{ title }}</a>
    <slot />
  </f-sidebar>
  `
};
