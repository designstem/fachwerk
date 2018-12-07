import { range, color } from "../../utils.js"

export default {
  props: {
    innerX: { default: 0, type: Number },
    innerY: { default: 0, type: Number },
    innerWidth: { default: 250, type: Number },
    innerHeight: { default: 250, type: Number },
    step: { default: 25, type: Number },
    opacity: { default: 0.15, type: Number }
  },
  methods: { range, color },
  template: `
    <f-group>
      <f-line
        :x1="0"
        :y1="innerY"
        :x2="0"
        :y2="innerY + innerHeight"
        :stroke="color('primary')"
        :stroke-width="1"
        :opacity="opacity * 1.5"
      />
      <f-line
        :x1="innerX"
        :y1="0"
        :x2="innerX + innerWidth"
        :y2="0"
        :stroke="color('primary')"
        :stroke-width="1"
        :opacity="opacity * 1.5"
      />
      <f-line
        v-for="(x,i) in range(innerX,innerX + innerWidth,step)"
        :key="'x' + i"
        :x1="x"
        :y1="innerY"
        :x2="x"
        :y2="innerY + innerHeight"
        :stroke="color('primary')"
        :stroke-width="1"
        :opacity="opacity"
      />
      <f-line
        v-for="(y,i) in range(innerY,innerY + innerHeight,step)"
        :key="'y' + i"
        :x1="innerX"
        :y1="y"
        :x2="innerX + innerWidth"
        :y2="y"
        :stroke="color('primary')"
        :stroke-width="1"
        :opacity="opacity"
      />
    </f-group>
  `
}
