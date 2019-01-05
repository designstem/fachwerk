import { Object2d } from "../../mixins.js";
import { polarpoints } from "../../utils.js";

export default {
  mixins: [Object2d],
  tag: `2D repeat`,
  description: `
Repeats elements along the circle.
  `,
  example: `
<f-scene grid>
  <f-box />
  <f-repeat-circle>
    <f-box
      slot-scope="data"
      opacity="0.25"
      :stroke="color('red')"
    />
  </f-repeat-circle>
</f-scene>
  `,
  props: {
    count: { default: 6, type: [Number, String] },
    r: { default: 1, type: [Number, String] },
    position: { default: () => ({}), type: Object },
    rotation: { default: () => ({}), type: Object },
    scale: { default: () => ({}), type: Object },
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