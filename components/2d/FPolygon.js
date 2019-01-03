import { Object2D } from "./2d.js";
import { color } from "../../utils.js"

export default {
  mixins: [Object2D],
  tag: '2D',
  example: `
<f-scene>
  <f-grid />
  <f-polygon
    :points="[
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
    ]"
  />
  <f-polygon
    :points="[
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
    ]"
    :position="{ x: 1, y: 1 }"
    :rotation="{ z: 45 }"
    :scale="{ x: 0.2, y: 0.2 }"
  />
</f-scene>
  `,
  props: {
    points: { default: [], type: Array },
    stroke: { default: "color('primary')", type: String},
    strokeWidth: { default: 3, type: Number },
    fill: { default: "none", type: String },
    position: { default: () => ({}), type: Object },
    rotation: { default: () => ({}), type: Object },
    scale: { default: () => ({}), type: Object },
    opacity: { default: 1, type: [Number, String] },
  },
  computed: {
    strokeColor() {
      return this.stroke == "color('primary')" ? color('primary') : this.stroke
    }
  },
  template: `
    <f-line
      :points="points"
      :stroke="strokeColor"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
      :fill="fill"
      :transform="transform"
      :opacity="opacity"
      :closed="true"
    />
  `
};
