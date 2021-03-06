import Object2D from "./internal/Object2D.js";
import { color, polarpoints, positionTransform } from "../../../fachwerk.js";

export default {
  mixins: [Object2D],
  description: `
Displays a \`count\`-sided regular polygon.

<f-scene grid>
  <f-regularpolygon />
  <f-regularpolygon
    count="3"
    :stroke="color('red')"
  />
</f-scene>
  `,
  props: {
    x: { default: "", type: [Number, String] },
    y: { default: "", type: [Number, String] },
    count: { default: 6, type: [Number, String] },
    r: { default: 1, type: [Number, String] },
    stroke: { default: "color('primary')", type: String },
    strokeWidth: { default: 3, type: [Number, String] },
    fill: { default: "none", type: String },
    position: { default: "0 0", type: [String, Number, Object, Array] },
    rotation: { default: "0", type: [String, Number, Object, Array] },
    scale: { default: "1", type: [String, Number, Object, Array] },
    opacity: { default: 1, type: [Number, String] },
    multiply: { default: false, type: Boolean }
  },
  methods: { polarpoints, positionTransform },
  computed: {
    currentStrokeColor() {
      return this.stroke == "color('primary')" ? color("primary") : this.stroke;
    },
    currentStrokeWidth() {
      return (
        this.strokeWidth *
        this.svgScale() *
        (1 / this.groupScale()) *
        (1 / this.scale)
      );
    },
    currentPoints() {
      return this.points ? parseCoords(this.points) : null;
    }
  },
  template: `
    <f-group :transform="transform">
      <f-polygon
        :points="polarpoints(count,r)"
        :stroke="currentStrokeColor"
        :stroke-width="strokeWidth"
        stroke-linecap="round"
        stroke-linejoin="round"
        :fill="fill"
        :transform="positionTransform([[x || 0, y || 0]])"
        :opacity="opacity"
        :style="{ mixBlendMode: multiply ? 'multiply' : ''}"
      />
    </f-group>
  `
};
