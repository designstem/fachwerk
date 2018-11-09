import { Object3D } from "./3d.js";

export default {
  mixins: [Object3D],
  tag: '3D',
  description: `
Regular polygon in 3D plane
  `,
  example: `
<f-scene3>
  <f-group3
  :rotation="{ y: 45, x: 45 }"
  :scale="{ x: 0.5, y: 0.5, z: 0.5 }"
  >
    <f-grid3 />
    <f-regularpolygon3 />
    <f-regularpolygon3
      :r="0.5"
      :count="5"
      :fill="color('red')"
    />
  </f-group3>
</f-scene3>
  `,
  props: {
    count: { default: 6, type: Number },
    r: { default: 1, type: Number },
    stroke: { default: "", type: String },
    strokeWidth: { default: 3, type: Number },
    fill: { default: "color('primary')", type: String },
    position: { default: () => ({}), type: Object },
    rotation: { default: () => ({}), type: Object },
    scale: { default: () => ({}), type: [Object, Number] },
    opacity: { default: 1, type: Number },
    shading: { default: false, type: Boolean },
  },
  template: `
  <f-hedron3
    :count="count"
    :r="r"
    :stroke="stroke"
    :stroke-width="strokeWidth"
    :fill="fill"
    :opacity="opacity"
    :shading="shading"
  />
  `
}