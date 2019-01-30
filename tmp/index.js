import { Init } from "../mixins.js";
import * as components from "../components.js";
import * as utils from "../utils.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

new Vue({
  el: "#app",
  components: { },
  mixins: [Init],
  methods: { ...utils },
  template: `
<div>

<f-slider set="a" />

{{ get('a') }}

<br />

<f-artboard><circle cx="50" cy="50" :r="get('a',1)" /></f-artboard>
<br>

</div>

`
});