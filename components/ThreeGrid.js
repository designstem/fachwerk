import ThreeGroup from "./ThreeGroup.js";
import ThreeLine from "./ThreeLine.js";

import { deg2rad } from "../utils.js";

export default {
  name: "ThreeGrid",
  example: `
<ThreeScene>
  <ThreeGrid />
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
      :stroke="i == 0 ? 0xaaaaaa : 0xdddddd"
      :points="[
        { x, y: 2 },
        { x, y: -2 }
      ]"
    />
    <ThreeLine
      v-for="(y,i) in [-2,-1,0,1,2]"
      :key="'b'+i"
      stroke-width="1"
      :stroke="0xcccccc"
      :points="[
        { x: 2, y },
        { x: -2, y }
      ]"
    />
  </ThreeGroup>
  </ThreeGroup>
  `
};
