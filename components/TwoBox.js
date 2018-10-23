import { Object2D } from "./internal/two.js";

export default {
  mixins: [Object2D],
  description: `
 Kazimir Malevich must still be proud.  
  `,
  example: `
<TwoScene>
  <TwoGrid />
  <TwoBox
    :position="{ x: 1, y: 1 }"
    :rotation="{ z: 45 }"
    :scale="{ x: 0.2, y: 0.2 }"
  />
</TwoScene>
  `,
  props: {
    x: { default: 0, type: Number },
    y: { default: 0, type: Number },
    width: { default: 1, type: Number },
    height: { default: 1, type: Number },
    fill: { default: "var(--primary)", type: String },
    opacity: { default: 1, type: Number },
    position: { default: () => ({}), type: Object },
    rotation: { default: () => ({}), type: Object },
    scale: { default: () => ({}), type: Object }
  },
  template: `
    <rect
      :x="x - 0.5"
      :y="y - 0.5"
      :width="width"
      :height="height"
      :fill="fill"
      :opacity="opacity"
      :transform="transform"
    />
  `
};