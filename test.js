import * as components from "./framework.js";
import * as utils from "./utils.js";
import Init from "./components/Init.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

import { Object2D } from "./components/2d/2d.js";
import { range } from "./utils.js";
import { polarpoints } from "./utils.js";

const FRepeatFlip = {
  mixins: [Object2D],
  tag: `2D`,
  description: `
Repeats clipped elements along the circle, rotating each towards the center of the circle.
  `,
  example: `
<f-scene grid>
  <f-repeat-slice>
    <f-box slot-scope="data" />
  </f-repeat-spin>
</f-scene>
  `,
  props: {
    r: { default: 1, type: [Number, String] },
    position: { default: () => ({}), type: Object },
    rotation: { default: () => ({}), type: Object },
    scale: { default: () => ({}), type: Object },
    opacity: { default: 1, type: [Number, String] }
  },
  methods: { polarpoints, range },
  computed: {
    id() { return 'id' + Math.random() }
  },
  template: `
  <f-group
    :transform="transform"
    :opacity="opacity"
  >
    <defs>
      <clipPath :id="id">
        <rect
          x="0"
          :y="-r"
          :width="r"
          :height="r * 2"
        />
      </clipPath>
    </defs>
    <f-group
      :clip-path="'url(#' + id + ')'"
    >
      <slot :value="0" />
    </f-group>
    <f-group
      :clip-path="'url(#' + id + ')'"
      transform="scale(-1,1)"
    >
      <slot :value="1" />
    </f-group>
  </f-group>  
  `
};

Vue.component("FRepeatFlip", FRepeatFlip);

new Vue({
  mixins: [Init],
  el: "#app",
  methods: { ...utils },
  data: { r: 1, count: 6 },
  template: `
<f-scene grid>
  <f-repeat-flip>
  <f-group slot-scope="data2">
        <f-circle
          x="0.1"
          y="0.25"
          :r="0.3"
          :fill="color('orange')"
        />
        <f-circle
          x="0.5"
          y="-0.25"
          :r="0.2"
          :fill="color('red')"
        />
      </f-group>

  </f-repeat-flip>
</f-scene>
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
