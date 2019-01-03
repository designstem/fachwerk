import { Object2D } from "./2d.js";
import { range, polarpoints } from "../../utils.js";

export default {
  mixins: [Object2D],
  tag: `2D`,
  description: `
Repeats clipped elements along the circle, rotating each towards the center of the circle.
  `,
  example: `
<f-scene>
  <f-repeat-slice>
    <f-box slot-scope="data" />
  </f-repeat-slice>
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
  methods: { polarpoints, range },
  computed: {
    id() { return Math.random() }
  },
  template: `
  <f-group
    :transform="transform"
    :opacity="opacity"
  >
    <defs>
      <clipPath :id="id">
        <polygon
          :points="[
            {x: 0, y: 0},
            {x: polarpoints(count,r)[0].x, y: polarpoints(count,r)[0].y },
            {x: polarpoints(count,r)[1].x, y: polarpoints(count,r)[1].y }
          ].map(p => p.x + ',' + p.y).join(' ')"
        />
      </clipPath>
    </defs>
    <f-group
      v-for="(a,i) in range(0,360,360 / count)"
      :key="i"
      :rotation="{z: a}"
      :clip-path="'url(#' + id + ')'"
    >
      <slot :value="i" stroke="red" />
    </f-group>
  </f-group>  
  `
};