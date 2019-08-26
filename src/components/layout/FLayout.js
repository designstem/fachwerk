import { get } from "../../../fachwerk.js";

export default {
  props: {
    theme: { default: "light", type: String },
    menu: { default: true, type: Boolean }
  },
  methods: { get },
  template: `
    <f-theme :theme="theme" style="display: flex;">
      <div style="
        position: sticky;
        min-width: 200px;
        height: 100vh;
        overflow: auto;
        background: var(--background);
        top: 0;
      "
        v-if="get('menu', true)"
      >
        <slot name="menu_header" />
        <slot name="menu" />
      </div>
      <div v-if="!get('menu', true)"
        class="closedmenu"
        style="
          min-width: 40px;
          height: 100vh;
          position: sticky;
          top: 0;
          cursor: pointer;
        "
        @click="set('menu', true)"
      >
        <f-inline style="margin-top: var(--base); --inline-gap: 0; --inline-justify: center">
          <a class="quaternary"><f-menu-icon /></a>
        </f-inline>
      </div>
      <div>
        <slot name="content" />
      </div>
      <portal to="topright">
        <slot name="topright" />
      </portal>
      <f-layer />
    </f-theme>
      
  `
};
