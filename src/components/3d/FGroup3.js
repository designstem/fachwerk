import Object3D from "./internal/Object3D.js";

export default {
  mixins: [Object3D],
  description: `
Description to be written.

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
    position: { default: "0 0 0", type: [String, Number, Array, Object] },
    rotation: { default: "0 0 0", type: [String, Number, Array, Object] },
    scale: { default: "1 1 1", type: [String, Number, Array, Object] },
  },
  provide() {
    return { meshVm: this };
  }
};

