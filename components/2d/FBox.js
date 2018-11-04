import { Object2D } from "../internal/two.js";

export default {
  mixins: [Object2D],
  description: `
 Kazimir Malevich must be proud.  
  `,
  example: `
<f-scene>
  <f-grid />
  <f-box />
  <f-box
    :points="[{x: -1},{x: 0},{x: 1}]"
    :r="0.1"
    width="0.2"
    height="0.2"
    fill="var(--red)"
  />
</f-scene>
  `,
  props: {
    x: { default: 0, type: Number },
    y: { default: 0, type: Number },
    points: { default: [], type: Array },
    width: { default: 1, type: Number },
    height: { default: 1, type: Number },
    stroke: { default: 'none', type: String},
    strokeWidth: { default: 3, type: Number },
    fill: { default: "var(--primary)", type: String },
    position: { default: () => ({}), type: Object },
    rotation: { default: () => ({}), type: Object },
    scale: { default: () => ({}), type: Object },
    opacity: { default: 1, type: Number },
  },
  template: `
  <g>
    <rect
      v-if="points.length"
      v-for="p in points"
      :x="p.x ? p.x - ((p.width ? p.width : width)  / 2) : x - (width / 2)"
      :y="p.y ? p.y - ((p.width ? p.width : width) / 2) : y - (width / 2)"
      :width="p.width || width"
      :height="p.height || height"
      :stroke="p.stroke || stroke"
      :stroke-width="p.strokeWidth || strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
      :fill="p.fill || fill"
      :transform="transform"
      :opacity="p.opacity || opacity"
    />
    <rect
      v-if="!points.length"
      :x="x - (width / 2)"
      :y="y - (width / 2)"
      :width="width"
      :height="height"
      :stroke="stroke"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
      :fill="fill"
      :transform="transform"
      :opacity="opacity"
    />
  </g>
  `
};