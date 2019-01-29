import { Object2d } from "../../mixins.js";

export default {
  mixins: [Object2d],
  description: `
Mirrors children element around vertical y axis.

<f-scene grid>
  <f-box
    :rotation="{z:10}"
    opacity="0.5"
  />
  <f-mirror-y>
    <f-box
      :rotation="{z:10}"
      :stroke="color('red')"/>
  </f-mirror-y>
</f-scene>
  `,
  props: {
    r: { default: 1, type: [Number, String] },
    position: { default: '0 0', type: [String, Number, Object, Array] },
    rotation: { default: '0', type: [String, Number, Object, Array] },
    scale: { default: '1', type: [String, Number, Object, Array] },
    opacity: { default: 1, type: [Number, String] }
  },
  computed: {
    id() { return 'id' + Math.random() }
  },
  template: `
  <f-group
    :transform="transform"
    :opacity="opacity"
  >
    <defs>
      <clipPath :id="id">
        <rect
          x="0"
          :y="-r"
          :width="r"
          :height="r * 2"
        />
      </clipPath>
    </defs>

    <f-group :clip-path="'url(#' + id + ')'">
      <slot :value="0" />
    </f-group>
    <f-group
      :clip-path="'url(#' + id + ')'"
      transform="scale(-1,1)"
    >
      <slot :value="1" />
    </f-group>

  </f-group>  
  `
};