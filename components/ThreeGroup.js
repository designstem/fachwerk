import { Object3D } from './internal/three.js'

export default {
  mixins: [Object3D],
  name: "ThreeGroup",
  description: `
Group components in 3D scene and apply transformations like <code>:position</code>, <code>:rotation</code> and <code>:scale</code>.
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
    type: { type: String, default: "Mesh" }
  },
  provide() {
    return { meshVm: this };
  }
};

