import Css from "../../mixins/Css.js";
import { snapToGrid } from "../utils.js"

export default {
  description: `
Draggable component.
`,
  example: `
<TwoSceneScope>  
  <TwoDragScope
    slot-scope="mouseData"
    :mouseData="mouseData"
    :points="[{ x: 0, y: 1 },{ x: 1, y: -1 },{ x: -1, y: -1 }]"
    :snap="true"
  >
    <g slot-scope="dragData">
      <TwoGrid />
      <TwoPolygon :points="dragData.dragData" />
    </g> 
  </TwoDragScope>
</TwoSceneScope>
  `,
  props: ['mouseData', 'points', 'snap' ],
  data: function() {
    return { draggablePoints: this.points }
  },
  methods: {
    handleMove(p) {
      if (p.pressed) {
        p.x = this.snap ? snapToGrid(this.mouseData.value.mouseX, 0.25) : this.mouseData.value.mouseX
        p.y = this.snap ? snapToGrid(this.mouseData.value.mouseY, 0.25) : this.mouseData.value.mouseY
      }
    }
  },
  template: `
    <g>
      <slot :dragData="draggablePoints" />
      <g v-for="(p,i) in draggablePoints">
        <circle
          :cx="p.x"
          :cy="p.y"
          :r="p.active ? 0.21 : 0.2"
          stroke-width="3"
          stroke="black"
          :fill="p.pressed ? '#eee' : 'white'"
        />
        <circle
          :cx="p.x"
          :cy="p.y"
          r="1"
          fill="rgba(0,0,0,0)"
          @mouseout="p.pressed = false"
        />
        <circle
          :cx="p.x"
          :cy="p.y"
          r="0.5"
          fill="rgba(0,0,0,0)"
          style="cursor: pointer"
          @mouseover="p.active = true"
          @mouseout="p.active = false"
          @mousedown="p.pressed = true"
          @mouseup="p.pressed = false"
          @mousemove="handleMove(p)"
        />
      </g>
    </g>
  `,
};
