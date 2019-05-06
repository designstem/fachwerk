import Object3D from "./internal/Object3D.js";

export default {
  mixins: [Object3D],
  description: `
Groups child elements and applies 3D transformations to the group.

<f-scene3>
  <f-rotation3>
    <f-grid3 />
    <f-group3
      position="1 1"
      rotation="45"
      scale="0.25"
    >
      <f-box3 />
    </f-group3>
  </f-rotation3>
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

