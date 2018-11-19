import Css from "../Css.js";

export default {
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
  data: () => ({ mouseX: 0, mouseY: 0, mousePressed: false }),
  methods: {
    onMousemove(e) {
      let svg = this.$refs.f_svg
      let container = this.$refs.f_svg_g
      
      let point = svg.createSVGPoint();
      point.x = e.clientX;
      point.y = e.clientY;
      let ctm = container.getScreenCTM();
      if ((ctm = ctm.inverse())) {
        point = point.matrixTransform(ctm);
      }
      this.mouseX = point.x;
      this.mouseY = point.y;
    }
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
        ref="f_svg"
        @mousemove="onMousemove"
        @touchmove="onMousemove"
        @mousedown="mousePressed = true"
        @touchstart="mousePressed = true"
        @mouseup="mousePressed = false"
        @touchend="mousePressed = false"
    >
      <g :transform="transform" ref="f_svg_g">
        <slot :value="[mouseX,mouseY,mousePressed]" />
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
}