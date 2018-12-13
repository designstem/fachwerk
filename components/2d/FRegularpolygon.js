import { color, cpoints } from "../../utils.js";
import { Object2D } from "./2d.js";

export default {
  mixins: [Object2D],
  tag: "2D",
  description: `
  `,
  example: `
<f-scene>
  <f-regularpolygon />
  <f-regularpolygon :count="3" />
</f-scene>
  `,
  props: {
    x: { default: false, type: [Number, Boolean] },
    y: { default: false, type: [Number, Boolean] },
    count: { default: 6, type: [Number,String] },
    r: { default: 1, type: [Number,String] },
    stroke: { default: "color('primary')", type: String },
    strokeWidth: { default: 3, type: [Number,String] },
    fill: { default: "none", type: String },
    position: { default: () => ({}), type: [Object,String] },
    rotation: { default: () => ({}), type: [Object,String] },
    scale: { default: () => ({}), type: [Object,String] },
    opacity: { default: 1, type: [Number,String] }
  },
  methods: { cpoints },
  computed: {
    strokeColor() {
      return this.stroke == "color('primary')" ? color("primary") : this.stroke;
    },
    currentTransform() {
      const position =
        typeof this.position == "string"
          ? this.parseTransform(this.position)[0]
          : this.position;
      return `${
        this.x || this.y
          ? `translate(${this.x || 0} ${this.y || 0})`
          : `translate(${position.x || 0} ${position.y || 0})`
      } ${this.rotationTransform} ${this.scaleTransform}`;
    }
  },
  template: `
    <f-polygon
      :points="cpoints(count,r)"
      :stroke="strokeColor"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
      :fill="fill"
      :transform="currentTransform"
      :opacity="opacity"
    />
  `
};
