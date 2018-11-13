import { color, cpoints } from "../../utils.js";
import { Object2D } from "./2d.js";

export default {
  mixins: [Object2D],
  tag: '2D',
  description: `
  `,
  example: `
<f-scene>
  <f-regularpolygon />
  <f-regularpolygon :count="3" />
</f-scene>
  `,
  props: {
    count: { default: 6, type: Number },
    r: { default: 1, type: Number },
    stroke: { default: "color('primary')", type: String},
    strokeWidth: { default: 3, type: Number },
    fill: { default: "none", type: String },
    position: { default: () => ({}), type: Object },
    rotation: { default: () => ({}), type: Object },
    scale: { default: () => ({}), type: Object },
    opacity: { default: 1, type: Number },
  },
  methods: { cpoints },
  computed: {
    strokeColor() {
      return this.stroke == "color('primary')" ? color('primary') : this.stroke
    }
  },
  template: `
    <f-polygon
      :points="cpoints(count,r)"
      :stroke="strokeColor"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
      :fill="fill"
      :transform="transform"
      :opacity="opacity"
    />
  `
};
