import { Object2d } from "../../../dist/mixins.js";

export default {
  mixins: [Object2d],
  description: `
Description to be written.

<f-scene grid>
  <f-hexagon />
  <f-hexagon r="0.5" />
</f-scene>
  `,
  props: {
    x: { default: '', type: [Number, String] },
    y: { default: '', type: [Number, String] },
    r: { default: 1, type: [Number,String] },
    stroke: { default: "color('primary')", type: String },
    strokeWidth: { default: 3, type: [Number,String] },
    fill: { default: "none", type: String },
    position: { default: '0 0', type: [String, Number, Object, Array] },
    rotation: { default: '0', type: [String, Number, Object, Array] },
    scale: { default: '1', type: [String, Number, Object, Array] },
    opacity: { default: 1, type: [Number,String] },
  },
  template: `
    <f-regularpolygon
      :x="x"
      :y="y"
      :r="r"
      :stroke="stroke"
      :stroke-width="strokeWidth"
      :fill="fill"
      :transform="transform"
      :opacity="opacity"
    />
  `
};
