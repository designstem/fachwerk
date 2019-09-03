import Object2D from "../2d/internal/Object2D.js";
import { range } from "../../../fachwerk.js"
;

export default {
  mixins: [Object2D],
  description: `
Repeats the contents in a shifted rectangular grid.

<f-scene grid>
  <f-group scale="0.5">
    <f-brick-pattern cols="3" rows="3" step="1">
      <f-box :stroke="color('red')" />
    </f-brick-pattern>
    <f-box />
  </f-group>
</f-scene>
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
  <f-group
    :transform="transform"
    :opacity="opacity"
  >
    <f-group :position="[(currentCols - 1) * step / -2, (currentRows - 1) * step / -2]">
      <f-group
        v-for="(_, yIndex) in range(0, currentRows - 1)"
        :key="yIndex"
      >
        <f-group
          v-for="(_, xIndex) in range(0, yIndex % 2 ? currentCols : currentCols - 1)"
          :key="xIndex"
          :position="[xIndex * step - (yIndex % 2 ? step / 2 : 0), yIndex * step]"
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
  `,
}