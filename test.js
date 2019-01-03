import * as components from "./framework.js";
import * as utils from "./utils.js";
import Init from "./components/Init.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

import { Object2D } from "./components/2d/2d.js";
import { range } from "./utils.js";
import { polarpoints } from "./utils.js";

const FRepeatSpin = {
  mixins: [Object2D],
  tag: `2D`,
  description: `
Repeats elements along the circle, rotating each towards the center of the circle.
  `,
  example: `
<f-scene>
  <f-repeat-spin>
    <f-box slot-scope="data" />
  </f-repeat-spin>
</f-scene>
  `,
  props: {
    count: { default: 6, type: [Number, String] },
    r: { default: 1, type: [Number, String] },
    position: { default: () => ({}), type: Object },
    rotation: { default: () => ({}), type: Object },
    scale: { default: () => ({}), type: Object },
    opacity: { default: 1, type: [Number, String] }
  },
  methods: { range },
  template: `
  <f-group
    :transform="transform"
    :opacity="opacity"
  >
    <f-group
      v-for="(a,i) in range(0,360,360 / count)"
      :key="i"
      :rotation="{z: a}"
    >
      <f-group :position="{x: r}">
        <slot :value="i" />
      </f-group>
    </f-group>
  </f-group>  
  `
};

const FRepeatCircle = {
  mixins: [Object2D],
  tag: `2D`,
  description: `
Repeats elements along the circle.
  `,
  example: `
<f-scene>
  <f-repeat-circle>
    <f-box slot-scope="data" />
  </f-repeat-circle>
</f-scene>
  `,
  props: {
    count: { default: 6, type: [Number, String] },
    r: { default: 1, type: [Number, String] },
    position: { default: () => ({}), type: Object },
    rotation: { default: () => ({}), type: Object },
    scale: { default: () => ({}), type: Object },
    opacity: { default: 1, type: [Number, String] }
  },
  methods: { polarpoints },
  template: `
  <f-group
    :transform="transform"
    :opacity="opacity"
  >
    <f-group
      v-for="(p,i) in polarpoints(count,r)"
      :key="i"
      :position="p"
    >
      <slot :value="i" />
    </f-group>
  </f-group>  
  `
};

Vue.component("FRepeatSpin", FRepeatSpin);
Vue.component("FRepeatCircle", FRepeatCircle);

new Vue({
  mixins: [Init],
  el: "#app",
  methods: { ...utils },
  template: `
<f-theme theme="dark">
<f-scene grid width="1000" height="1000">
  <f-repeat-hex step="1">
    <f-repeat-spin slot-scope="data" count="36" r="0.1">
      <f-regularpolygon stroke="white" :stroke-width="0.5" slot-scope="data" opacity="0.5" />
    </f-repeat-spin>
  </f-repeat-grid>
</f-scene>
</f-theme>
  `
});













/*
import Init from './components/Init.js'

new Vue({
  mixins: [Init],
  el: "#app",
  methods: { ...utils },
  data: { b: 0 },
  template: `
<div>
  <f-slider :value="b" @input="send('b',$event)" />
  <f-slider :value="get('a')" @input="set('a',$event)" />
  {{ get('a') }}
  {{ b }}
</div>
  `,
  mounted() {
    this.receive('b', b => this.b = parseInt(b))
  }
});

*/
