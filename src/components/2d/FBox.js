import Object2D from "./internal/Object2D.js";
import { color, parseCoords } from "../../../fachwerk.js"
;

export default {
  mixins: [Object2D],
  description: `
Displays a 2D rectangle.

<f-scene grid>
  <f-box />
  <f-box
    points="-1 0, 0 0, 1 0"
    r="0.25"
    :stroke="color('red')"
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
    currentStrokeColor() {
      return this.stroke == "color('primary')" ? color("primary") : this.stroke;
    },
    currentStrokeWidth() {
      return this.strokeWidth * this.svgScale() * (1 / this.groupScale()) * (1 / this.scale)
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
      :stroke="currentStrokeColor"
      :stroke-width="currentStrokeWidth"
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
      :stroke="currentStrokeColor"
      :stroke-width="currentStrokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
      :fill="fill"
      :transform="transform"
      :opacity="opacity"
    />
  </g>
  `
};
