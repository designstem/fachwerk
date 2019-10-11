import Object2D from "./internal/Object2D.js";
import { color, parseCoords } from "../../../fachwerk.js"


export default {
  mixins: [Object2D],
  description: `

Displays a point in 2D space.

#### A single point

<f-scene grid>
  <f-point x="1" y="1" />
</f-scene>

#### Multiple points as a string

<f-scene grid>
  <f-point points="1 1, 1 -1; -1 -1; -1 1" />
</f-scene>

#### Multiple points calculated by a function

<f-scene grid>
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
    x: { default: 0, type: [Number,String] },
    y: { default: 0, type: [Number,String] },
    points: { default: '', type: [String, Number, Array, Object] },
    stroke: { default: "", type: String, description: '***DEPRECIATED:*** Use `fill` instead' },
    strokeWidth: { default: '', type: [Number,String], description: '***DEPRECIATED:*** Use `r` instead' },
    r: { default: 1.5, type: [Number,String] },
    fill: { default: "color('primary')", type: String },
    position: { default: '0 0', type: [String, Number, Object, Array] },
    rotation: { default: '0', type: [String, Number, Object, Array] },
    scale: { default: '1', type: [String, Number, Object, Array] },
    opacity: { default: 1, type: [Number,String] },
  },
  computed: {
    currentFillColor() {
      // TODO: remove stroke
      if (this.stroke) {
        return this.stroke
      }
      return this.fill == "color('primary')" ? color('primary') : this.fill
    },
    currentRadius() {
      return this.svgScale() * (1 / this.groupScale()) * (1 / this.scale) * (this.strokeWidth || this.r)
    },
    currentPoints() {
      return this.points ? parseCoords(this.points) : null;
    }
  },
  template: `
    <g :transform="transform">
      <f-circle
        v-if="currentPoints"
        v-for="(point,i) in currentPoints"
        :key="i"
        :points="[point,point]"
        :fill="currentFillColor"
        stroke="none"
        :r="currentRadius"
        :opacity="opacity"
      />
      <f-circle
        v-if="!currentPoints"
        :points="[[x, y],[x, y]]"
        :fill="currentFillColor"
        stroke="none"
        :r="currentRadius"
        :opacity="opacity"
      />
    </g>
    `
};
