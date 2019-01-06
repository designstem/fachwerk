import { Init } from "../mixins.js";
import * as components from "../components.js";
import * as utils from "../utils.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

new Vue({
  // Attaching Vue to <div id="app"></div>
  el: "#app",

  // Adding a mixin
  mixins: [Init],

  // Making utilities accessible to templates
  methods: { ...utils },

  // Fetching the index.md and rendering it
  template: `                         
  <f-fetch-data url="./test.md">
    <f-content slot-scope="data" :content="data.value" :slides="true" />
  </f-fetch-data>
`
});