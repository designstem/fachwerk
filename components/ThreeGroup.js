import { Object3D } from './internal/three.js'

export default {
  mixins: [Object3D],
  props: {
    type: { type: String, default: "Mesh" }
  },
  provide() {
    return { meshVm: this };
  }
};

