import Css from "../Css.js";
import { range, rgb } from '../../utils.js'

export default {
  mixins: [Css],
  tag: '2D',
  description: `
`,
  example: `
<f-artboard>
  <circle fill="var(--primary)" r="100" />
</f-artboard>
  `,
  props: {
    width: { default: 500, type: Number },
    height: { default: 500, type: Number },
  },
  methods: { range, rgb },
  template: `
    <svg
        :width="width"
        :height="height"
        class="artboard"
    >
      <line
        v-for="(x,i) in range(0, width, 25)"
        :x1="x" :y1="0" :x2="x" :y2="height" 
        :stroke="rgb(0,0,0,i % 4 ? 0.1 : 0.2)"
      />
      <line
        v-for="(y,i) in range(0, width, 25)"
        :x1="0" :y1="y" :x2="width" :y2="y" 
        :stroke="rgb(0,0,0,i % 4 ? 0.1 : 0.2)"
      />
      <slot />
    </svg>
  `,
  css: `
    .artboard * {
      vector-effect: non-scaling-stroke;
    }
  `
};
