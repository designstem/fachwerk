import { Object2D } from "./2d.js";
import { color, parseCoords, log } from "../../utils.js"

export default {
  mixins: [Object2D],
  tag: "2D",
  description: `
  `,
  example: `
<f-scene grid>
  <f-point points="0 0, 0.5 0.5, 1 1" position="1" />
</f-scene>

<f-scene grid>
  <f-point
    :points="
      range(-4,4,0.05).map(x => ({ x, y: Math.cos(x) }))
    "
    :stroke="color('red')"
  />
  <f-point
    :points="
      range(-4,4,0.05).map(x => ({ x, y: Math.sin(x) }))
    "
    :stroke="color('blue')"
  />
</f-scene>
  `,
  props: {
    x: { default: 0, type: [Number,String] },
    y: { default: 0, type: [Number,String] },
    points: { default: () => [], type: [Array,String] },
    stroke: { default: "color('primary')", type: String },
    strokeWidth: { default: 3, type: Number },
    position: { default: () => ({}), type: [Object,String] },
    rotation: { default: () => ({}), type: [Object,String] },
    scale: { default: () => ({}), type: [Object,String] },
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
  methods: {
    log
  },
  template: `
    <g :transform="transform">
      <f-line
        v-if="!currentPoints.length"
        :points="[{x, y},{x, y}]"
        :stroke="strokeColor"
        :stroke-width="strokeWidth"
        stroke-linecap="round"
        stroke-linejoin="round"
        :opacity="opacity"
      />
      <f-line
        v-if="currentPoints.length"
        v-for="point,i in currentPoints"
        :key="i"
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
