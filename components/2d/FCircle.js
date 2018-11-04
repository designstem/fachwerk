import { Object2D } from "./2d.js";

export default {
  mixins: [Object2D],
  description: `
  `,
  example: `
<f-scene>
  <f-grid />
  <f-circle />
  <f-circle
    :points="[{x: -0.5},{x: 0},{x: 0.5}]"
    :r="0.1"
    fill="var(--red)"
  />
</f-scene>  
  `,
  props: {
    x: { default: 0, type: Number },
    y: { default: 0, type: Number },
    points: { default: [], type: Array },
    r: { default: 1, type: Number },
    stroke: { default: 'none', type: String},
    strokeWidth: { default: 3, type: Number },
    fill: { default: 'var(--primary)', type: String},
    position: { default: () => ({}), type: Object },
    rotation: { default: () => ({}), type: Object },
    scale: { default: () => ({}), type: Object },
    opacity: { default: 1, type: Number },
  },
  template: `
    <g>
    <circle
      v-if="points.length"
      v-for="p in points"
      :cx="p.x || x"
      :cy="p.y || y"
      :r="p.r || r"
      :stroke="p.stroke || stroke"
      :stroke-width="p.strokeWidth || strokeWidth"
      :fill="p.fill || fill"
      :transform="transform"
      :opacity="p.opacity || opacity"
    />
    <circle
      v-if="!points.length"
      :cx="x"
      :cy="y"
      :r="r"
      :stroke="stroke"
      :stroke-width="strokeWidth"
      :fill="fill"
      :transform="transform"
      :opacity="opacity"
    />
    </g>
  `


}