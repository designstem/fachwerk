import { get, set } from "../../../fachwerk.js";

export default {
  props: {
    theme: { default: "light", type: String },
  },
  data: () => ({
    showMenu: true,
    showEditor: true
  }),
  methods: { get, set },
  template: `
    <f-theme :theme="theme" style="display: flex;">
      <div
        v-if="get('menu',false)"
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
      <portal to="topleft" :order="-2">
        <a class="quaternary" @click="set('menu', !get('menu',false))"><f-menu-icon /></a>
      </portal>
      <portal to="topleft">
        <slot name="topleft" />
      </portal>
      <portal to="topright">
        <slot name="topright" />
      </portal>
      <f-layer />
    </f-theme>
      
  `
};
