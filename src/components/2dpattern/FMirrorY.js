import Object2D from "../2d/internal/Object2D.js";

export default {
  mixins: [Object2D],
  description: `
Mirrors children element around vertical y axis.

<f-scene grid>
  <f-mirror-y>
  	<f-rotation>
      <f-box
        rotation="10"
        :stroke="color('red')"
      />
    </f-rotation>
  </f-mirror-y>
</f-scene>
  `,
  props: {
    r: { default: 1, type: [Number, String] },
    step: { default: 0, type: [Number, String] },
    position: { default: '0 0', type: [String, Number, Object, Array] },
    rotation: { default: '0', type: [String, Number, Object, Array] },
    scale: { default: '1', type: [String, Number, Object, Array] },
    opacity: { default: 1, type: [Number, String] }
  },
  computed: {
    id() { return 'id' + Math.random() }
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
      <f-group :position="[step,0]">
        <slot :value="0" />
      </f-group>
    </f-group>
    <f-group
      :clip-path="'url(#' + id + ')'"
      transform="scale(-1,1)"
    >
      <f-group :position="[step,0]">
        <slot :value="1" />
      </f-group>
    </f-group>

  </f-group>  
  `
};