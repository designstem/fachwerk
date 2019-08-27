import { get } from "../../../fachwerk.js";

export default {
  props: {
    theme: { default: "light", type: String },
  },
  data: () => ({
    showMenu: true,
    showEditor: true
  }),
  methods: { get },
  template: `
    <f-theme :theme="theme" style="display: flex;">
      <div
        v-if="showMenu"
        style="
          position: sticky;
          min-width: 200px;
          height: 100vh;
          overflow: auto;
          background: var(--background);
          top: 0;
          padding-top: var(--base4);
        "
      >
        <slot name="menu" />
      </div>
      <div>
        <slot name="content" />
      </div>
      <portal to="topleft">
        <a class="quaternary" @click="showMenu = !showMenu"><f-menu-icon /></a>
      </portal>
      <f-layer />
    </f-theme>
      
  `
};
