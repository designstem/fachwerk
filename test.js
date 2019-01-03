import * as components from "./framework.js";
import * as utils from "./utils.js";
import Init from "./components/Init.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

import { Object2D } from "./components/2d/2d.js";
import { range } from "./utils.js";
import { polarpoints } from "./utils.js";

const FMirrorY = {
  mixins: [Object2D],
  tag: `2D`,
  description: `
Mirrors children element around vertical y axis.
  `,
  example: `
<f-scene>
  <f-mirror-y>
    <f-box rotation="{z:10}" />
  </f-mirror-y>
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

    <f-group :clip-path="'url(#' + id + ')'">
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

const FMirrorX = {
  mixins: [Object2D],
  tag: `2D`,
  description: `
Mirrors children element around horizontal x axis.
  `,
  example: `
<f-scene>
  <f-mirror-x>
    <f-box rotation="{z:10}" />
  </f-mirror-x>
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
          :x="-r"
          :y="0"
          :width="r * 2"
          :height="r"
        />
      </clipPath>
    </defs>

    <f-group :clip-path="'url(#' + id + ')'">
      <slot :value="0" />
    </f-group>
    <f-group
      :clip-path="'url(#' + id + ')'"
      transform="scale(1,-1)"
    >
      <slot :value="1" />
    </f-group>

  </f-group>  
  `
};

Vue.component("FMirrorX", FMirrorX);
Vue.component("FMirrorY", FMirrorY);

new Vue({
  mixins: [Init],
  el: "#app",
  methods: { ...utils },
  data: { r: 1, r2: 0.5, count: 6 },
  template: `
<div>
  <f-scene grid>


  <f-mirror-y>
        <f-circle
          r="0.75"
          y="0.4"
          :fill="color('orange')"
        />
</f-mirror-y>
<f-circle
          r="0.75"
          y="0.4"
          :fill="color('red')"
        />
        
<rrect
          :x="-r"
          y="0.4"
          :width="r * 2"
          :height="r"
        />
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
