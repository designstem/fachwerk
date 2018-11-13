import * as utils from "../../utils.js";

export default {
  tag: `Experimental`,
  description: `
Repeats the contents in 2D grid.
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
  },
  methods: utils,
  template: `
  <f-group>
    <f-group v-for="(x,i) in range(-2, 2, step)" :position="{x,y:0}">
      <f-group v-for="(y,j) in range(-2, 2, step)" :position="{x:0,y}">
        <slot :value="[i, j, (i * j) + i]" />
      </f-group>
    </f-group>
  </f-group>  
  `,
}