import { range } from "../../utils.js";
import { Object3D } from "./3d.js";

export default {
  mixins: [Object3D],
  tag: '3D',
  description: `
  `,
  example: `
<f-scene3>
  <f-grid3
    :rotation="{ y: 45, x: 45 }"
    :scale="{ x: 0.5, y: 0.5, z: 0.5 }"
  />
</f-scene3>
  `,
  props: {
    scale: { default: () => ({}), type: [Object, Number] },
    position: { default: () => ({}), type: Object },
    rotation: { default: () => ({}), type: Object },
    opacity: { default: 0.2, type: Number }
  },
  methods: { range },
  template: `
    <f-group3>
    <f-group3
      v-for="(rotation,i) in [{},{x:90},{y:90}]"
      :key="i"
      :rotation="rotation"
    >
    <f-line3
      v-for="x in range(-2,2,1)"
      :points="[{ x, y: -2},{ x, y: 2}]"
      :stroke-width="1"
      :opacity="x == 0 ? opacity * 2 : opacity"
    />
    <f-line3
      v-for="y in range(-2,2,1)"
      :points="[{ x: -2, y },{ x: 2, y }]"
      :stroke-width="1"
      :opacity="y == 0 ? opacity * 2 : opacity"
    />
    </f-group3>
  </f-group3>
  `
};
