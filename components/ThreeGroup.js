import { Object3D } from './internal/three.js'

export default {
  mixins: [Object3D],
  name: "ThreeGroup",
  description: `
Groups components in 3D scene and applies transformations like <code>:position</code>, <code>:rotation</code> and <code>:scale</code>.
  `,
  example: `
<ThreeScene>
  <ThreeGrid />
  <ThreeGroup
    :position="{ x: 1, y: 1 }"
    :rotation="{ z: 45 }"
    :scale="{ x: 0.2, y: 0.2 }"
    >
      <ThreeBox />
  </ThreeGroup>
</ThreeScene>
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

