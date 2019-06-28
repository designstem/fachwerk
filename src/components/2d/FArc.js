
import { d3, deg2rad } from "../../../fachwerk.js"
;
import Object2D from "./internal/Object2D.js";

export default {
  mixins: [Object2D],
  description: `
Draws and arc from \`start-angle\` to \`end-angle\` and it supports lot of different props for customizing the arc.

Technically the component is based on [d3.arc](https://github.com/d3/d3-shape#arcs).

<f-scene grid>
	<f-arc />
  <f-arc
    r="1"
    inner-radius="0.5"
    start-angle="180"
    end-angle="360"
    pad-angle="10"
    corner-radius="0.1"
    :stroke="color('red')"
  />
</f-scene>
  `,
  props: {
    x1: { default: 0, type: [Number, String] },
    y1: { default: 0, type: [Number, String] },
    x2: { default: 0, type: [Number, String] },
    y2: { default: 0, type: [Number, String] },
    startAngle: { default: 0, type: [Number, String] },
    endAngle: { default: 180, type: [Number, String] },
    padAngle: { default: 0, type: [Number, String] },
    r: { default: 1, type: [Number, String] },
    innerRadius: { default: 1, type: [Number, String] },
    cornerRadius: { default: 0, type: [Number, String] },
    stroke: { default: "var(--primary)", type: String },
    strokeWidth: { default: 3, type: [Number, String] },
    fill: { default: "none", type: String },
    position: { default: "0 0", type: [String, Number, Object, Array] },
    rotation: { default: "0", type: [String, Number, Object, Array] },
    scale: { default: "1", type: [String, Number, Object, Array] },
    opacity: { default: 1, type: [Number, String] }
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
        .cornerRadius(this.cornerRadius)();
    },
    currentStrokeWidth() {
      return this.strokeWidth * this.innerScale() * (1 / this.scale)
    },
  },
  template: `
    <path
      :d="path"
      :fill="fill"
      :stroke="stroke"
      :stroke-width="currentStrokeWidth"
      :transform="transform"
      :opacity="opacity"
    />
  `
};
