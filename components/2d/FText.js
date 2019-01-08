import { color } from "../../utils.js"

export default {
  description: `
Adds a text to the \`f-scene\`.  

<f-scene grid>
  <f-text>x:0 y:0</f-text>
</f-scene>
  `,
  props: {
    x: { default: 0, type: [Number,String] },
    y: { default: 0, type: [Number,String] },
    fill: { default: "color('primary')", type: String }
  },
  computed: {
    fillColor() {
      return this.fill == "color('primary')" ? color('primary') : this.fill
    }
  },
  template: `
  <f-group :position="{x: x, y: y}">
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