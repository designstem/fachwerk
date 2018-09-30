import { Triangle } from "./internal/three.js";
import ThreeMesh from "./ThreeMesh.js"

import { cx, cy } from "../utils.js"

export default {
  name: "ThreeRegularPolygon",
  example: `
<ThreeScene>
  <ThreeRegularPolygon />
</ThreeScene>  
  `,
  components: {
    Triangle,
    ThreeMesh
  },
  props: { count: { default: 16 }, radius: { default: 1 } },
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
    <ThreeMesh>
      <Triangle
        v-for="(p,i) in points"
        :key="i"
        :v1="{x: p.x, y: p.y, z: 0}"
        :v2="{
          x: points[i == points.length - 1 ? 0 : i + 1].x,
          y: points[i == points.length - 1 ? 0 : i + 1].y,
          z: 0
        }"
        :v3="{x: 0, y: 0, z: 0}"
      />
    </ThreeMesh>
  `
};
