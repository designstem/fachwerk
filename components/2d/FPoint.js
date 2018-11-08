import { Object2D } from "./2d.js";

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
    points: { default: [], type: Array },
    stroke: { default: "var(--primary)", type: String },
    strokeWidth: { default: 3, type: Number },
    fill: { default: "none", type: String },
    opacity: { default: 1, type: Number },
    position: { default: () => ({}), type: Object },
    rotation: { default: () => ({}), type: Object },
    scale: { default: () => ({}), type: Object }
  },
  template: `
    <g :transform="transform">
      <f-line
        v-for="point in points"
        :points="[{x: point.x, y: point.y},{x: point.x, y: point.y}]"
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
