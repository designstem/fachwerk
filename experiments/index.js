import { Init } from "../mixins.js";
import * as components from "../components.js";
import * as utils from "../utils.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

import FArc from './src/components/FArc.js'
Vue.component('FArc', FArc);

function colorblind(color) {
  return window.colorBlind.protanopia(color)
}

function hsl2rgb(h, s, l, a = 1) {
  return window._f_hslToRgb(h,s / 100, l / 100)
}
console.log(colorblind(utils.hsl(0,100,50)));

console.log(hsl2rgb(0,100,50))

new Vue({
  components: { FArc },
  el: "#app",
  mixins: [Init],
  methods: { ...utils, colorblind },
  template: `
  <f-theme theme="dark" style="padding: var(--base4)">
  <f-slider title="Slice count" set="c" from="8" to="64" integer />
  <f-scene width="100" height="100" grid>
    <f-group v-for="(count,i) in range(0,2)" :key="i">
    <f-arc
      v-for="(a,j) in range(0,360,360 / get('c',8))"
      :key="j"
      :fill="hsl(a,100,scale(count,0,2,30,70))"
      stroke
      :start-angle="a"
      :end-angle="a + (360 / get('c',8))"
      :r="scale(count,0,2,1,1.5)"
      :inner-radius="scale(count,0,2,1,1.5) - 0.25"
    />
    </f-group>
  </f-scene>
  <f-scene  width="100" height="100" grid>
    <f-group v-for="(count,i) in range(0,2)" :key="i">
    <f-arc
      v-for="(a,j) in range(0,360,360 / get('c',8))"
      :key="j"
      :fill="colorblind(hsl(a,100,scale(count,0,2,30,70)))"
      stroke
      :start-angle="a"
      :end-angle="a + (360 / get('c',8))"
      :r="scale(count,0,2,1,1.5)"
      :inner-radius="scale(count,0,2,1,1.5) - 0.25"
    />
    </f-group>
  </f-scene>
  </div>
</f-theme>
`
});