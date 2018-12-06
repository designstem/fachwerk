import * as components from "./framework.js";
import * as utils from "./utils.js";
for (const name in components) {
  Vue.component(name, components[name]);
}

Vue.config.devtools = true
new Vue({
  el: "#app",
  methods: utils,
  template: `
<div>
<f-animation-data>
<f-artboard grid slot-scope="{value}">
  <f-repeat-shift position="300 300" step="75" width="400" height="400">
    <f-regularpolygon opacity="0.5" :fill="color('yellow')" count="6" slot-scope="r" :rotation="{x:value}" r="100" />
  </f-repeat-grid>
</f-artboard>
</div>
  `
})
