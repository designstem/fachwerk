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
    >
      <g :transform="transform" ref="f_svg_g">
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
}