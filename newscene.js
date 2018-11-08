import * as components from "./framework.js";
import * as utils from "./utils.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

Vue.config.devtools = true;

import Css from "./components/Css.js";

const FSvg = {
  mixins: [Css],
  props: {
    width: { default: 250, type: Number },
    height: { default: 250, type: Number },
    innerX: { default: -2, type: Number },
    innerY: { default: -2, type: Number },
    innerWidth: { default: 4, type: Number },
    innerHeight: { default: 4, type: Number },
    flipX: { default: false, type: Boolean },
    flipY: { default: true, type: Boolean }
  },
  computed: {
    viewBox() {
      return `${this.innerX} ${this.innerY} ${this.innerWidth} ${
        this.innerHeight
      }`;
    },
    transform() {
      return `scale(${this.flipX ? -1 : 1},${this.flipY ? -1 : 1})`;
    }
  },
  template: `
    <svg
        :width="width"
        :height="height"
        :view-box.camel="viewBox"
        class="two"
        style="border: 1px solid red"
    >
      <g :transform="transform">
        <slot />
      </g>
    </svg>
  `,
  css: `
    .two * {
      vector-effect: non-scaling-stroke;
    }
    .two text {
      font-size: 1.5%;
      transform: scale(1, -1);
      text-anchor: middle;
      pointer-events: none;
    }
  `
};

const FGridd = {
  props: {
    innerX: { default: -2, type: Number },
    innerY: { default: -2, type: Number },
    innerWidth: { default: 4, type: Number },
    innerHeight: { default: 4, type: Number },
    step: { default: 0.5, type: Number },
    opacity: { default: 0.15, type: Number }
  },
  methods: utils,
  template: `
    <f-group>
      <line
        v-for="(x,i) in range(innerX,innerX + innerWidth, step)"
        :key="i"
        :x1="x"
        :y1="innerY"
        :x2="x"
        :y2="innerY + innerHeight"
        :stroke="color('black')"
        :opacity="opacity"
      />
      <line
        v-for="(y,i) in range(innerY,innerY + innerHeight, step)"
        :key="i"
        :x1="innerX"
        :y1="y"
        :x2="innerX + innerWidth"
        :y2="y"
        :stroke="color('black')"
        :opacity="opacity"
      />
    </f-group>
  `
}
Vue.component("f-svg", FSvg);
Vue.component("f-gridd", FGridd);

new Vue({
  el: "#app",
  data: () => ({ inverted: false }),
  methods: utils,
  template: `
<f-svg
  :width="200"
  :height="200"
  :inner-x="-10"
  :inner-y="-10"
  :inner-width="20"
  :inner-height="20"
  :flipY="false"
>
  <f-gridd
    :inner-x="-10"
    :inner-y="-10"
    :inner-width="20"
    :inner-height="20"
  />
  <f-circle r="0.5" />
</f-svg>

  `
});
