import { range } from "../../utils.js";
import Object3D from "./internal/Object3D.js";

export default {
  mixins: [Object3D],
  description: `
Description to be written.

<f-scene3>
  <f-grid3 :rotation="{ y: 45, x: 45 }" />
</f-scene3>
  `,
  props: {
    position: { default: "0 0 0", type: [String, Number, Array, Object] },
    rotation: { default: "0 0 0", type: [String, Number, Array, Object] },
    scale: { default: "1 1 1", type: [String, Number, Array, Object] },
    opacity: { default: 0.5, type: [Number, String] }
  },
  methods: { range },
  template: `
    <f-group3>
    <f-group3
      v-for="(rotation,i) in [[0,0,0],[90,0,0],[0,90,0]]"
      :key="i"
      :rotation="rotation"
    >
    <f-line3
      v-for="x,i in range(-2,2,1)"
      :key="'x' + i"
      :points="[{ x, y: -2},{ x, y: 2}]"
      :stroke-width="1"
      :opacity="x == 0 ? opacity * 1.25 : opacity"
    />
    <f-line3
      v-for="y,j in range(-2,2,1)"
      :key="'y' + j"
      :points="[{ x: -2, y },{ x: 2, y }]"
      :stroke-width="1"
      :opacity="y == 0 ? opacity * 1.25 : opacity"
    />
    </f-group3>
  </f-group3>
  `
};
