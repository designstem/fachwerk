import Object2D from "../2d/internal/Object2D.js";

export default {
  mixins: [Object2D],
  description: `
Mirrors children element around horizontal x axis.

<f-scene grid>
  <f-mirror-x>
  	<f-rotation>
      <f-box
        rotation="10"
        :stroke="color('red')"
      />
    </f-rotation>
  </f-mirror-x>
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