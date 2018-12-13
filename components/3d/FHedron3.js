import { cpoints } from "../../utils.js";
import { Object3D } from "./3d.js";

export default {
  mixins: [Object3D],
  tag: '3D',
  description: `
  `,
  example: `
  <f-animation-data
    :duration="1000 * 20"
  >
  <f-scene3 slot-scope="data">
    <f-group3
      :rotation="{
        x: data.value,
        y: data.value
      }"
    >
      <f-hedron3
        :count="6"
        :height="1"
        :shading="true"
      />
    </f-group3>
  </f-scene3>
  </f-animation-data>
  `,
  methods: { cpoints },
  props: {
    count: { default: 6, type: Number },
    r: { default: 1, type: Number },
    height: { default: 0, type: Number },
    heightStrokeWidth: { default: 0, type: Number },
    stroke: { default: "", type: String },
    strokeWidth: { default: 3, type: Number },
    fill: { default: "color('primary')", type: String },
    position: { default: () => ({}), type: Object },
    rotation: { default: () => ({}), type: Object },
    scale: { default: () => ({}), type: [Object, Number] },
    opacity: { default: 1, type: [Number,String] },
    shading: { default: false, type: Boolean },
  },
  computed: {
    points() {
      return cpoints(this.count, this.r)
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
        :opacity="opacity"
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
        :opacity="opacity"
        :shading="shading"
      />
      <f-line3
        :points="points.concat(points[0])"
        :stroke="stroke"
        :strokeWidth="strokeWidth"
        :opacity="opacity"
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
        :opacity="opacity"
      />
      </f-group3>
  `
};
