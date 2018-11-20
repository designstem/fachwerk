import { Object2D } from "./2d.js";
import * as utils from "../../utils.js";

export default {
  mixins: [Object2D],
  tag: `2D`,
  description: `
Repeats the contents in a hexagonal grid.
  `,
  example: `
<f-scene>
  <f-repeat-hex>
    <f-regularpolygon slot-scope="data" r="0.5" />
  </f-repeat-hex>
</f-scene>
  `,
  props: {
    step: { default: 1, type: Number },
    position: { default: () => ({}), type: Object },
    rotation: { default: () => ({}), type: Object },
    scale: { default: () => ({}), type: Object },
    opacity: { default: 1, type: Number }
  },
  methods: utils,
  template: `
  <f-group
    :transform="transform"
    :opacity="opacity"
  >
    <f-group v-for="(y,j) in range(-2,2,1)">
      <f-group v-for="(x,i) in range(-2,2,1)"
        :position="{
          x: cpoints(6,0.5)[1].x * 2 * x - (y % 2 ? cpoints()[1].x * 0.5 : 0),
          y: (cpoints(6,0.5)[1].y - 0.5) * y
        }"
      ><slot :value="[i, j, (i * j) + i]" />
    </f-group>
  </f-group>
  `
}