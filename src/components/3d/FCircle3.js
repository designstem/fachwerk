import { THREE, color } from "../../../fachwerk.js"

import Object3D from "./internal/Object3D.js";

export default {
  mixins: [Object3D],
  description: `
Description to be written.

<f-scene3>
  <f-group3 :rotation="{ y: 45, x: 45 }">
    <f-grid3 />
    <f-circle3 />
  </f-group3>
</f-scene3>
  `,
  props: {
    r: { default: 1, type: Number },
    stroke: { default: "color('primary')", type: String },
    strokeWidth: { default: 3, type: Number },
    fill: { default: "", type: String },
    position: { default: () => ({}), type: Object },
    rotation: { default: () => ({}), type: Object },
    scale: { default: () => ({}), type: [Object, Number] },
    opacity: { default: 1, type: Number },
    shading: { default: false, type: Boolean },
  },
  computed: {
    strokeColor() {
      return this.stroke == "color('primary')" ? color('primary') : this.stroke
    }
  },
  template: `
    <f-regularpolygon3
      :r="r"
      :count="64"
      :stroke="strokeColor"
      :strokeWidth="strokeWidth"
      :fill="fill"
      :opacity="opacity"
    />
  `
}