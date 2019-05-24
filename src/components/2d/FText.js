import Object2D from "./internal/Object2D.js";
import {
  color,
  positionTransform,
  rotationTransform,
  scaleTransform
} from "../../../fachwerk.js";

export default {
  mixins: [Object2D],
  description: `
Adds a text to the \`f-scene\`.  

<f-scene grid>
  <f-text>x:0 y:0</f-text>
</f-scene>
  `,
  props: {
    x: { default: "", type: [Number, String] },
    y: { default: "", type: [Number, String] },
    fill: { default: "color('primary')", type: String },
    position: { default: "0 0", type: [String, Number, Object, Array] },
    rotation: { default: "0", type: [String, Number, Object, Array] },
    scale: { default: "1", type: [String, Number, Object, Array] },
    opacity: { default: 1, type: [Number, String] }
  },
  computed: {
    currentTransform() {
      return `${positionTransform(
        this.x || this.y ? [this.x || 0, this.y || 0] : this.position
      )} ${rotationTransform(this.rotation)} ${scaleTransform(this.scale)}`;
    },
    fillColor() {
      return this.fill == "color('primary')" ? color("primary") : this.fill;
    }
  },
  template: `
  <f-group :transform="currentTransform">
    <text
      text-anchor="middle"
      alignment-baseline="middle"
      transform="scale(1,-1)"
      :style="{
        fill: fillColor
      }"
      y="-1.5"
    >
      <slot />
    </text>
  </f-group>
  `
};
