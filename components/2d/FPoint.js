import { Object2D } from "./2d.js";
import { color } from "../../utils.js"

export default {
  mixins: [Object2D],
  tag: "2D",
  description: `
  `,
  example: `
<f-scene>
  <f-grid />
  <f-point
    :points="
      range(-4,4,0.05).map(x => ({ x, y: Math.cos(x) }))
    "
    :fill="color('red')"
  />
  <f-point
    :points="
      range(-4,4,0.05).map(x => ({ x, y: Math.sin(x) }))
    "
    :fill="color('blue')"
  />
</f-scene>
  `,
  props: {
    x: { default: 0, type: Number },
    y: { default: 0, type: Number },
    points: { default: [], type: Array },
    fill: { default: "color('primary')", type: String },
    strokeWidth: { default: 3, type: Number },
    position: { default: () => ({}), type: Object },
    rotation: { default: () => ({}), type: Object },
    scale: { default: () => ({}), type: Object },
    opacity: { default: 1, type: Number },
  },
  computed: {
    strokeColor() {
      return this.fill == "color('primary')" ? color('primary') : this.fill
    }
  },
  template: `
    <g :transform="transform">
      <f-line
        :points="[{x, y},{x, y}]"
        :stroke="strokeColor"
        :stroke-width="strokeWidth"
        stroke-linecap="round"
        stroke-linejoin="round"
        :opacity="opacity"
      />
      <f-line
        v-if="points.length"
        v-for="point in points"
        :points="[{x: point.x, y: point.y},{x: point.x, y: point.y}]"
        :stroke="strokeColor"
        :stroke-width="strokeWidth"
        stroke-linecap="round"
        stroke-linejoin="round"
        :opacity="opacity"
      />
    </g>
    `
};
