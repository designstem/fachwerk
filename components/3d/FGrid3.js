import { deg2rad } from "../../utils.js";
import { Object3D } from "./3d.js";

export default {
  mixins: [Object3D],
  tag: '3D',
  description: `
Adds a grid to the 3D scene and applies transformations like <code>:position</code>, <code>:rotation</code> and <code>:scale</code>.
  `,
  example: `
<f-scene3>
  <f-grid3
    :rotation="{ y: 0.5, x: 0.5 }"
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
  methods: { deg2rad },
  template: `
  <f-group3>
    <f-group3
      v-for="(rotation,i) in [
        { x: 0, y: 0, z: 0},
        { x: 0, y: deg2rad(90), z: 0},
        { x: deg2rad(90), y: 0, z: 0}
      ]"
      :rotation="rotation"
      :key="i"
    >
    <f-line3
      v-for="(x,i) in [-2,-1,0,1,2]"
      :key="'a'+i"
      :stroke-width="1"
      :points="[
        { x, y: 2 },
        { x, y: -2 }
      ]"
      :opacity="opacity"
    />
    <f-line3
      v-for="(y,i) in [-2,-1,0,1,2]"
      :key="'b'+i"
      stroke-width="1"
      :points="[
        { x: 2, y },
        { x: -2, y }
      ]"
      :opacity="opacity"
    />
  </f-group3>
  <f-line3
      :stroke-width="1.25"
      :points="[
        { x: 0, y: 2, z: 0 },
        { x: 0, y: -2, z: 0 }
      ]"
      :opacity="opacity"

  />
  <f-line3
    :stroke-width="1.25"
    :points="[
      { x: 2, y: 0, z: 0 },
      { x: -2, y: 0, z: 0 }
    ]"
    :opacity="opacity"
  />
  <f-line3
    :stroke-width="1.25"
    :points="[
      { x: 2, y: 0, z: 0 },
      { x: -2, y: 0, z: 0 }
    ]"
    :opacity="opacity"
  />
  </f-group3>
  `
};
