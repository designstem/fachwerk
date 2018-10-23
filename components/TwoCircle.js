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
    :scale="{ x: 0.2, y: 0.2 }"
  />
</TwoScene>  
  `,
  props: {
    r: { default: 1, type: Number },
    fill: { default: 'var(--primary)', type: String},
    stroke: { default: 'none', type: String},
    position: { default: () => ({}), type: Object },
    rotation: { default: () => ({}), type: Object },
    scale: { default: () => ({}), type: Object }
  },
  template: `
    <circle
      :r="r"
      :fill="fill"
      :stroke="stroke"
      stroke-width="3"
      :transform="transform"
    />
  `


}