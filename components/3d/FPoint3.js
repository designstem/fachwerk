import { color } from "../../utils.js";
import { Object3D } from "./3d.js";

export default {
  mixins: [Object3D],
  tag: "3D",
  description: `
  `,
  example: `
<f-scene3>
  <f-point3 />
  <f-group3
    :rotation="{ y: 45, x: 45 }"
    :scale="{ x: 0.5, y: 0.5, z: 0.5 }"
  >
  <f-grid3 />
  <f-point3
    :points="range(-4,4,0.05)
    .map(x => ({ x, y: Math.cos(x), z: Math.sin(x) }))"
    :stroke="color('red')"
  />
  <f-point3
    :points="range(-4,4,0.05)
    .map(x => ({ x, y: Math.sin(x), z: Math.cos(x) }))"
    :stroke="color('blue')"
  />
  </f-group3>
</f-scene3>
  `,
  props: {
    x: { default: 0, type: Number },
    y: { default: 0, type: Number },
    z: { default: 0, type: Number },
    points: { default: [], type: Array },
    stroke: { default: "color('primary')", type: String },
    strokeWidth: { default: 3, type: Number },
    position: { default: () => ({}), type: Object },
    rotation: { default: () => ({}), type: Object },
    scale: { default: () => ({}), type: Object },
    opacity: { default: 1, type: Number },
  },
  computed: {
    strokeColor() {
      return this.stroke == "color('primary')" ? color('primary') : this.stroke
    }
  },
  template: `
    <f-group3>
      <f-line3
        v-if="!points.length"
        :x1="x"
        :y1="y"
        :z1="z"
        :x2="x"
        :y2="y"
        :z2="z"
        :stroke="strokeColor"
        :stroke-width="strokeWidth"
        :opacity="opacity"
      />
      <f-line3
        v-if="points.length"
        v-for="point in points"
        :points="[
          {x: point.x, y: point.y, z: point.z},
          {x: point.x, y: point.y, z: point.z}
        ]"
        :stroke="strokeColor"
        :stroke-width="strokeWidth"
        :opacity="opacity"
      />
    </f-group3>
    `
};
