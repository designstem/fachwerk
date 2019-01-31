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
<div>

<f-scene>
  <f-rotation duration="10000">
    <f-grid />
    <f-axis />
    </f-rotation>
</f-scene>

<f-scene3>
  <f-rotation3 duration="10000">
    <f-grid3 />
    <f-axis3 />
  </f-rotation3>
</f-scene3>

</div>

`
});