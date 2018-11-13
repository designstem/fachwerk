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
    fromX: { default: -1, type: Number },
    toX: { default: 1, type: Number },
    fromY: { default: -1, type: Number },
    toY: { default: 1, type: Number },
    step: { default: 1, type: Number },
    stepX: { default: false, type: Number },
    stepY: { default: false, type: Number },
  },
  methods: utils,
  template: `
  <f-group>
    <f-group v-for="x in range(fromX, toX, stepX ? stepX : step)" :position="{x,y:0}">
      <f-group v-for="y in range(fromY, toY, stepY ? stepY : step)" :position="{x:0,y}">
        <slot :value="[x, y, x * y + y]" />
      </f-group>
    </f-group>
  </f-group>  
  `,
}