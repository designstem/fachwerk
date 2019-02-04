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
  <div style="padding: var(--base4)">
    <f-canvas>
      <f-pixels :pixel="() => [random(0,100),0,0,255]" />
      <f-pixel x="150" y="150" fill="white" />
    </f-canvas>
  </div>
  `
});