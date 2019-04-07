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
  template: `
    <f-group>
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