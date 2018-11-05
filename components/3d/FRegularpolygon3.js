import { cx, cy, cpoints } from "../../utils.js";
import { Object3D } from "./3d.js";

export default {
  mixins: [Object3D],
  tag: '3D',
  description: `
Regular polygon
  `,
  example: `
<f-animation-data :duration="10000" :to="360">
<f-scene3 slot-scope="data">
  <f-group3
    :rotation="{
      x: deg2rad(data.value),
      y: deg2rad(data.value)
    }"
  >
    <f-regularpolygon3
      v-for="c in 2"
      :rotation="{ x: deg2rad(360 / 2 * c) }"
      :count="4"
      :height="1"
    />
  </f-group3>
</f-scene3>
</f-animation-data>
  `,
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
    <f-group3>
      <f-triangle3
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
      <f-triangle3
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
      <f-line3 :points="points.concat(points[0])" />
      <f-line3
        v-for="p in points"
        :points="[
          {x: p.x, y: p.y, z: 0},
          {x: 0, y: 0, z: height}
        ]"
      />
      </f-group3>
  `
};
