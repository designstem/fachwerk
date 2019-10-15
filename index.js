import { Vue, components, utils } from "./fachwerk.js";

import DocsHeader from "./docs/components/DocsHeader.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

Vue.prototype.$global = new Vue({ data: { state: {} } });

new Vue({
  el: "#fachwerk",
  components: { DocsHeader },
  methods: {
    ...utils
  },
  mounted() {
    this.set("componentCount", Object.keys(components).length);
  },
  template: `
  <div> 
    <docs-header style="
      position: sticky;
      top: 0;
      z-index: 1000;
    "/>
    <f-fetch src="./index.md" v-slot="{ value }">
      <f-content-editor2
        style="--base: 11px; --content-max-width: 1000px;"
        type="document"
        title="Frontpage"
        :content="value"
      />
    </f-fetch>
  </div>
  `
});
