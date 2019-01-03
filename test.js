import * as components from "./framework.js";
import * as utils from "./utils.js";
import Init from "./components/Init.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

import { Object2D } from "./components/2d/2d.js";
import { range } from "./utils.js";
import { polarpoints } from "./utils.js";

const FRepeatSlice = {
  mixins: [Object2D],
  tag: `2D`,
  description: `
Repeats clipped elements along the circle, rotating each towards the center of the circle.
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
  methods: { polarpoints, range },
  computed: {
    id() { return Math.random() }
  },
  template: `
  <f-group
    :transform="transform"
    :opacity="opacity"
  >
    <defs>
      <clipPath :id="id">
        <polygon
          :points="[
            {x: 0, y: 0},
            {x: polarpoints(count,r)[0].x, y: polarpoints(count,r)[0].y },
            {x: polarpoints(count,r)[1].x, y: polarpoints(count,r)[1].y }
          ].map(p => p.x + ',' + p.y).join(' ')"
        />
      </clipPath>
    </defs>
    <f-group
      v-for="(a,i) in range(0,360,360 / count)"
      :key="i"
      :rotation="{z: a}"
      :clip-path="'url(#' + id + ')'"
    >
      <slot :value="i" stroke="red" />
    </f-group>
  </f-group>  
  `
};

Vue.component("FRepeatSlice", FRepeatSlice);

new Vue({
  mixins: [Init],
  el: "#app",
  methods: { ...utils },
  data: { r: 1, count: 6 },
  template: `
<div>
<f-scene grid> 
  <f-group slot-scope="data2">
    <f-circle
      x="0.1"
      y="0.25"
      :r="0.46"
      :fill="color('orange')"
    />
    <f-circle
      x="-0.1"
      y="-0.25"
      :r="0.2"
      :fill="color('red')"
    />
  </f-group>
</f-scene>
<f-scene grid> 
    <f-repeat-hex step="1">
    <f-repeat-slice :count="3" r="3">
      <f-group slot-scope="data2">
        <f-circle
          x="0.1"
          y="0.25"
          :r="0.46"
          :fill="color('orange')"
        />
        <f-circle
          x="-0.1"
          y="-0.25"
          :r="0.2"
          :fill="color('red')"
        />
      </f-group>
    </f-repeat-slice>
  </f-repeat-hex>
</f-scene>
<f-scene grid> 
    <f-repeat-hex step="1">
    <f-repeat-slice :count="6" r="5">
      <f-group slot-scope="data2">
        <f-circle
          x="0.1"
          y="0.25"
          :r="0.46"
          :fill="color('orange')"
        />
        <f-circle
          x="-0.1"
          y="-0.25"
          :r="0.2"
          :fill="color('red')"
        />
      </f-group>
    </f-repeat-slice>
  </f-repeat-hex>
</f-scene>
<f-scene grid> 
    <f-repeat-hex step="1" :scale="{x: 1.5,y: 1.5}">
    <f-repeat-circle count="12" :scale="{x: 0.55,y: 0.55}">
    <f-repeat-slice :count="6" r="5">
      <f-group slot-scope="data2">
        <f-circle
          x="0.1"
          y="0.25"
          :r="0.46"
          :fill="color('orange')"
        />
        <f-circle
          x="-0.1"
          y="-0.25"
          :r="0.2"
          :fill="color('red')"
        />
      </f-group>
    </f-repeat-slice>
</f-repeat-circle>
  </f-repeat-hex>
</f-scene>
</div>
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
