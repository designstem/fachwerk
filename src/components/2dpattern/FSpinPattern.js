import Object2D from "../2d/internal/Object2D.js";
import { range } from "../../utils.js"
;

export default {
  mixins: [Object2D],
  description: `
Repeats elements along the circle, rotating each towards the center of the circle.

<f-scene grid>
  <f-spin-pattern>
    <f-box
      slot-scope="data"
      :stroke="color('red')"
    />
    <f-box />
  </f-spin-pattern>
  <f-box />
</f-scene>
  `,
  props: {
    count: { default: 6, type: [Number, String] },
    r: { default: 1, type: [Number, String] },
    position: { default: '0 0', type: [String, Number, Object, Array] },
    rotation: { default: '0', type: [String, Number, Object, Array] },
    scale: { default: '1', type: [String, Number, Object, Array] },
    opacity: { default: 1, type: [Number, String] }
  },
  methods: { range },
  template: `
  <f-group
    :transform="transform"
    :opacity="opacity"
  >
    <f-group
      v-for="(a,i) in range(0,360,360 / count)"
      :key="i"
      :rotation="a"
    >
      <f-group :position="[r,0]">
        <slot :value="i" />
      </f-group>
    </f-group>
  </f-group>  
  `
};