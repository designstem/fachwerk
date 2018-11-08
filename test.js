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
  <f-line3
    :points="[
      { x: 1, y:  1, z: 0 },
      { x: 1, y:  0, z: 1 },
      { x: 1, y: -1, z: 0 },
      { x: 1, y: -2, z: 0 },
    ]"
    :stroke="color('red')"
    :opacity="0.2"
  />
  <f-polygon3 :fill="color('red')" :stroke="color('blue')" :opacity="0.2" />
</f-scene3>
</f-theme>
  `
});
