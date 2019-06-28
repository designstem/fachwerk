export default {
  description: `
2D vector graphics scene with a coordinate system optimized for graph drawing. For more general vector graphics see \`<f-artboard>\`.

<f-scene grid v-slot="{ mouse }">
	<f-circle
  	:x="mouse.x"
    :y="mouse.y"
    :r="mouse.pressed ? 0.5 : 1"
  />
</f-scene>
  `,
  props: {
    width: {
      default: 300,
      type: [Number, String],
      description: "Scene width in pixels"
    },
    height: {
      default: 300,
      type: [Number, String],
      description: "Scene height in pixels"
    },
    grid: {
      default: false,
      type: [Boolean, String],
      description: "Show background grid?"
    },
    axis: {
      default: false,
      type: [Boolean, String],
      description: "Show axises"
    },
    step: {
      default: 0.5,
      type: [Number, String],
      description: "Background grid step"
    },
    id: { default: "scene", type: String }
  },
  slots: {
    mouse: {
      type: "object",
      description: "Mouse data as `mouse.x` `mouse.y` `mouse.pressed`"
    }
  },
  computed: {
    innerWidth() {
      return this.width >= this.height ? (4 * this.width) / this.height : 4;
    },
    innerHeight() {
      return this.width >= this.height ? 4 : (4 * this.height) / this.width;
    },
    innerX() {
      return this.innerWidth / -2;
    },
    innerY() {
      return this.innerHeight / -2;
    }
  },
  template: `
  <f-svg 
    :width="width"
    :height="height"
    :inner-x="innerX"
    :inner-y="innerY"
    :inner-width="innerWidth"
    :inner-height="innerHeight"
    :flip-y="true"
    style="
      --text-size: 1.4%;
      --text-transform: scale(1,-1);
    "
    v-slot="{ mouse }"
    :id="id"
  >
    <f-group>
      <f-grid
        v-if="grid"
        :inner-width="innerWidth"
        :inner-height="innerHeight"
      />
      <f-axis
        v-if="axis"
        :inner-width="innerWidth"
        :inner-height="innerHeight"
      />
      <slot :mouse="mouse" />
    </f-group>
  </f-svg>
  `
};
