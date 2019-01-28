import { parseCoords, snapToGrid } from "../../utils.js";

export default {
  description: `
2D vector graphics scene with a coordinate system optimized for graph drawing. For more general vector graphics see \`<f-artboard>\`.

<f-scene grid="true">
  
  <f-point x="1" y="1" />
  <f-text x="1" y="1.5">
    x:1 y:1
  </f-text>
  
  <f-point x="-1" y="-1" />
  <f-text x="-1" y="-0.5">
    x:-1 y:-1
  </f-text>

</f-scene>
  `,
  props: {
    width: {
      default: 300,
      type: [Number, String],
      description: "Scene width in pixels"
    },
    height: {
      default: 250,
      type: [Number, String],
      description: "Scene height in pixels"
    },
    grid: {
      default: false,
      type: [Boolean, String],
      description: "Show background grid?"
    },
    step: {
      default: 0.5,
      type: [Number, String],
      description: "Background grid step"
    },
    points: { default: "", type: [String, Number, Array, Object] },
    snap: { default: false, type: Boolean },
    set: { default: "", type: String }
  },
  data: () => ({ currentPoints: [] }),
  methods: {
    handleDown(i) {
      this.$set(this.currentPoints[i], "pressed", true);
    },
    handleUp(i) {
      this.$set(this.currentPoints[i], "pressed", false);
    },
    finalPoints(mouse) {
      const newPoints = this.currentPoints.map((p, i) => {
        if (p.pressed) {
          p.x = this.snap ? snapToGrid(mouse.x, this.step) : mouse.x;
          p.y = this.snap ? snapToGrid(mouse.y, this.step) : mouse.y;
        }
        return p;
      });
      this.$emit("value", { mouse, points: newPoints || [] });
      this.$emit("input", { mouse, points: newPoints || [] });
      if (this.set) {
        Vue.set(this.$global.$data.state, this.set, JSON.parse(JSON.stringify(newPoints)));
      }
      return newPoints;
    }
  },
  computed: {
    innerWidth() {
      return this.width >= this.height ? (4 * this.width) / this.height : 4;
    },
    innerHeight() {
      return this.width >= this.height ? 4 : (4 * this.height) / this.width;
    },
    innerX() {
      return this.innerWidth / -2;
    },
    innerY() {
      return this.innerHeight / -2;
    }
  },
  mounted() {
    if (this.points) {
      const points = parseCoords(this.points).map(p => ({
        x: p[0],
        y: p[1]
      }));
      this.currentPoints = points;
    }
  },
  template: `
  <f-svg 
    :width="width"
    :height="height"
    :inner-x="innerX"
    :inner-y="innerY"
    :inner-width="innerWidth"
    :inner-height="innerHeight"
    :flip-y="true"
    style="
      --text-size: 1.4%;
      --text-transform: scale(1,-1);
    "
  >
    <f-group slot-scope="{ mouse }">
      <f-basegrid
        v-if="grid"
        :inner-x="innerX"
        :inner-y="innerY"
        :inner-width="innerWidth"
        :inner-height="innerHeight"
        :step="step"
      />
      <slot :mouse="mouse" :points="finalPoints(mouse)" />
      <f-circle 
        v-for="(p,i) in finalPoints(mouse)"
        :key="i"
        :x="p.x"
        :y="p.y"
        :r="p.pressed ? 0.32  : 0.3"
        fill="rgba(255,255,255,0.95)"
        @mousedown.native="handleDown(i)"
        @touchstart.native="handleDown(i)"
        @mouseup.native="handleUp(i)"
        @touchend.native="handleUp(i)"
        style="cursor: move;"
      />       
    </f-group>
  </f-svg>
  `
};
