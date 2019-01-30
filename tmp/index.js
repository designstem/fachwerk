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
<f-scene3 renderer="webgl">
  <f-rotation3>
  <f-lathe3
    count="16"
    points="1 1 ; -1 -1"
  />
  </f-rotation3>
  <f-rotation3 duration="5000">
  <f-lathe3
    count="16"
    points="1 1 ; -1 -1"
  />
  </f-rotation3>
</f-scene3>
`
});