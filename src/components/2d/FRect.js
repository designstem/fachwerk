import Object2D from "./internal/Object2D.js";
import { color, parseCoords } from "../../../fachwerk.js";

export default {
  mixins: [Object2D],
  description: `
Displays a 2D rectangle.

<f-scene grid>
  <f-rect />
  <f-rect
    :stroke="color('red')"
    position="1 1"
    scale="0.5"
    corner-radius="0.3"
  />
</f-scene>
  `,
  props: {
    x: { default: 0, type: [Number, String] },
    y: { default: 0, type: [Number, String] },
    width: { default: 1, type: [Number, String] },
    height: { default: 1, type: [Number, String] },
    cornerRadius: { default: 0, type: [Number, String] },
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
  },
  template: `
  <rect
    :x="x"
    :y="y"
    :rx="cornerRadius"
    :ry="cornerRadius"
    :width="width"
    :height="height"
    :stroke="currentStrokeColor"
    :stroke-width="currentStrokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
    :fill="fill"
    :transform="transform"
    :opacity="opacity"
  />
  `
};
