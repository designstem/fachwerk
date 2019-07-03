import { range, color  } from '../../../fachwerk.js'

export default {
  props: {
    innerX: { default: 0, type: [Number,String] },
    innerY: { default: 0, type: [Number,String] },
    innerWidth: { default: 600, type: [Number,String] },
    innerHeight: { default: 600, type:[Number,String] },
    step: { default: 25, type: [Number,String] },
    opacity: { default: 0.5, type: [Number,String] }
  },
  methods: { range, color },
  template: `
  <f-group>
    <f-group
      v-for="(y,j) in range(innerY,innerY + innerHeight, step)"
      :key="j"
    >
      <f-point
        v-for="(x,i) in range(innerX,innerX + innerWidth, step)"
        :key="i"
        :position="[x,y]"
        :r="1"
        :opacity="opacity"
      />
    </f-group>
  </f-group>
  `,
  template2: `
    <f-group>
      <f-line
        :x1="0"
        :y1="innerY"
        :x2="0"
        :y2="innerY + innerHeight"
        :stroke="color('primary')"
        :stroke-width="1"
        :opacity="opacity * 1.25"
      />
      <f-line
        :x1="innerX"
        :y1="0"
        :x2="innerX + innerWidth"
        :y2="0"
        :stroke="color('primary')"
        :stroke-width="1"
        :opacity="opacity * 1.25"
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
