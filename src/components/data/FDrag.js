import { snapToGrid } from "../../../fachwerk.js";

export default {
  description: `
Allows dragging a set of points.

<f-scene grid v-slot="{ mouse }">
  <f-drag
    :mouse="mouse"
    :points="[{ x: 1, y: 0 },{ x: 0, y: 1 },{ x: -1, y: -1 }]"
    v-slot="{ points }"
  >
    <f-line :points="points" closed />
  </f-drag>
</f-scene>  
  `,
  props: {
    points: { default: "", type: [String, Number, Array, Object] },
    mouse: { default: () => {}, type: Object },
    step: { default: false, type: [Boolean, Number, String] }
  },
  slots: {
    points: {
      type: "array",
      description: "An array of points with each points as  `{ x: 0, y: 0 }` object"
    }
  },
  data: () => ({ currentPoints: [] }),
  methods: {
    handleDown(i) {
      this.$set(this.currentPoints[i], "pressed", true);
    },
    handleUp(i) {
      this.$set(this.currentPoints[i], "pressed", false);
    }
  },
  computed: {
    finalPoints() {
      return this.currentPoints.map((p, i) => {
        if (p.pressed) {
          p.x = this.step ? snapToGrid(this.mouse.x, this.step) : this.mouse.x;
          p.y = this.step ? snapToGrid(this.mouse.y, this.step) : this.mouse.y;
        }
        return p;
      });
    }
  },
  mounted() {
    this.currentPoints = this.points;
  },
  template: `
    <f-group>
      <slot :points="finalPoints" />
      <f-circle 
        v-for="(p,i) in finalPoints"
        :key="i"
        :x="p.x"
        :y="p.y"
        :r="p.pressed ? 20.32  : 20.3"
        fill="rgba(255,255,255,0.95)"
        @mousedown.native="handleDown(i)"
        @touchstart.native="handleDown(i)"
        @mouseup.native="handleUp(i)"
        @touchend.native="handleUp(i)"
        style="cursor: move;"
      />        
    </f-group>
  `
};
