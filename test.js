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
<f-scene>
  <f-grid />
  <f-point
    :points="range(-4,4,0.05).map(x => ({ x, y: Math.cos(x) }))"
    :stroke="color('red')"
  />
  <f-point
    :points="range(-4,4,0.05).map(x => ({ x, y: Math.sin(x) }))"
    :stroke="color('blue')"
  />
</f-scene>
  <!--
  <f-theme theme="dark" style="padding: 2rem;">
  <f-rotation-data>
  <f-scene3 slot-scope="data">
  <f-grid3 :rotation="{x: data.values[1],y: data.values[0]}" opacity="0.2" />
  <f-hedron3
    :rotation="{x: data.values[1],y: data.values[0]}"
    :fill="color('red')"
    :stroke="color('white')"
    :opacity="1"
    :stroke-width="3"
    :height="2"
    :shading="true"
    :height-stroke-width="3"
  />
<f-box3 :rotation="{x: data.values[1],y: data.values[0]}" opacity="1" shading="true" />
</f-scene3>
  </f-rotation-data>
</f-theme>
-->
  `
});
