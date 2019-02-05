import { Object2d } from "../../../dist/mixins.js";
import { color, parseCoords } from "../../../dist/utils.js";

export default {
  mixins: [Object2d],
  description: `
Description to be written.

<f-scene>
  <f-grid />
  <f-box />
  <f-box
    :points="[{x: -1},{x: 0},{x: 1}]"
    :r="0.1"
    width="0.2"
    height="0.2"
  />
</f-scene>
  `,
  props: {
    x: { default: 0, type: [Number, String] },
    y: { default: 0, type: [Number, String] },
    points: { default: "", type: [String, Number, Array, Object] },
    width: { default: 1, type: [Number, String] },
    height: { default: 1, type: [Number, String] },
    r: { default: "", type: [Number, String] },
    stroke: { default: "color('primary')", type: String },
    strokeWidth: { default: 3, type: [Number, String] },
    fill: { default: "none", type: String },
    position: { default: "", type: [String, Number, Object, Array] },
    rotation: { default: "", type: [String, Number, Object, Array] },
    scale: { default: "1", type: [String, Number, Object, Array] },
    opacity: { default: 1, type: [Number, String] }
  },
  computed: {
    strokeColor() {
      return this.stroke == "color('primary')" ? color("primary") : this.stroke;
    },
    currentPoints() {
      return this.points ? parseCoords(this.points) : null;
    }
  },
  template: `
  <g>
    <rect
      v-if="currentPoints"
      v-for="p in currentPoints"
      :x="p[0] - ((r || width) / 2)"
      :y="p[1] - ((r || height) / 2)"
      :width="r || width"
      :height="r || height"
      :stroke="strokeColor"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
      :fill="fill"
      :transform="transform"
      :opacity="opacity"
    />
    <rect
      v-if="!currentPoints"
      :x="x - ((r || width) / 2)"
      :y="y - ((r || height) / 2)"
      :width="r || width"
      :height="r || height"
      :stroke="strokeColor"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
      :fill="fill"
      :transform="transform"
      :opacity="opacity"
    />
  </g>
  `
};
