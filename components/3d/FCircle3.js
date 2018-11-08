
import { Object3D } from "./3d.js";

export default {
  mixins: [Object3D],
  tag: '3D',
  description: `
  `,
  example: `
<f-scene3>
  <f-grid3 />
  <f-circle3
    :position="{ x: 1, y: 1 }"
    :rotation="{ z: 45 }"
    :scale="{ x: 0.2, y: 0.2 }"
  />
</f-scene3>
  `,
  props: {
    r: { default: 1, type: Number },
    stroke: { default: "color('secondary')", type: String },
    strokeWidth: { default: 3, type: Number },
    fill: { default: 1, type: String },
    position: { default: () => ({}), type: Object },
    rotation: { default: () => ({}), type: Object },
    scale: { default: () => ({}), type: [Object, Number] },
    opacity: { default: 1, type: Number },

  },
  template: `
    <f-regularpolygon3
      :radius="r"
      :count="64"
      :stroke="stroke"
      :strokeWidth="strokeWidth"
      :fill="fill"
      :opacity="opacity"
    />
  `
}