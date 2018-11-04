import Css from "../Css.js";

export default {
  mixins: [Css],
  description: `
A simple 2D scene with some tweaks to regular SVG document.

Note that **Y axis is flipped** and <code>x</code> and <code>y</code> span from <code>-2</code> to <code>2</code> to work same way as **ThreeScene**.
`,
  example: `
<f-scene>
  <circle fill="var(--primary)" r="1" />
  <circle
    cx="1"
    cy="1"
    fill="var(--red)"
    r="0.1"
  />
</f-scene>
  `,
  props: {
    size: { default: 250, type: Number },
    innerSize: { default: 4, type: Number }
  },
  computed: {
    viewBox() {
      return `-${this.innerSize / 2} -${this.innerSize / 2} ${this.innerSize} ${this.innerSize}`;
    }
  },
  template: `
    <svg
        :width="size"
        :height="size"
        :view-box.camel="viewBox"
        class="two"
    >
      <g transform="scale(1,-1)">
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
