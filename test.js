import * as components from "./framework.js";
import * as utils from "./utils.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

Vue.config.devtools = true;

new Vue({
  el: "#app",
  data: () => ({ inverted: false }),
  methods: utils,
  template: `
  <div style="margin: 2rem;">
    <h2>Test</h2>
    <f-scene>
      <f-circle :fill="blue()" />
    </f-scene>
  </div>
  `
});
