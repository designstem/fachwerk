import { cpoints } from "../../utils.js";
import { Object2D } from "./2d.js";

export default {
  mixins: [Object2D],
  tag: '2D',
  description: `
  `,
  example: `
<f-scene>
  <f-regularpolygon />
  <f-regularpolygon
    :r="0.5"
    :count="5"
    fill="var(--red)"
  />
</f-scene>
  `,
  props: {
    count: { default: 6, type: Number },
    r: { default: 1, type: Number },
    stroke: { default: "none", type: String },
    strokeWidth: { default: 3, type: Number },
    fill: { default: "var(--primary)", type: String },
    position: { default: () => ({}), type: Object },
    rotation: { default: () => ({}), type: Object },
    scale: { default: () => ({}), type: Object },
    opacity: { default: 1, type: Number },
  },
  methods: { cpoints },
  template: `
    <f-polygon
      :points="cpoints(count,r)"
      :stroke="stroke"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
      :fill="fill"
      :transform="transform"
      :opacity="opacity"
    />
  `
};
