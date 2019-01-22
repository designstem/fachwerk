import { Object2d } from "../../mixins.js";
import { color } from "../../utils.js"

export default {
  mixins: [Object2d],
  description: `
Adds a text to the \`f-scene\`.  

<f-scene grid>
  <f-text>x:0 y:0</f-text>
</f-scene>
  `,
  props: {
    x: { default: 0, type: [Number,String] },
    y: { default: 0, type: [Number,String] },
    fill: { default: "color('primary')", type: String },
    position: { default: '0 0', type: [String, Number, Object, Array] },
    rotation: { default: '0', type: [String, Number, Object, Array] },
    scale: { default: '1', type: [String, Number, Object, Array] },
    opacity: { default: 1, type: [Number,String] },
  },
  computed: {
    fillColor() {
      return this.fill == "color('primary')" ? color('primary') : this.fill
    }
  },
  template: `
  <f-group :position="{x: x, y: y}" :transform="transform">
    <text
      text-anchor="middle"
      alignment-baseline="middle"
      transform="scale(1,-1)"
      :style="{
        fontFamily: 'var(--font-mono)',
        fill: fillColor
      }"
    >
      <slot />
    </text>
  </f-group>
  `
}