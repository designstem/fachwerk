
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
    innerX: { default: 0, type: Number },
    innerY: { default: 0, type: Number },
    innerWidth: { default: null, type: Number },
    innerHeight: { default: null, type: Number },
    flipX: { default: false, type: Boolean },
    flipY: { default: false, type: Boolean }
  },
  computed: {
    viewBox() {
      return `${this.innerX} ${this.innerY} ${this.innerWidth || this.width} ${
        this.innerHeight || this.height
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
        class="f-svg"
        style="border: 1px solid red"
    >
      <g :transform="transform">
        <slot />
      </g>
    </svg>
  `,
  css: `
    .f-svg * {
      vector-effect: non-scaling-stroke;
    }
    .f-svg text {
      fill: var(--primary);
    }
  `
};

const FScene2 = {
  mixins: [Css],
  props: {
    width: { default: 250, type: Number },
    height: { default: 250, type: Number },
    grid: { default: false, type: Boolean }
  }, 
  template: `
  <f-svg 
    :width="width"
    :height="height"
    :inner-x="-2"
    :inner-y="-2"
    :inner-width="4"
    :inner-height="4"
    :flip-y="true"
    class="f-scene"
  >
  <f-grid2 v-if="grid" />
  <slot />
  </f-svg>
  `,
  css: `
  .f-scene text {
    font-size: 1.6%;
    transform: scale(1, -1);
    pointer-events: none;
  }
  `

}

const FBasegrid = {
  props: {
    innerX: { default: 0, type: Number },
    innerY: { default: 0, type: Number },
    innerWidth: { default: 250, type: Number },
    innerHeight: { default: 250, type: Number },
    step: { default: 25, type: Number },
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
        stroke="var(--primary)"
        :opacity="opacity"
      />
      <line
        v-for="(y,i) in range(innerY,innerY + innerHeight, step)"
        :key="i"
        :x1="innerX"
        :y1="y"
        :x2="innerX + innerWidth"
        :y2="y"
        stroke="var(--primary)"
        :opacity="opacity"
      />
    </f-group>
  `
}

const FGrid2 = {
  template: `
  <f-group>
    <f-basegrid
      :inner-x="-2"
      :inner-y="-2"
      :inner-width="4"
      :inner-height="4"
      :step="0.5"
    />
    <f-basegrid
      :inner-x="-2"
      :inner-y="-2"
      :inner-width="4"
      :inner-height="4"
      :step="2"
    />
  </f-group>
  `
}

const FArtboard2 = {
  props: {
    width: { default: 500, type: Number },
    height: { default: 500, type: Number },
    grid: { default: false, type: Boolean }
  }, 
  template: `
  <f-svg 
    :width="width"
    :height="height"
  >
  <f-basegrid 
    v-if="grid"
    :inner-width="width"
    :inner-height="height"
    :step="25"
  />
  <f-basegrid 
    v-if="grid"
    :inner-width="width"
    :inner-height="height"
    :step="100"
  />
  <slot />
  </f-svg>
  `
}

// Vue.component("f-svg", FSvg);
// Vue.component("f-scene2", FScene2);
// Vue.component("f-basegrid", FBasegrid);
// Vue.component("f-grid2", FGrid2);
// Vue.component("f-artboard2", FArtboard2);

new Vue({
  el: "#app",
  methods: utils,
  template: `
<f-theme theme="light">
<f-svg>
  <f-basegrid />
  <f-circle r="100" />
</f-svg>
<f-theme>
  `
});
