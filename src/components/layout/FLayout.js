import { Vue, get, set } from "../../../fachwerk.js";

export default {
  props: {
    theme: { default: "light", type: String },
    menu: { default: false, type: Boolean }
  },
  data: () => ({
    showMenu: true,
    showEditor: true
  }),
  methods: { get, set },
  mounted() {
    Vue.set(this.$global.$data.state, "menu", this.menu);
  },
  template: `
    <f-theme :theme="theme" style="display: flex;">
      <div
        v-if="get('menu',false)"
        style="
          position: sticky;
          width: 250px;
          height: 100vh;
          overflow: auto;
          background: var(--background);
          top: 0;
          padding: var(--base5) 0 var(--base5) 0;
        "
      >
        <slot name="menu" />
      </div>
      <div style="flex: 1">
        <slot name="content" />
      </div>
      <portal to="topleft" :order="-2">
        <a class="quaternary" @click="set('menu', !get('menu',false))"><f-menu-icon /></a>
      </portal>
      <portal v-if="get('menu', false)" to="bottomleft" :order="1">
        <a
          href="../"
          class="quaternary"
        >
          <f-leftarrow-icon />
          Back to projects
        </a>
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
