import { Object2d, parseCoords } from "../../mixins.js";

export default {
  mixins: [Object2d],
  description: `

Description to be written.

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
    points: { default: "", type: [String, Number, Array] },
    stroke: { default: "var(--primary)", type: String },
    strokeWidth: { default: 3, type: [Number,String] },
    fill: { default: "none", type: String },
    closed: { default: false, type: Boolean },
    curved: { default: false, type: Boolean },
    tension: { default: false, type: [Boolean, Number] },
    position: { default: '0 0', type: [String, Number, Object, Array] },
    rotation: { default: '0', type: [String, Number, Object, Array] },
    scale: { default: '1', type: [String, Number, Object, Array] },
    opacity: { default: 1, type: [Number,String] },
  },
  computed: {
    currentPoints() {
      return this.points ? parseCoords(this.points) : null;
    },
    path() {
      if (this.curved && this.closed) {
        return d3.line().curve(d3.curveCardinalClosed.tension(this.tension || 0))
      }
      if (this.curved && !this.closed) {
        return d3.line().curve(d3.curveCardinal.tension(this.tension || 0))
      }
      if (!this.curved && this.closed) {
        return d3.line().curve(d3.curveCardinalClosed.tension(this.tension || 1))
      } 
      return d3.line()
    }
  },
  template: `
    <g :transform="transform">
      <path
        v-if="currentPoints"
        :d="path(currentPoints)"
        :stroke="stroke"
        :stroke-width="strokeWidth"
        stroke-linecap="round"
        stroke-linejoin="round"
        :fill="fill"
        :opacity="opacity"
      />
      <line
        v-if="!currentPoints"
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
    </g>
    `
};
