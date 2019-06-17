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
    width: { default: '', type: [Number,String], description: "***Depreciated*** Use `cols`" },
    height: { default: '', type: [Number,String], description: "***Depreciated*** Use `rows`" },
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
    }
  },
  methods: { range },
  computed: {
    // @DEPRECIATED: remove this
    currentRows() {
      return this.width || this.rows
    },
    currentCols() {
      return this.height || this.cols
    }
  },
  template: `
  <f-group3
    :opacity="opacity"
  >
    <f-group3 :position="[(currentCols - 1) * step / -2,(currentRows - 1) * step / -2, 0]">
      <f-group3
        v-for="(_, yIndex) in range(0, currentRows - 1)"
        :key="yIndex"
      >
        <f-group3
          v-for="(_, xIndex) in range(0, currentCols - 1)"
          :key="xIndex"
          :position="[xIndex * step, yIndex * step, 0]"
        >
          <slot :col="xIndex" :row="yIndex" />
        </f-group3>
      </f-group3>
    </f-group3>
  </f-group3>  
  `,
}