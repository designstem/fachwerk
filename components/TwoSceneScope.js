import Css from "./Css.js";

export default {
  mixins: [Css],
  name: "TwoSceneScope",
  description: `
**🔬 This component is experimental.**

<code>TwoScene</code> with mouse tracking!
`,
  example: `
<TwoSceneScope>  
  <g slot-scope="data">
    <circle
      :r="data.mouse.pressed ? 1.1 : 1"
      opacity="0.1"
      fill="var(--primary)"
      style="transition: all 100ms"
    />
    <circle
      :r="data.mouse.pressed ? 0.8 : 1"
      style="transition: all 100ms"
      fill="var(--primary)"
    />
    <circle
      :cx="data.mouse.x"
      :cy="data.mouse.y"
      :r="data.mouse.pressed ? 0.2 : 0.1"
      fill="var(--red)"
      style="transition: all 100ms"
    />
  </g>
</TwoSceneScope>
  `,
  props: {
    size: { default: 250, type: Number }
  },
  computed: {
    viewBox() {
      return `-2 -2 4 4`;
    }
  },
  data: () => ({ mouseX: 0, mouseY: 0, mousePressed: false }),
  methods: {
    onSceneMousemove(e) {
      let svg = this.$refs.svg;
      let point = svg.createSVGPoint();
      point.x = e.clientX;
      point.y = e.clientY;
      let ctm = this.$refs.container.getScreenCTM();
      if ((ctm = ctm.inverse())) {
        point = point.matrixTransform(ctm);
      }
      this.mouseX = point.x;
      this.mouseY = point.y;
    }
  },
  template: `
    <svg
        :width="size"
        :height="size"
        :view-box.camel="viewBox"
        class="two"
        @mousemove="onSceneMousemove"
        @mousedown="mousePressed = true"
        @mouseup="mousePressed = false"
        ref="svg"
    >
      <g transform="scale(1,-1)" ref="container">
        <slot name="content" />
        <slot :mouse="{ x: mouseX, y: mouseY, pressed: mousePressed }" />
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
