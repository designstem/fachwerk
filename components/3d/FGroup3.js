import { Object3D } from './3d.js'

export default {
  mixins: [Object3D],
  description: `
Groups components in 3D scene and applies transformations like <code>:position</code>, <code>:rotation</code> and <code>:scale</code>.
  `,
  example: `
<f-scene3>
  <f-grid3 />
  <f-group3
    :position="{ x: 1, y: 1 }"
    :rotation="{ z: 45 }"
    :scale="{ x: 0.2, y: 0.2, z: 0.2 }"
    >
      <f-box3 />
  </f-group3>
</f-scene3>
  `,
  props: {
    type: { type: String, default: "Mesh" },
    scale: { default: () => ({}), type: [Object, Number] },
    position: { default: () => ({}), type: Object },
    rotation: { default: () => ({}), type: Object }
  },
  provide() {
    return { meshVm: this };
  }
};

