import { Object2D } from "./2d.js";
import { parseCoords } from "../../utils.js";

export default {
  mixins: [Object2D],
  tag: '2D',
  description: `
  `,
  example: `
  <f-scene>
  <f-grid />
  <f-line />
  <f-line
    :points="[
      { x: -1.5, y: -1 },
      { x: -1,   y: -1 },
      { x: -1.5, y: -0.5 },
    ]"
  />
  <f-line
    :points="[
      { x: -0.5, y: -1   },
      { x: 0,    y: -1   },
      { x: -0.5, y: -0.5 },
    ]"
    :closed="true"
  />
  <f-line
    :points="[
      { x: 0.5, y: -1   },
      { x: 1,   y: -1   },
      { x: 0.5, y: -0.5 },
    ]"
    :curved="true"
  />
  <f-line
    :points="[
      { x: 1.5, y: -1   },
      { x: 2,   y: -1   },
      { x: 1.5, y: -0.5 },
    ]"
    :closed="true"
    :curved="true"
  />
</f-scene>
  `,
  props: {
    x1: { default: 0, type: [Number,String] },
    y1: { default: 0, type: [Number,String] },
    x2: { default: 0, type: [Number,String] },
    y2: { default: 0, type: [Number,String] },
    points: { default: () => [], type: [Array,String] },
    stroke: { default: "var(--primary)", type: String },
    strokeWidth: { default: 3, type: Number },
    fill: { default: "none", type: String },
    closed: { default: false, type: Boolean },
    curved: { default: false, type: Boolean },
    tension: { default: false, type: [Boolean, Number] },
    opacity: { default: 1, type: Number },
    position: { default: () => ({}), type: Object },
    rotation: { default: () => ({}), type: Object },
    scale: { default: () => ({}), type: Object },
  },
  computed: {
    currentPoints() {
      if (typeof this.points == 'string') {
        return parseCoords(this.points)
      }
      if (Array.isArray(this.points) && this.points.length) {
        if (Array.isArray(this.points[0])) {
          return this.points.map(p => ({x: p[0],y: p[1]}))
        }
        return this.points
      }
      return this.points
    },
    path() {
      if (this.curved && this.closed) {
        return d3.line().x(d => d.x).y(d => d.y).curve(d3.curveCardinalClosed.tension(this.tension || 0))
      }
      if (this.curved && !this.closed) {
        return d3.line().x(d => d.x).y(d => d.y).curve(d3.curveCardinal.tension(this.tension || 0))
      }
      if (!this.curved && this.closed) {
        return d3.line().x(d => d.x).y(d => d.y).curve(d3.curveCardinalClosed.tension(this.tension || 1))
      } 
      return d3.line().x(d => d.x).y(d => d.y)
    }
  },
  template: `
    <g :transform="transform">
      <line
        v-if="!currentPoints.length"
        :x1="x1"
        :y1="y1"
        :x2="x2"
        :y2="y2"
        :stroke="stroke"
        :stroke-width="strokeWidth"
        stroke-linecap="round"
        stroke-linejoin="round"
        :fill="fill"
        :opacity="opacity"
      />
      <path
        v-if="currentPoints.length"
        :d="path(currentPoints)"
        :stroke="stroke"
        :stroke-width="strokeWidth"
        stroke-linecap="round"
        stroke-linejoin="round"
        :fill="fill"
        :opacity="opacity"
      />
    </g>
    `
};
