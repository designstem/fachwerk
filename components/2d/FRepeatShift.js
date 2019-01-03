import { Object2D } from "./2d.js";
import { range } from "../../utils.js";

export default {
  mixins: [Object2D],
  tag: `2D`,
  description: `
Repeats the contents in a shifted rectangular grid.
  `,
  example: `
<f-scene>
  <f-repeat-shift>
    <f-box slot-scope="data" />
  </f-repeat-shift>
</f-scene>
  `,
  props: {
    step: { default: 1, type: [Number,String] },
    width: { default: 4, type: [Number,String] },
    height: { default: 4, type: [Number,String] },
    position: { default: () => ({}), type: Object },
    rotation: { default: () => ({}), type: Object },
    scale: { default: () => ({}), type: Object },
    opacity: { default: 1, type: Number }
  },
  methods: { range },
  template: `
  <f-group
    :transform="transform"
    :opacity="opacity"
  >
    <f-group v-for="(y,j) in range(width / -2, width / 2, step)" :key="j" :position="{x:0,y}">
      <f-group v-for="(x,i) in range(height / -2, height / 2, step)" :key="i" :position="{x: j % 2 ? x + step / 2 : x,y:0}">
        <slot :value="[i, j, (i * j) + i]" />
      </f-group>
    </f-group>
  </f-group>  
  `,
}