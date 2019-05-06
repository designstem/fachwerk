import { color, parseCoords } from "../../../fachwerk.js"
;
import Object3D from "./internal/Object3D.js";

export default {
  mixins: [Object3D],
  description: `
Displays a point in 3D space.

<f-scene3>
  <f-rotation3>
    <f-grid3 />
    <f-point3
      :points="
        range(-4,4,0.05)
          .map(x => [x,Math.cos(x),Math.sin(x)])
      "
      :stroke="color('red')"
    />
    <f-point3
    :points="
      range(-4,4,0.05)
        .map(x => [x,Math.sin(x),Math.cos(x)])
    "
    :stroke="color('blue')"
    />
  </f-rotation3>
</f-scene3>
  `,
  props: {
    x: { default: 0, type: Number },
    y: { default: 0, type: Number },
    z: { default: 0, type: Number },
    points: { default: '', type: [String, Number, Array] },
    stroke: { default: "color('primary')", type: String },
    strokeWidth: { default: 3, type: [Number,String] },
    position: { default: "0 0 0", type: [String, Number, Array, Object] },
    rotation: { default: "0 0 0", type: [String, Number, Array, Object] },
    scale: { default: "1 1 1", type: [String, Number, Array, Object] },
    opacity: { default: 1, type: [Number,String] },
  },
  computed: {
    strokeColor() {
      return this.stroke == "color('primary')" ? color('primary') : this.stroke
    },
    currentPoints() {
      return this.points ? parseCoords(this.points) : null;
    }
  },
  template: `
    <f-group3>
      <f-line3
        v-if="currentPoints"
        v-for="(point,i) in currentPoints"
        :key="i"
        :points="[point,point]"
        :stroke="strokeColor"
        :stroke-width="strokeWidth"
        :opacity="opacity"
      />
      <f-line3
        v-if="!currentPoints"
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
    </f-group3>
    `
};
