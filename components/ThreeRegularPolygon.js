import ThreeTriangle from "./ThreeTriangle.js";
import ThreeGroup from "./ThreeGroup.js"
import ThreeLine from "./ThreeLine.js";

import { cx, cy } from "../utils.js"
import { Object3D } from "./internal/three.js";

export default {
  mixins: [Object3D],
  name: "ThreeRegularPolygon",
  example: `
<ThreeScene>
  <ThreeRegularPolygon />
</ThreeScene>  
  `,
  components: {
    ThreeTriangle,
    ThreeGroup,
    ThreeLine
  },
  props: { count: { default: 6 }, radius: { default: 1 } },
  computed: {
    points() {
      return Array.from({
        length: this.count
      }).map((p, i) => ({
        x: cx((360 / this.count) * i, this.radius),
        y: cy((360 / this.count) * i, this.radius)
      }));
    }
  },
  template: `
    <ThreeGroup>
      <ThreeTriangle
        v-for="(p,i) in points"
        :key="i"
        :points="[
          {x: p.x, y: p.y, z: 0},
          {
            x: points[i == points.length - 1 ? 0 : i + 1].x,
            y: points[i == points.length - 1 ? 0 : i + 1].y,
            z: 0
          },
          {x: 0, y: 0, z: 0}
        ]"
      />
      <ThreeLine :points="points.concat(points[0])" />
    </ThreeGroup>
  `
};
