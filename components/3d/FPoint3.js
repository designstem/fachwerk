
import { Object3D } from "./3d.js";

export default {
  mixins: [Object3D],
  tag: "3D",
  description: `
  `,
  example: `
<f-scene3>
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
    points: { default: [], type: Array },
    stroke: { default: "color('primary')", type: String },
    strokeWidth: { default: 3, type: Number },
    position: { default: () => ({}), type: Object },
    rotation: { default: () => ({}), type: Object },
    scale: { default: () => ({}), type: Object },
    opacity: { default: 1, type: Number },
  },
  template: `
    <f-group3>
      <f-line3
        v-for="point in points"
        :points="[
          {x: point.x, y: point.y, z: point.z},
          {x: point.x, y: point.y, z: point.z}
        ]"
        :stroke="stroke"
        :stroke-width="strokeWidth"
        :opacity="opacity"
      />
    </f-group3>
    `
};
