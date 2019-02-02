import { deg2rad, parseCoords } from "../../../utils.js";
import { Object2d } from "../../../mixins.js";

export default {
  mixins: [Object2d],
  props: {
    x1: { default: 0, type: [Number,String] },
    y1: { default: 0, type: [Number,String] },
    x2: { default: 0, type: [Number,String] },
    y2: { default: 0, type: [Number,String] },
    startAngle: { default: 0, type: [Number,String] },
    endAngle: { default: 90, type: [Number,String] },
    padAngle: { default: 0, type: [Number,String] },
    r: { default: 1, type: [Number,String] },
    innerRadius: { default: 0.5, type: [Number,String] },
    cornerRadius: { default: 0, type: [Number,String] },
    stroke: { default: "var(--primary)", type: String },
    strokeWidth: { default: 3, type: [Number,String] },
    fill: { default: "none", type: String },
    position: { default: '0 0', type: [String, Number, Object, Array] },
    rotation: { default: '0', type: [String, Number, Object, Array] },
    scale: { default: '1', type: [String, Number, Object, Array] },
    opacity: { default: 1, type: [Number,String] },
  },
  computed: {
    path() {
      return d3
        .arc()
        .outerRadius(this.r)
        .innerRadius(this.innerRadius)
        .startAngle(deg2rad(this.startAngle))
        .endAngle(deg2rad(this.endAngle))
        .padAngle(deg2rad(this.padAngle))
        .cornerRadius(this.cornerRadius)
        ();
    }
  },
  template: `
    <path
      :d="path"
      :fill="fill"
      :stroke="stroke"
      :stroke-width="strokeWidth"
      :transform="transform"
      :opacity="opacity"
    />
  `
};
