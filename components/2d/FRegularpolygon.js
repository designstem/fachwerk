import FPolygon from "./FPolygon.js"
import { cpoints } from "../../utils.js";
import { Object2D } from "../internal/two.js";

export default {
  mixins: [Object2D],
  components: { FPolygon },
  description: `
  `,
  example: `
<f-animation-data :to="16">
  <f-scene slot-scope="data">
    <f-regularpolygon
      :count="data.value"
    />
    <f-regularpolygon
      :count="value"
      :position="{ x: 1, y: 1 }"
      :rotation="{ z: 45 }"
      :scale="{ x: 0.2, y: 0.2 }"
    />
  </f-scene>
</f-animation-data>
  `,
  props: {
    count: { default: 6, type: Number },
    radius: { default: 1, type: Number },
    stroke: { default: "var(--primary)", type: String },
    strokeWidth: { default: 3, type: Number },
    fill: { default: "none", type: String },
    position: { default: () => ({}), type: Object },
    rotation: { default: () => ({}), type: Object },
    scale: { default: () => ({}), type: Object },
    opacity: { default: 1, type: Number },
  },
  methods: { cpoints },
  template: `
    <f-polygon
      :points="cpoints(count,radius)"
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
