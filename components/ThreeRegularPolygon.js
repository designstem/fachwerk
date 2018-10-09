import ThreeTriangle from "./ThreeTriangle.js";
import ThreeGroup from "./ThreeGroup.js";
import ThreeLine from "./ThreeLine.js";

import { cx, cy, cpoints } from "../utils.js";
import { Object3D } from "./internal/three.js";

export default {
  mixins: [Object3D],
  description: `
  `,
  example: `
<AnimeData :duration="10000" :to="360">
<ThreeScene slot-scope="data">
  <ThreeGroup
    :rotation="{
      x: deg2rad(data.value),
      y: deg2rad(data.value)
    }"
  >
    <ThreeRegularPolygon
      v-for="c in 2"
      :rotation="{ x: deg2rad(360 / 2 * c) }"
      :count="4"
      :height="1"
    />
  </ThreeGroup>
</ThreeScene>
</AnimeData>
  `,
  components: {
    ThreeTriangle,
    ThreeGroup,
    ThreeLine
  },
  methods: { cpoints },
  props: {
    count: { default: 6, type: Number },
    radius: { default: 1, type: Number },
    height: { default: 0, type: Number },
    scale: { default: () => ({}), type: [Object, Number] },
    position: { default: () => ({}), type: Object },
    rotation: { default: () => ({}), type: Object }
  },
  computed: {
    points() {
      return cpoints(this.count, this.radius)
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
          {x: 0, y: 0, z: height}
        ]"
      />
      <ThreeLine :points="points.concat(points[0])" />
      <ThreeLine
        v-for="p in points"
        :points="[
          {x: p.x, y: p.y, z: 0},
          {x: 0, y: 0, z: height}
        ]"
      />
    </ThreeGroup>
  `
};
