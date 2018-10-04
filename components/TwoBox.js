import { Object2D } from "./internal/two.js";

export default {
  mixins: [Object2D],
  name: "TwoBox",
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
    x: { default: 0 },
    y: { default: 0 },
    width: { default: 1 },
    height: { default: 1 },
    fill: { default: "black" },
    opacity: { default: 1 }
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