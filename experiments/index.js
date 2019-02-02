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
  <f-slider set="c" from="8" to="64" integer />
  <f-scene grid>
    <f-group v-for="(a,i) in range(0,360,360 / get('c',8))" :key="i">
    <f-arc
      :fill="hsl(a,100,70)"
      stroke
      :start-angle="a"
      :end-angle="a + (360 / get('c',8))"
      r="1.2"
      inner-radius="1"
    />
    <f-arc
      :fill="hsl(a,100,50)"
      stroke
      :start-angle="a"
      :end-angle="a + (360 / get('c',8))"
      r="1"
      inner-radius="0.8"
    />
    <f-arc
      :fill="hsl(a,100,30)"
      stroke
      :start-angle="a"
      :end-angle="a + (360 / get('c',8))"
      r="0.8"
      inner-radius="0.6"
    />
    </f-group>
  </f-scene>
  </div>
`
});