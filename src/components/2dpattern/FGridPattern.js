import Object2D from "../2d/internal/Object2D.js";
import { range } from "../../../fachwerk.js";

export default {
  mixins: [Object2D],
  description: `
Repeats the contents in a 2D grid.

<f-scene grid>
  <f-grid-pattern>
    <f-box :stroke="color('red')" />
  </f-grid-pattern>
  <f-box />  
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
    opacity: { default: 1, type: Number }
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
    <f-group :position="[(currentRows - 1 * step) / -2,(currentCols - 1 * step) / -2]">
      <f-group
        v-for="(_, yIndex) in range(0, currentCols - 1)"
        :key="yIndex"
      >
        <f-group
          v-for="(_, xIndex) in range(0, currentRows - 1)"
          :key="xIndex"
          :position="[xIndex * step, yIndex * step]"
        >
          <slot />
        </f-group>
      </f-group>
    </f-group>
  </f-group>  
  `,
}