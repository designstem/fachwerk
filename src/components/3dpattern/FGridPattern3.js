import Object3D from "../3d/internal/Object3D.js";
import { range } from "../../../fachwerk.js";

export default {
  mixins: [Object3D],
  description: `
Repeats the contents in a 3D grid.

<f-scene3 grid>
  <f-group3 scale="0.5">
    <f-grid-pattern3 cols="3" rows="3" step="1">
      <f-box3 :stroke="color('red')" fill />
    </f-grid-pattern3>
  </f-group3> 
</f-scene3>
  `,
  props: {
    rows: { default: 3, type: [Number,String] },
    cols: { default: 3, type: [Number,String] },
    slices: { default: 3, type: [Number,String] },
    step: { default: 1, type: [Number,String] },
    position: { default: '0 0', type: [String, Number, Object, Array] },
    rotation: { default: '0', type: [String, Number, Object, Array] },
    scale: { default: '1', type: [String, Number, Object, Array] },
    opacity: { default: 1, type: Number }
  },
  slots: {
    row: {
      type: "number",
      description: "Current row of the repeated element, starting from `0`"
    },
    col: {
      type: "number",
      description: "Current column of the repeated element, starting from `0`"
    },
    slice: {
      type: "number",
      description: "Current slice (along z-axis) of the repeated element, starting from `0`"
    }
  },
  methods: { range },
  template: `
  <f-group3
    :opacity="opacity"
  >
    <f-group3 :position="[(cols - 1) * step / -2,(rows - 1) * step / -2, (slices - 1) * step - 2]">
      <f-group3
        v-for="(_, zIndex) in range(0, slices - 1)"
        :key="zIndex"
      >
        <f-group3
          v-for="(_, yIndex) in range(0, rows - 1)"
          :key="yIndex"
        >
          <f-group3
            v-for="(_, xIndex) in range(0, cols - 1)"
            :key="xIndex"
            :position="[xIndex * step, yIndex * step, zIndex * step]"
          >
            <slot :col="xIndex" :row="yIndex" :slice="zIndex" />
          </f-group3>
        </f-group3>
      </f-group3>
    </f-group3>
  </f-group3>  
  `,
}