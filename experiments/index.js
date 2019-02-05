import { Init } from "../mixins.js";
import * as components from "../components.js";
import * as utils from "../utils.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

new Vue({
  el: "#app",
  mixins: [Init],
  methods: { ...utils },
  template: `
  <f-fetch url="./index.md">
    <f-content
      slot-scope="data"
      :content="data.value"
    />
  </f-fetch>
  `
});