import Object2D from "../2d/internal/Object2D.js";
import { polarpoints } from "../../utils.js"
;

export default {
  mixins: [Object2D],
  description: `
Repeats elements along the circle.

<f-scene grid>
  <f-box />
  <f-circle-pattern>
    <f-box
      slot-scope="data"
      :stroke="color('red')"
    />
  </f-circle-pattern>
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
  methods: { polarpoints },
  template: `
  <f-group
    :transform="transform"
    :opacity="opacity"
  >
    <f-group
      v-for="(p,i) in polarpoints(count,r)"
      :key="i"
      :position="p"
    >
      <slot :value="i" />
    </f-group>
  </f-group>  
  `
};