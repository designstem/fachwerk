import { Object3D } from './internal/three.js'

export default {
  mixins: [Object3D],
  name: "ThreeGroup",
  description: `
Group components in 3D scene and apply transformations like <code>:position</code>, <code>:rotation</code> and <code>:scale</code>.
  `,
  props: {
    type: { type: String, default: "Mesh" }
  },
  provide() {
    return { meshVm: this };
  }
};

