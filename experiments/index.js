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

<f-slider title="a" />

<small>You can also use arrow keys to set the value</small>

</div>

`
});