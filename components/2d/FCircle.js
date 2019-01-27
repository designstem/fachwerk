import { Object2d } from "../../mixins.js";
import { color, parseCoords } from "../../utils.js"

export default {
  mixins: [Object2d],
  description: `
Description to be written.

<f-scene>
  <f-grid />
  <f-circle />
  <f-circle
    :points="[{x: -0.5},{x: 0},{x: 0.5}]"
    :r="0.1"
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
  },
  computed: {
    strokeColor() {
      return this.stroke == "color('primary')" ? color('primary') : this.stroke
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
      :stroke="strokeColor"
      :stroke-width="strokeWidth"
      :fill="fill"
      :transform="transform"
      :opacity="opacity"
    />
    <circle
      v-if="!currentPoints"
      :cx="x"
      :cy="y"
      :r="r"
      :stroke="strokeColor"
      :stroke-width="strokeWidth"
      :fill="fill"
      :transform="transform"
      :opacity="opacity"
    />
    </f-group>
  `


}