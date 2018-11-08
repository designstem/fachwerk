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
  <f-theme theme="dark" style="padding: 2rem;">
    <f-rotation-data>
  <f-scene3 slot-scope="data">
  <f-grid3 :rotation="{x: data.values[1],y: data.values[0]}" />
  <f-line3 :rotation="{x: data.values[1],y: data.values[0]}"
    :points="[
      { x: 1, y:  1, z: 0 },
      { x: 1, y:  0, z: 1 },
      { x: 1, y: -1, z: 0 },
      { x: 1, y: -2, z: 0 },
    ]"
    :stroke="color('red')"
    :opacity="1"
  />
  <f-polygon3
    :rotation="{x: data.values[1],y: data.values[0]}"
    :fill="color('red')"
    :opacity="0.5"
  />
</f-scene3>
  </f-rotation-data>
</f-theme>
  `
});
