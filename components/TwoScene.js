import Css from "../mixins/Css.js";

export default {
  mixins: [Css],
  name: "TwoScene",
  description: `
A simple 2D scene with some tweaks to regular SVG document.

Note that **Y axis is flipped** and <code>x</code> and <code>y</code> span from <code>-2</code> to <code>2</code> to work same way as **ThreeScene**.
`,
  example: `
<TwoScene>
  <Anime :to="1" :alternate="true">
    <circle slot-scope={value} :r="value" />
  </Anime>
</TwoScene>
  `,
  props: { size: { default: 250 }, mouse: { default: false } },
  computed: {
    viewBox() {
      return `-2 -2 4 4`;
    }
  },
  data: () => ({ mouseX: 0, mouseY: 0 }),
  methods: {
    onSceneMousemove(e) {
      let svg = this.$refs.svg;
      let point = svg.createSVGPoint()
      point.x = e.clientX
      point.y = e.clientY
      let ctm = e.target.getScreenCTM();
      if (ctm = ctm.inverse()) {
        point = point.matrixTransform(ctm)
      }
      this.mouseX = point.x
      this.mouseY = point.y
    }
  },
  template: `
    <svg
        :width="size"
        :height="size"
        :view-box.camel="viewBox"
        class="two"
        @mousemove="onSceneMousemove"
        ref="svg"
    >
      <g transform="scale(1,-1)">
        <slot />
      </g>
      <circle v-if="mouse" :cx="mouseX" :cy="mouseY" r="0.1" />
    </svg>
  `,
  css: `
    .two * {
      vector-effect: non-scaling-stroke;
    }
  `
};
