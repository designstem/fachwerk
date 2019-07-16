import { Vue, components, utils } from "../fachwerk.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

Vue.config.productionTip = false;
Vue.prototype.$global = new Vue({ data: { state: {} } });

new Vue({
  el: "#fachwerk",
  data: {
  },
  methods: {
    ...utils
  },
  computed: {},
  mounted() {
    Vue.prototype.$global.$on("edit", () => (this.preview = !this.preview));
  },
  template: `
    <f-theme>
      <f-header />
        <f-content-editor content="# Hello" />
      <f-footer />
    </f-theme>
  `
});
