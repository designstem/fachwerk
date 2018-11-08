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
    <f-content-editor />
    <f-rotation-data>
  <f-scene3 slot-scope="data">
  <f-grid3 :rotation="{x: data.values[1],y: data.values[0]}" opacity="0" />
  <f-regularpolygon3
    :rotation="{x: data.values[1],y: data.values[0]}"
    :fill="color('red')"
    :stroke="color('white')"
    :opacity="0.5"
    :stroke-width="3"
    :height="1"
    :shading="true"
    :height-stroke-width="3"
  />
</f-scene3>
  </f-rotation-data>
</f-theme>
  `
});
