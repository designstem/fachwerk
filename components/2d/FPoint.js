import { Object2d } from "../../mixins.js";
import { color, parseCoords, log } from "../../utils.js"

export default {
  mixins: [Object2d],
  description: `

Description to be written.

#### A single point

<f-scene grid>
  <f-point x="1" y="1" />
</f-scene>

#### Multiple points as a comma-separated string

<f-scene grid>
  <f-point points="1 1, 1 -1, -1 -1, -1 1" />
</f-scene>

#### Multiple points calculated by a function

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
    points: { default: "", type: [String, Number, Array] },
    stroke: { default: "color('primary')", type: String },
    strokeWidth: { default: 3, type: Number },
    position: { default: '0 0', type: [String, Number, Object, Array] },
    rotation: { default: '0', type: [String, Number, Object, Array] },
    scale: { default: '1', type: [String, Number, Object, Array] },
    opacity: { default: 1, type: [Number,String] },
  },
  computed: {
    strokeColor() {
      return this.stroke == "color('primary')" ? color('primary') : this.stroke
    },
    currentPoints() {
      if (typeof this.points == 'string') {
        return parseCoords(this.points)
      } else
      if (Array.isArray(this.points) && this.points.length && Array.isArray(this.points[0])) {
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
