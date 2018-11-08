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
  <f-theme theme="dark" style="margin: 2rem;">
  <f-scene3>
  <f-grid3 />
  <f-polygon3 :fill="color('red')"
  />
</f-scene3>
</f-theme>
  `
});
