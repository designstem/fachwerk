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
    :tension="0"
  />
  <TwoLine
    :points="[
      { x: 1.5, y: 0 },
      { x: 2, y: 0 },
      { x: 1.5, y: 1 },
    ]"
    :closed="true"
    :tension="0"
  />
</TwoScene>
  `,
  props: {
    points: { default: [], type: Array },
    stroke: { default: "var(--primary)", type: String },
    closed: { default: false, type: Boolean },
    tension: { default: false, type: [Number,Boolean] },
    opacity: { default: 1, type: Number },
    position: { default: () => ({}), type: Object },
    rotation: { default: () => ({}), type: Object },
    scale: { default: () => ({}), type: Object },
  },
  computed: {
    path() {
      if (this.tension !== false && this.closed) {
        return d3.line().x(d => d.x).y(d => d.y).curve(d3.curveCardinalClosed.tension(this.tension))
      }
      if (this.tension !== false && !this.closed) {
        return d3.line().x(d => d.x).y(d => d.y).curve(d3.curveCardinal.tension(this.tension))
      }
      if (this.tension == false && this.closed) {
        return d3.line().x(d => d.x).y(d => d.y).curve(d3.curveCardinalClosed.tension(1))
      } 
      return d3.line().x(d => d.x).y(d => d.y)
    }
  },
  template: `
    <g :transform="transform">
      <path
        :d="path(points)"
        :stroke="stroke"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
        :opacity="opacity"
      />
    </g>
    `
};
