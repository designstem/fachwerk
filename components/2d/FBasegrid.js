import { range } from "../../utils.js"

export default {
  props: {
    innerX: { default: 0, type: Number },
    innerY: { default: 0, type: Number },
    innerWidth: { default: 250, type: Number },
    innerHeight: { default: 250, type: Number },
    step: { default: 25, type: Number },
    opacity: { default: 0.15, type: Number }
  },
  methods: { range },
  template: `
    <f-group>
      <line
        v-for="(x,i) in range(innerX,innerX + innerWidth, step)"
        :key="i"
        :x1="x"
        :y1="innerY"
        :x2="x"
        :y2="innerY + innerHeight"
        stroke="var(--primary)"
        :opacity="opacity"
      />
      <line
        v-for="(y,i) in range(innerY,innerY + innerHeight, step)"
        :key="i"
        :x1="innerX"
        :y1="y"
        :x2="innerX + innerWidth"
        :y2="y"
        stroke="var(--primary)"
        :opacity="opacity"
      />
    </f-group>
  `
}
