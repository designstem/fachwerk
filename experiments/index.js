import { Init } from "../mixins.js";
import * as components from "../components.js";
import * as utils from "../utils.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

import FCanvas from './src/components/FCanvas.js'
import FPixel from './src/components/FPixel.js'

new Vue({
  el: "#app",
  components: { FCanvas, FPixel },
  mixins: [Init],
  methods: { ...utils },
  template: `
  <div style="padding: var(--base4)">
    <f-canvas>
      <template v-for="x in 300" :key="x">
        <f-pixel
          v-for="y in 300"
          :key="join(x,'-',y)"
          :x="x"
          :y="y"
          :fill="hsl(random(0,360))"
        />
      </template>
    </f-canvas>
  </div>
  `
});

