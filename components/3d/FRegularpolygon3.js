import { Object3D } from "./3d.js";

export default {
  mixins: [Object3D],
  tag: '3D',
  description: `
Regular polygon in 3D plane
  `,
  example: `
  <f-scene3>
  <f-regularpolygon3 />
  <f-regularpolygon3
    :r="0.5"
    :count="5"
    :fill="color('red')"
  />
</f-scene3>
  `,
  props: {
    count: { default: 6, type: Number },
    r: { default: 1, type: Number },
    stroke: { default: "color('secondary')", type: String },
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