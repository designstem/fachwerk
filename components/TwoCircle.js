import { Object2D } from "./internal/two.js";

export default {
  mixins: [Object2D],
  description: `
  `,
  example: `
<TwoScene>
  <TwoGrid />
  <TwoCircle />
  <TwoCircle
    :points="[{x: -0.5},{x: 0},{x: 0.5}]"
    :r="0.1"
  />
</TwoScene>  
  `,
  props: {
    x: { default: 0, type: Number },
    y: { default: 0, type: Number },
    points: { default: [], type: Array },
    r: { default: 1, type: Number },
    stroke: { default: 'var(--primary)', type: String},
    strokeWidth: { default: 3, type: Number },
    fill: { default: 'none', type: String},
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