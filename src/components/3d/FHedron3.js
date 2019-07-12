import { polarpoints } from "../../../fachwerk.js"
;
import Object3D from "./internal/Object3D.js";

export default {
  mixins: [Object3D],
  description: `
Displays regular 3D hedron with optional \`height\` parameter.

<f-scene3>
  <f-rotation3>
    <f-grid3 />
    <f-hedron3 shading height="1" />
  </f-rotation3>
</f-scene3>
  `,
  methods: { polarpoints },
  props: {
    count: { default: 6, type: [Number,String] },
    r: { default: 1, type: [Number,String] },
    height: { default: 0, type: [Number,String] },
    heightStrokeWidth: { default: 0, type: [Number,String] },
    stroke: { default: "", type: String },
    strokeWidth: { default: 3, type: [Number,String] },
    fill: { default: "color('primary')", type: String },
    position: { default: "0 0 0", type: [String, Number, Array, Object] },
    rotation: { default: "0 0 0", type: [String, Number, Array, Object] },
    scale: { default: "1 1 1", type: [String, Number, Array, Object] },
    opacity: { default: '', type: [Number,String] },
    shading: { default: true, type: Boolean },
  },
  computed: {
    points() {
      return polarpoints(this.count, this.r)
    }
  },
  template: `
    <f-group3>
      <f-triangle3
        v-for="(p,i) in points"
        :key="'a' + i"
        :points="[
          {x: p.x, y: p.y, z: 0},
          {
            x: points[i == points.length - 1 ? 0 : i + 1].x,
            y: points[i == points.length - 1 ? 0 : i + 1].y,
            z: 0
          },
          {x: 0, y: 0, z: 0}
        ]"
        :fill="fill"
        :opacity="opacity || 1"
        :shading="shading"
      />   
      <f-triangle3
        v-for="(p,i) in points"
        :key="'b' + i"
        :points="[
          {x: p.x, y: p.y, z: 0},
          {
            x: points[i == points.length - 1 ? 0 : i + 1].x,
            y: points[i == points.length - 1 ? 0 : i + 1].y,
            z: 0
          },
          {x: 0, y: 0, z: height}
        ]"
        :fill="fill"
        :opacity="opacity || 1"
        :shading="shading"
      />
      <f-line3
        :points="points.concat(points[0])"
        :stroke="stroke"
        :strokeWidth="strokeWidth"
        :opacity="opacity || 1"
      />
      <f-line3
        v-if="heightStrokeWidth"
        v-for="p,i in points"
        :key="i"
        :points="[
          {x: p.x, y: p.y, z: 0},
          {x: 0, y: 0, z: height}
        ]"
        :stroke="stroke"
        :strokeWidth="heightStrokeWidth"
        :opacity="opacity || 1"
      />
      </f-group3>
  `
};
