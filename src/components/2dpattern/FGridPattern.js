import Object2D from "../2d/internal/Object2D.js";
import { range } from "../../../fachwerk.js";

export default {
  mixins: [Object2D],
  description: `
Repeats the contents in a 2D grid.

<f-scene grid>
  <f-group scale="0.5">
    <f-grid-pattern cols="3" rows="3" step="1">
      <f-box :stroke="color('red')" />
    </f-grid-pattern>
    <f-box /> 
  </f-group> 
</f-scene>

\`f-grid-pattern\` also provides slot variables \`row\` and \`col\` got get the current row and column of the repeating element:

<f-scene grid>
  <f-group scale="0.5">
    <f-grid-pattern cols="3" rows="3" step="1"
    	v-slot="{ row, col }"
    >
      <f-circle 
 				r="0.5"
    		:fill="hsl(
    			scale(row,0,2,0,255),
      		scale(col,0,2,0,100)
         )"
       />
    </f-grid-pattern>
  </f-group> 
</f-scene>
  `,
  props: {
    rows: { default: 3, type: [Number, String] },
    cols: { default: 3, type: [Number, String] },
    width: { default: "", type: [Number, String] },
    height: { default: "", type: [Number, String] },
    step: { default: 1, type: [Number, String] },
    position: { default: "0 0", type: [String, Number, Object, Array] },
    rotation: { default: "0", type: [String, Number, Object, Array] },
    scale: { default: "1", type: [String, Number, Object, Array] },
    opacity: { default: 1, type: [Number, String] }
  },
  slots: {
    row: {
      type: "number",
      description: "Current row of the repeated element, starting from `0`"
    },
    col: {
      type: "number",
      description: "Current column of the repeated element, starting from `0`"
    }
  },
  methods: { range },
  mounted() {
    this.$global.$on("refresh", () => {
      console.log('refesh')
      this.$forceUpdate()
    });
  },
  template: `
  <f-group
    :transform="transform"
    :opacity="opacity"
  >
    <f-group :position="[(cols - 1) * step / -2,(rows - 1) * step / -2]">
      <f-group
        v-for="(_, yIndex) in range(0, rows - 1)"
        :key="yIndex"
      >
        <f-group
          v-for="(_, xIndex) in range(0, cols - 1)"
          :key="xIndex"
          :position="[xIndex * step, yIndex * step]"
        >
          <slot
            :col="xIndex"
            :row="yIndex"
            :index="(yIndex * cols) + xIndex"
          />
        </f-group>
      </f-group>
    </f-group>
  </f-group>  
  `
};
