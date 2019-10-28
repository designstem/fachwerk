import Object2D from "./internal/Object2D.js";
import { color, parseCoords } from "../../../fachwerk.js";

export default {
  mixins: [Object2D],
  example: `
Displays a triangle.

<f-scene grid>
  <f-triangle />
</f-scene>

<f-scene grid>
  <f-triangle points="0 0, 1 0, 0 1"/>
</f-scene>

<f-scene grid>
  <f-triangle
    x1="0" y1="0"
    x2="1" y2="0"
    x3="0" y3="1"
  />
</f-scene>
  `,
  props: {
    x: { default: "", type: [Number, String] },
    y: { default: "", type: [Number, String] },
    x1: { default: "", type: [Number, String] },
    y1: { default: "", type: [Number, String] },
    x2: { default: "", type: [Number, String] },
    y2: { default: "", type: [Number, String] },
    x3: { default: "", type: [Number, String] },
    y3: { default: "", type: [Number, String] },
    points: { default: "", type: [String, Number, Array] },
    count: { default: 6, type: [Number, String] },
    r: { default: 1, type: [Number, String] },
    stroke: { default: "color('primary')", type: String },
    strokeWidth: { default: 3, type: [String, Number] },
    fill: { default: "none", type: String },
    position: { default: "0 0", type: [String, Number, Object, Array] },
    rotation: { default: "0", type: [String, Number, Object, Array] },
    scale: { default: "1", type: [String, Number, Object, Array] },
    opacity: { default: 1, type: [Number, String] },
    multiply: { default: false, type: Boolean }
  },
  computed: {
    currentStrokeColor() {
      return this.stroke == "color('primary')" ? color("primary") : this.stroke;
    },
    hasEdges() {
      return (
        this.x1 !== "" &&
        this.y1 !== "" &&
        this.x2 !== "" &&
        this.y2 !== "" &&
        this.x3 !== "" &&
        this.y3 !== ""
      );
    },
    edges() {
      return [[this.x1, this.y1], [this.x2, this.y2], [this.x3, this.y3]];
    }
  },
  template: `
  <g>
    <f-line
      v-if="hasEdges && !points"
      :points="edges"
      :stroke="currentStrokeColor"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
      :fill="fill"
      :transform="transform"
      :opacity="opacity"
      :closed="true"
      :scale="scale"
      :multiply="multiply"
    />
    <f-line
      v-if="!hasEdges && points"
      :points="points"
      :stroke="currentStrokeColor"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
      :fill="fill"
      :transform="transform"
      :opacity="opacity"
      :closed="true"
      :scale="scale"
      :multiply="multiply"
    />
    <f-regularpolygon
      v-if="!hasEdges && !points"
      count="3"
      :x="x"
      :y="y"
      :r="r"
      :stroke="stroke"
      :stroke-width="strokeWidth"
      :fill="fill"
      :transform="transform"
      :opacity="opacity"
      :scale="scale"
      :multiply="multiply"
    />
  </g>
  `
};
