import { Object2d } from "../../mixins.js";

export default {
  mixins: [Object2d],
  tag: `2D repeat`,
  description: `
Mirrors children element around horizontal x axis.
  `,
  example: `
<f-scene grid>
  <f-box
    :rotation="{z:10}"
    opacity="0.25"
  />
  <f-mirror-x>
    <f-box
      :rotation="{z:10}"
      :stroke="color('red')"
    />
  </f-mirror-x>
</f-scene>
  `,
  props: {
    r: { default: 1, type: [Number, String] },
    position: { default: () => ({}), type: Object },
    rotation: { default: () => ({}), type: Object },
    scale: { default: () => ({}), type: Object },
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
          :x="-r"
          :y="0"
          :width="r * 2"
          :height="r"
        />
      </clipPath>
    </defs>

    <f-group :clip-path="'url(#' + id + ')'">
      <slot :value="0" />
    </f-group>
    <f-group
      :clip-path="'url(#' + id + ')'"
      transform="scale(1,-1)"
    >
      <slot :value="1" />
    </f-group>

  </f-group>  
  `
}