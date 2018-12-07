import { Object2D } from "./2d.js";
import { color, parseCoords } from "../../utils.js"

export default {
  mixins: [Object2D],
  tag: '2D',
  description: `
  `,
  example: `
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
    x: { default: 0, type: Number },
    y: { default: 0, type: Number },
    points: { default: [], type: Array },
    r: { default: null, type: Number },
    width: { default: 1, type: Number },
    height: { default: 1, type: Number },
    stroke: { default: "color('primary')", type: String},
    strokeWidth: { default: 3, type: Number },
    fill: { default: "none", type: String },
    position: { default: () => ({}), type: Object },
    rotation: { default: () => ({}), type: Object },
    scale: { default: () => ({}), type: Object },
    opacity: { default: 1, type: Number },
  },
  computed: {
    strokeColor() {
      return this.stroke == "color('primary')" ? color('primary') : this.stroke
    },
    currentPoints() {
      if (typeof this.points == 'string') {
        return parseCoords(this.points)
      }
      if (Array.isArray(this.points) && this.points.length) {
        return parseCoords(this.points)
      }
      return this.points
    },
  },
  template: `
  <g>
    <rect
      v-if="currentPoints.length"
      v-for="p in currentPoints"
      :x="p.x ? p.x - ((p.width ? p.width : width)  / 2) : x - (width / 2)"
      :y="p.y ? p.y - ((p.width ? p.width : width) / 2) : y - (width / 2)"
      :width="p.r || p.width || r || width"
      :height="p.r || p.height || r || height"
      :stroke="p.stroke || strokeColor"
      :stroke-width="p.strokeWidth || strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
      :fill="p.fill || fill"
      :transform="transform"
      :opacity="p.opacity || opacity"
    />
    <rect
      v-if="!currentPoints.length"
      :x="x - (width / 2)"
      :y="y - (width / 2)"
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