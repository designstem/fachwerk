import { get } from "../../../fachwerk.js";

export default {
  props: {
    theme: { default: "light", type: String },
  },
  data: () => ({
    showMenu: true
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
        "
        @click="showMenu = false"
      >
        <slot name="menu_header" />
        <slot name="menu" />
      </div>
      <div>
        <slot name="content" />
      </div>
      <portal to="topleft">
        <a v-if="!showMenu" class="quaternary" @click="showMenu = true"><f-menu-icon /></a>
      </portal>
      <f-layer />
    </f-theme>
      
  `
};
