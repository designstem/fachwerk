import { Init } from "../mixins.js";
import * as components from "../components.js";
import * as utils from "../utils.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

import FCanvas from './src/components/FCanvas.js'

new Vue({
  el: "#app",
  components: { FCanvas },
  mixins: [Init],
  methods: { ...utils },
  template: `
  <div style="padding: var(--base4)">
    <f-canvas />
  </div>
  `
});

