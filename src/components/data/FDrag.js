import { Vue, snapToGrid, color, set as setValue } from "../../../fachwerk.js";

export default {
  description: `
Allows dragging a set of points.

<f-scene grid v-slot="{ mouse }">
  <f-drag
    :mouse="mouse"
    :points="[{ x: 1, y: 0 },{ x: 0, y: 1 },{ x: -1, y: -1 }]"
    v-slot="{ points }"
    set="p"
  >
    <f-line :points="points" closed />
  </f-drag>
</f-scene>

<output>
{{ get('p') }}
</output> 
  `,
  props: {
    points: { default: "", type: [String, Number, Array, Object] },
    mouse: { default: () => {}, type: Object },
    r: { default: 30, type: [Number, String] },
    step: { default: false, type: [Boolean, Number, String] },
    set: {
      default: "",
      type: String,
      description: "Name for global value to set"
    }
  },
  slots: {
    points: {
      type: "array",
      description:
        "An array of points with each points as  `{ x: 0, y: 0 }` object"
    }
  },
  data: () => ({ currentPoints: [], pressed: false }),
  methods: {
    color,
    setValue,
    handleDown(i) {
      this.pressed = true;
      this.$set(this.currentPoints[i], "pressed", true);
    },
    handleUp(i) {
      this.pressed = false;
      this.$set(this.currentPoints[i], "pressed", false);
    }
  },
  computed: {
    finalPoints() {
      return this.currentPoints.map((p, i) => {
        if (p.pressed) {
          p.x = this.step ? snapToGrid(this.mouse.x, +this.step) : this.mouse.x;
          p.y = this.step ? snapToGrid(this.mouse.y, +this.step) : this.mouse.y;
        }
        return p;
      });
    }
  },
  mounted() {
    this.currentPoints = this.points;
    this.$emit("points", this.currentPoints);
    if (this.$global && this.set) {
      Vue.set(
        this.$global.$data.state,
        this.set,
        JSON.parse(JSON.stringify(this.finalPoints))
      );
    }
    this.$watch("mouse", _ => {
      if (this.pressed) {
        this.$emit("points", this.finalPoints);
      }
    });
  },
  template: `
    <f-group>
      <slot :points="finalPoints" />
      <f-group 
        v-for="(p,i) in finalPoints"
        :key="i"
      >
        <f-point
          :x="p.x"
          :y="p.y"
          :stroke="color('primary')"
          :stroke-width="p.pressed ? r + 3 : r"
        />  
        <f-point 
          :x="p.x"
          :y="p.y"
          stroke="white"
          :stroke-width="p.pressed ? r + 3 - 6 : r - 6"
          @mousedown.native="handleDown(i)"
          @touchstart.native="handleDown(i)"
          @mouseup.native="handleUp(i)"
          @touchend.native="handleUp(i)"
          @mousemove.native="() => pressed && set ? setValue(set, finalPoints) : ''"
          style="cursor: move;"
        />
      </f-group>    
    </f-group>
  `
};
