import ThreeGroup from "./ThreeGroup.js";
import ThreeLine from "./ThreeLine.js";

import { deg2rad } from "../utils.js";
import { Object3D } from "./internal/three.js";

export default {
  mixins: [Object3D],
  description: `
Adds a grid to the 3D scene and applies transformations like <code>:position</code>, <code>:rotation</code> and <code>:scale</code>.
  `,
  example: `
<ThreeScene>
  <ThreeGrid
    :rotation="{ y: 0.5, x: 0.5 }"
    :scale="{ x: 0.5, y: 0.5, z: 0.5 }"
  />
</ThreeScene>
  `,
  components: { ThreeGroup, ThreeLine },
  methods: { deg2rad },
  template: `
  <ThreeGroup>
    <ThreeGroup
      v-for="(rotation,i) in [
        { x: 0, y: 0, z: 0},
        { x: 0, y: deg2rad(90), z: 0},
        { x: deg2rad(90), y: 0, z: 0}
      ]"
      :rotation="rotation"
      :key="i"
    >
    <ThreeLine
      v-for="(x,i) in [-2,-1,0,1,2]"
      :key="'a'+i"
      stroke-width="1"
      :stroke="0xdddddd"
      :points="[
        { x, y: 2 },
        { x, y: -2 }
      ]"
    />
    <ThreeLine
      v-for="(y,i) in [-2,-1,0,1,2]"
      :key="'b'+i"
      stroke-width="1"
      :stroke="0xdddddd"
      :points="[
        { x: 2, y },
        { x: -2, y }
      ]"
    />
  </ThreeGroup>
  <ThreeLine
      :stroke="0xaaaaaa"
      :strokeWidth="1.5"
      :points="[
        { x: 0, y: 2, z: 0 },
        { x: 0, y: -2, z: 0 }
      ]"
  />
  <ThreeLine
    :stroke="0xaaaaaa"
    :strokeWidth="1.5"
    :points="[
      { x: 2, y: 0, z: 0 },
      { x: -2, y: 0, z: 0 }
    ]"
  />
  <ThreeLine
    :stroke="0xaaaaaa"
    :strokeWidth="1.5"
    :points="[
      { x: 2, y: 0, z: 0 },
      { x: -2, y: 0, z: 0 }
    ]"
  />
  </ThreeGroup>
  `
};
