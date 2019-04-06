import { Css } from '../../../../fachwerk.js'

export default {
  mixins: [Css],
  props: {
    width: { default: 300, type: [Number,String] },
    height: { default: 300, type: [Number,String] },
    innerX: { default: 0, type: [Number,String] },
    innerY: { default: 0, type: [Number,String] },
    innerWidth: { default: null, type: [Number,String] },
    innerHeight: { default: null, type: [Number,String] },
    flipX: { default: false, type: Boolean },
    flipY: { default: false, type: Boolean }
  },
  slots: {
    mouse: {
      type: "object",
      description: "Mouse data as `mouse.x` `mouse.y` `mouse.pressed`"
    }
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
        xmlns="http://www.w3.org/2000/svg"
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
        <slot :mouse="{x:mouseX,y:mouseY,pressed: mousePressed}" />
      </g>
    </svg>
  `,
  css: `
    .f-svg + * {
      margin-top: var(--base2);
    }
    .f-svg + .f-svg,
    .f-svg + .f-svg + .f-svg,
    .f-svg + .f-svg + .f-svg + .f-svg {
      margin: 0;
    }
    .f-svg * {
      vector-effect: non-scaling-stroke;
    }
    .f-svg text {
      fill: var(--primary);
      font-family: var(--font-mono);
      font-size: var(--text-size);
      transform: var(--text-transform);
      pointer-events: none;
    }
    
  `
}