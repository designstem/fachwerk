import { Object2d } from "../../mixins.js";
import { color, polarpoints, positionTransform } from "../../utils.js";

export default {
  mixins: [Object2d],
  description: `
Description to be written.

<f-scene grid>
  <f-regularpolygon />
  <f-regularpolygon count="3" />
</f-scene>
  `,
  props: {
    x: { default: '', type: [Number, String] },
    y: { default: '', type: [Number, String] },
    count: { default: 6, type: [Number,String] },
    r: { default: 1, type: [Number,String] },
    stroke: { default: "color('primary')", type: String },
    strokeWidth: { default: 3, type: [Number,String] },
    fill: { default: "none", type: String },
    position: { default: '0 0', type: [String, Number, Object, Array] },
    rotation: { default: '0', type: [String, Number, Object, Array] },
    scale: { default: '1', type: [String, Number, Object, Array] },
    opacity: { default: 1, type: [Number,String] },
  },
  methods: { polarpoints, positionTransform },
  computed: {
    strokeColor() {
      return this.stroke == "color('primary')" ? color("primary") : this.stroke;
    }
  },
  template: `
    <f-group :transform="transform">
    <f-polygon
      :points="polarpoints(count,r)"
      :stroke="strokeColor"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
      :fill="fill"
      :transform="positionTransform([[x || 0, y || 0]])"
      :opacity="opacity"
    />
    </f-group>
  `
};
