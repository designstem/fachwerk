import { Vue } from "../../../fachwerk.js";

export default {
  description: `
Displays speaker / teacher notes.

<f-notes>

#### A Note

> Here is a speaker note

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
    Vue.prototype.$global.$on("notes", () => (this.open = !this.open));
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
  >
      <a slot="button" :class="className">{{ title }}</a>
    <slot />
  </f-sidebar>
  `
};
