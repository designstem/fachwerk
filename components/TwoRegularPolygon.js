import TwoPolygon from "./TwoPolygon.js"
import { cpoints } from "../utils.js";
import { Object2D } from "./internal/two.js";

export default {
  mixins: [Object2D],
  description: `
  `,
  example: `
<AnimeData :to="16">
  <TwoScene slot-scope="{value}">
    <TwoRegularPolygon
      :count="value"
    />
    <TwoRegularPolygon
      :count="value"
      :position="{ x: 1, y: 1 }"
      :rotation="{ z: 45 }"
      :scale="{ x: 0.2, y: 0.2 }"
    />
  </TwoScene>
</AnimeData>
  `,
  components: { TwoPolygon },
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
    <TwoPolygon
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
