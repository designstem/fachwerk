import { Vue, get, set } from "../../../fachwerk.js";

export default {
  props: {
    theme: { default: "light", type: String },
    menu: { default: 'none', type: String }
  },
  data: () => ({
    showMenu: true,
    showEditor: true
  }),
  methods: { get, set },
  mounted() {
    if (this.menu !== 'none') {
      Vue.set(this.$global.$data.state, "menu", this.menu == 'show');
    }
  },
  template: `
    <f-theme v-show="menu !== 'none'" :theme="theme" style="display: flex; position: relative;">
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
          box-shadow: 0 8px 8px rgba(0,0,0,0.1);
        "
      >
        <slot name="menu" />
      </div>
      <div style="flex: 1">
        <slot name="content" />
      </div>
      <portal v-if="menu !== 'none'" to="topleft" :order="-2">
        <a class="quaternary" @click="set('menu', !get('menu',false))"><f-menu-icon /></a>
      </portal>
      <portal v-if="menu !== 'none' && get('menu', false)" to="bottomleft" :order="1">
        <a
          href="../"
          class="quaternary"
          style="background: var(--background)"
        >
          <f-leftarrow-icon />
          Back
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
