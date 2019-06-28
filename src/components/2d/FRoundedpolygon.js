import { color, range, scale, polarx, polary, linepoint } from "../../../fachwerk.js";

export default {
  props: {
    x: { default: 0, type: [Number, String] },
    y: { default: 0, type: [Number, String] },
    r: { default: 1, type: [Number, String] },
    cornerRadius: { default: 0.5, type: [Number, String] },
    stroke: { default: "color('primary')", type: String },
    strokeWidth: { default: 3, type: [Number, String] },
    fill: { default: "none", type: String },
  },
  methods: {
    color,
    range,
    scale,
    polarx,
    polary,
    linepoint
  },
  computed: {
    strokeColor() {
      return this.stroke == "color('primary')" ? color("primary") : this.stroke;
    },
  },
  template: `
  <f-group :scale="r" :position="[x,y]">
    <f-group
      v-for="a in range(0,5)"
      :rotation="360 / 6 * a"
      :key="a"
    >
    <!-- Fill -->
    <f-circle
      :r="scale(cornerRadius,0,1,Math.sqrt(3) / 2,0)"
      :position="[0,-cornerRadius]"
      stroke
      :fill="fill"
    />
    <f-line
      v-for="(a, i) in [-360 / 6, 360 / 6]"
      :key="'f' + i"
      :points="[[0,0],linepoint(
        polarx(),
        polary(),
        polarx(a),
        polary(a),
        0.5
      ),linepoint(
        polarx(),
        polary(),
        polarx(a),
        polary(a),
        (1 - cornerRadius) / 2
      ),
      [0,-cornerRadius],[0,0]]"
      stroke
      :fill="fill"
    />
      <!-- Stroke -->
      <f-arc
      :stroke="strokeColor"
      :strokeWidth="strokeWidth"
      :start-angle="-360 / (6 * 2)"
      :end-angle="360 / (6 * 2)"
      :r="scale(cornerRadius,0,1,Math.sqrt(3) / 2,0)"
      :inner-radius="scale(cornerRadius,0,1,Math.sqrt(3) / 2,0)"
      :position="[0,-cornerRadius]"
    />
    <f-line
      v-for="(a, i) in [-360 / 6, 360 / 6]"
      :key="'s' + i"
      :points="[linepoint(
        polarx(),
        polary(),
        polarx(a),
        polary(a),
        0.5
      ),linepoint(
        polarx(),
        polary(),
        polarx(a),
        polary(a),
        (1 - cornerRadius) / 2
      )]"
      :strokeWidth="strokeWidth"
      :stroke="strokeColor"
    />
    </f-group>
  </f-group>
  `
};
