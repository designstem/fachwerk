import Object2D from "./internal/Object2D.js";
import { color, parseCoords } from "../../../fachwerk.js"


export default {
  mixins: [Object2D],
  description: `
Displays a circle.

<f-scene grid>
  <f-circle />
  <f-circle
    points="-1 0, 0 0, 1 0"
    r="0.25"
    :stroke="color('red')"
  />
</f-scene>  
  `,
  props: {
    x: { default: 0, type: [Number,String] },
    y: { default: 0, type: [Number,String] },
    points: { default: '', type: [String, Number, Array, Object] },
    r: { default: 1, type: [Number,String] },
    stroke: { default: "color('primary')", type: String},
    strokeWidth: { default: 3, type: [Number,String] },
    fill: { default: 'none', type: String},
    position: { default: '0 0', type: [String, Number, Object, Array] },
    rotation: { default: '0', type: [String, Number, Object, Array] },
    scale: { default: '1', type: [String, Number, Object, Array] },
    opacity: { default: 1, type: [Number,String] },
    multiply: { default: false, type: Boolean }
  },
  computed: {
    currentStrokeColor() {
      return this.stroke == "color('primary')" ? color('primary') : this.stroke
    },
    currentStrokeWidth() {
      return this.strokeWidth * this.svgScale() * (1 / this.groupScale()) * (1 / this.scale)
    },
    currentPoints() {
     return this.points ? parseCoords(this.points) : null;
    },
  },
  template: `
    <f-group>
    <circle
      v-if="currentPoints"
      v-for="p,i in currentPoints"
      :key="i"
      :cx="p[0]"
      :cy="p[1]"
      :r="r"
      :stroke="currentStrokeColor"
      :stroke-width="currentStrokeWidth"
      :fill="fill"
      :transform="transform"
      :opacity="opacity"
      :style="{ mixBlendMode: multiply ? 'multiply' : ''}"
    />
    <circle
      v-if="!currentPoints"
      :cx="x"
      :cy="y"
      :r="r"
      :stroke="currentStrokeColor"
      :stroke-width="currentStrokeWidth"
      :fill="fill"
      :transform="transform"
      :opacity="opacity"
      :style="{ mixBlendMode: multiply ? 'multiply' : ''}"
    />
    </f-group>
  `


}