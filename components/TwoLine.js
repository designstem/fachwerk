import { Object2D } from "./internal/two.js";

export default {
  mixins: [Object2D],
  description: `
  `,
  example: `
<TwoScene>
  <TwoGrid />
  <TwoLine
    :points="[
      { x: -1.5, y: 0 },
      { x: -1, y: 0 },
      { x: -1.5, y: 1 },
    ]"
  />
  <TwoLine
    :points="[
      { x: -0.5, y: 0 },
      { x: 0, y: 0 },
      { x: -0.5, y: 1 },
    ]"
    :closed="true"
  />
  <TwoLine
    :points="[
      { x: 0.5, y: 0 },
      { x: 1, y: 0 },
      { x: 0.5, y: 1 },
    ]"
    :curved="true"
  />
  <TwoLine
    :points="[
      { x: 1.5, y: 0 },
      { x: 2, y: 0 },
      { x: 1.5, y: 1 },
    ]"
    :closed="true"
    :curved="true"
    :tension="3"
  />
</TwoScene>
  `,
  props: {
    points: { default: [], type: Array },
    stroke: { default: "var(--primary)", type: String },
    strokeWidth: { default: 3, type: Number },
    fill: { default: "none", type: String },
    closed: { default: false, type: Boolean },
    curved: { default: false, type: Boolean },
    tension: { default: false, type: [Number] },
    opacity: { default: 1, type: Number },
    position: { default: () => ({}), type: Object },
    rotation: { default: () => ({}), type: Object },
    scale: { default: () => ({}), type: Object },
  },
  computed: {
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
      <path
        :d="path(points)"
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
