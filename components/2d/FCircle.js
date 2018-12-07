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
  <f-circle />
  <f-circle
    :points="[{x: -0.5},{x: 0},{x: 0.5}]"
    :r="0.1"
  />
</f-scene>  
  `,
  props: {
    x: { default: 0, type: Number },
    y: { default: 0, type: Number },
    points: { default: () => [], type: Array },
    r: { default: 1, type: [Number,String] },
    stroke: { default: "color('primary')", type: String},
    strokeWidth: { default: 3, type: Number },
    fill: { default: 'none', type: String},
    position: { default: () => ({}), type: Object },
    rotation: { default: () => ({}), type: Object },
    scale: { default: () => ({}), type: Object },
    opacity: { default: 1, type: [Number,String] },
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
    <f-group>
    <circle
      v-if="currentPoints.length"
      v-for="p in currentPoints"
      :cx="p.x || x"
      :cy="p.y || y"
      :r="p.r || r"
      :stroke="p.stroke || strokeColor"
      :stroke-width="p.strokeWidth || strokeWidth"
      :fill="p.fill || fill"
      :transform="transform"
      :opacity="p.opacity || opacity"
    />
    <circle
      v-if="!currentPoints.length"
      :cx="x"
      :cy="y"
      :r="r"
      :stroke="strokeColor"
      :stroke-width="strokeWidth"
      :fill="fill"
      :transform="transform"
      :opacity="opacity"
    />
    </f-group>
  `


}