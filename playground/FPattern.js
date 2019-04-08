import { utils } from '../fachwerk.js'

export default {
  methods: {
    ...utils
  },
  props: {
    step: { default: 1 },
    rows: { default: 3 },
    cols: { default: 3 },
  },
  computed: {
    xStep() {
      return this.polarx(60,this.step) * 2
    },
    yStep() {
      return this.step - this.polary(60,this.step)
    }
  },
  template: `
    <f-group>
      <f-group
        v-for="(_, yIndex) in range(0, rows - 1)"
        :key="yIndex"
      >
        <f-group
          v-for="(_, xIndex) in range(0, cols - 1)"
          :key="xIndex"
          :position="[xIndex * xStep - (yIndex % 2 ? xStep / 2 : 0), yIndex * yStep]"
        >
          <slot />
        </f-group>
      </f-group>
    </f-group>
  `
}

export const A = {
  methods: {
    ...utils
  },
  props: {
    step: { default: 1 },
    rows: { default: 3 },
    cols: { default: 3 },
  },
  template: `
    <f-group :position="[(cols - 1 * step) / -2, (rows - 1 * step) / -2]">
      <f-group
        v-for="(_, yIndex) in range(0, rows - 1)"
        :key="yIndex"
      >
        <f-group
          v-for="(_, xIndex) in range(0, yIndex % 2 ? cols : cols - 1)"
          :key="xIndex"
          :position="[xIndex * step - (yIndex % 2 ? step / 2 : 0), yIndex * step]"
        >
          <slot />
        </f-group>
      </f-group>
    </f-group>
  `,
  template2: `
  <f-group :position="[(cols - 1 * step) / -2, (rows - 1 * step) / -2]">
    <f-group
      v-for="(_, yIndex) in range(0, cols - 1)"
      :key="yIndex"
    >
      <f-group
        v-for="(_, xIndex) in range(0, rows - 1)"
        :key="xIndex"
        :position="[xIndex * step, yIndex * step]"
      >
        <slot />
      </f-group>
    </f-group>
  </f-group>
`
}