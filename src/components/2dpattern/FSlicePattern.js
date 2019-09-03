import Object2D from "../2d/internal/Object2D.js";
import { range, polarpoints } from "../../../fachwerk.js";

export default {
  mixins: [Object2D],
  description: `
Clips the children element and rotating each towards the center of the circle.

When \`:count="2"\`, the children element is horizontally mirrored around x axis, similar to \`<f-mirror-x>\`

<f-scene grid>
	<f-line
  	v-for="p in polarpoints()"
    :y2="p.y"
    :x2="p.x"
    opacity="0.25"
  />
  <f-slice-pattern>
    <f-rotation>
      <f-box
        :rotation="10"
        :stroke="color('red')"/>
      />
    </f-rotation>
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
  mounted() {
    this.$global.$on("refresh", () => {
      this.$forceUpdate()
    });
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
            [0,0],
            [polarpoints(count,r)[0].x, polarpoints(count,r)[0].y],
            [polarpoints(count,r)[1].x, polarpoints(count,r)[1].y]
          ]"
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
      :rotation="a"
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