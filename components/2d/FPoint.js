import { Object2D } from "./2d.js";

export default {
  mixins: [Object2D],
  tag: '2D',
  description: `
  `,
  example: `
<f-scene>
  <f-grid />
  <f-point
    :points="[
      { x: -1.5, y: 0 },
      { x: -1,   y: 0 },
      { x: -1.5, y: 0.5 },
    ]"
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
    scale: { default: () => ({}), type: Object },
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
