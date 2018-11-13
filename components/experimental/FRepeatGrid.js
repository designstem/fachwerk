import { Object2D } from "../2d/2d.js";
import * as utils from "../../utils.js";

export default {
  mixins: [Object2D],
  tag: `Experimental`,
  description: `
Repeats the contents in a 2D grid.
  `,
  example: `
<f-scene>
  <f-repeat-grid>
    <f-circle slot-scope="data" r="1" />
  </f-repeat-grid>
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
    <f-group v-for="(x,i) in range(-2, 2, step)" :position="{x,y:0}">
      <f-group v-for="(y,j) in range(-2, 2, step)" :position="{x:0,y}">
        <slot :value="[i, j, (i * j) + i]" />
      </f-group>
    </f-group>
  </f-group>  
  `,
}