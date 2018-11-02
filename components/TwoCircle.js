import { Object2D } from "./internal/two.js";

export default {
  mixins: [Object2D],
  description: `
Sounds like [Zeit](https://www.youtube.com/watch?v=rjvF36gzLF8).  
  `,
  example: `
<TwoScene>
  <TwoGrid />
  <TwoCircle
    :position="{ x: 1, y: 1 }"
    :rotation="{ z: 45 }"
    :scale="{ x: 0.25, y: 0.25 }"
  />
  <TwoCircle
    :points="[{x: -1},{x: 0},{x: 1}]"
    :r="0.25"
    fill="var(--red)"
  />
</TwoScene>  
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