import { Object2d } from "../../mixins.js";
import { range, polarpoints } from "../../utils.js";

export default {
  mixins: [Object2d],
  description: `
Clips the children element and rotating each towards the center of the circle.

When \`:count="2"\`, the children element is horizontally mirrored around x axis, similar to \`<f-mirror-x>\`

<f-scene grid>
  <f-box
    :rotation="10"
    opacity="0.5"
  />
  <f-slice-pattern>
    <f-box
      :rotation="10"
      :stroke="color('red')"/>
    />
  </f-slice-pattern>
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
  methods: { polarpoints, range },
  computed: {
    id1() { return `id1${Math.random()}` },
    id2() { return `id2${Math.random()}` }
  },
  template: `
  <f-group
    :transform="transform"
    :opacity="opacity"
  >
    <defs>
      <clipPath :id="id1">
        <polygon
          :points="[
            {x: 0, y: 0},
            {x: polarpoints(count,r)[0].x, y: polarpoints(count,r)[0].y },
            {x: polarpoints(count,r)[1].x, y: polarpoints(count,r)[1].y }
          ].map(p => p.x + ',' + p.y).join(' ')"
        />
      </clipPath>
      <clipPath :id="id2">
        <rect
          x="0"
          :y="-r"
          :width="r"
          :height="r * 2"
        />
      </clipPath>
    </defs>
    <f-group
      v-if="count > 2"
      v-for="(a,i) in range(0,360,360 / count)"
      :key="i"
      :rotation="{z: a}"
      :clip-path="'url(#' + id1 + ')'"
    >
      <slot :value="i" />
    </f-group>
    <f-group v-if="count == 2">
      <f-group :clip-path="'url(#' + id2 + ')'">
        <slot :value="0" />
      </f-group>
      <f-group
        :clip-path="'url(#' + id2 + ')'"
        transform="scale(-1,1)"
      >
        <slot :value="1" />
      </f-group>
    </f-group>
  </f-group>  
  `
};