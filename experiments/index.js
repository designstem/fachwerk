import { Init } from "../mixins.js";
import * as components from "../components.js";
import * as utils from "../utils.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

import FCanvas from './src/components/FCanvas.js'
import FPixel from './src/components/FPixel.js'
import FPixels from './src/components/FPixels.js'

new Vue({
  el: "#app",
  components: { FCanvas, FPixel, FPixels },
  mixins: [Init],
  methods: { ...utils },
  template: `
  <div style="padding: var(--base4)">
    <f-canvas>
      <f-pixels />
    </f-canvas>
  </div>
  `
});

/*

<!--f-pixel
          v-for="y in 300"
          :key="join(x,'-',y)"
          :x="x"
          :y="y"
          :fill="hsl(random(0,360))"
        /-->
        */