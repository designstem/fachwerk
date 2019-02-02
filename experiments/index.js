import { Init } from "../mixins.js";
import * as components from "../components.js";
import * as utils from "../utils.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

import FArc from './src/components/FArc.js'
Vue.component('FArc', FArc);

new Vue({
  components: { FArc },
  el: "#app",
  mixins: [Init],
  methods: { ...utils },
  template: `
  <div style="padding: var(--base4)">
  <f-slider set="c" from="1" to="64" integer />
  <f-scene grid>
    <f-arc
      v-for="(a,i) in range(0,360,360 / get('c',1))"
      :key="i"
      :fill="hsl(a)"
      stroke
      :start-angle="a"
      :end-angle="a + (360 / get('c',1))"
    />
  </f-scene>
  </div>
`
});