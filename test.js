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
    <f-scene3 >
      <f-triangle3 />
    </f-scene3>
  </div>
  `
});
