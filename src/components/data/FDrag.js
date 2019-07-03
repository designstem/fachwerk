import {
  Vue,
  snapToGrid,
  color,
  set as setValue,
  parseCoords
} from "../../../fachwerk.js";

export default {
  description: `
Allows dragging a set of points.

<f-scene grid v-slot="{ mouse }" width="200">
  <f-drag
    :mouse="mouse"
    points="-1 1, 1 1, 1 -1, -1 -1"
    v-slot="{ points }"
    set="p"
  >
    <f-line :points="points" closed />
  </f-drag>
</f-scene>

<f-scene grid width="200">
	<f-spin-pattern scale="0.5" r="2">
		<f-line :points="get('p')" closed />
  </f-spin-pattern>
</f-scene>

<pre>{{ get('p') }}</pre> 
  `,
  props: {
    points: { default: "", type: [String, Number, Array, Object] },
    mouse: { default: () => {}, type: Object },
    r: { default: 10, type: [Number, String] },
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
    parsedPoints() {
      return this.points
        ? parseCoords(this.points).map(p => ({ x: p[0], y: p[1] }))
        : [];
    },
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
    this.currentPoints = this.parsedPoints;
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
        if (this.$global && this.set) {
          Vue.set(
            this.$global.$data.state,
            this.set,
            JSON.parse(JSON.stringify(this.finalPoints))
          );
        }
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
          :stroke-width="p.pressed ? r + 1.5 : r"
        />  
        <f-point 
          :x="p.x"
          :y="p.y"
          stroke="white"
          :stroke-width="p.pressed ? r + 1.5 - 3 : r - 3"
          @mousedown.native="handleDown(i)"
          @touchstart.native="handleDown(i)"
          @mouseup.native="handleUp(i)"
          @touchend.native="handleUp(i)"
          style="cursor: move;"
        />
      </f-group>    
    </f-group>
  `
};
