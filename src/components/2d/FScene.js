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
      type: Boolean,
      description: "Show background grid?"
    },
    dots: {
      default: false,
      type: Boolean,
      description: "Show background grid?"
    },
    step: {
      default: 0.5,
      type: [Number, String],
      description: "Background grid or dots step"
    },
    axis: {
      default: false,
      type: Boolean,
      description: "Show axises?"
    },
    responsive: { default: false, type: Boolean },
    id: { default: "", type: String },
    download: { default: false, type: Boolean }
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
    },
    svgScale() {
      return this.innerWidth / this.width;
    }
  },
  provide() {
    return {
      svgScale: () => this.svgScale
    };
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
    :responsive="responsive"
    :id="id"
    :download="download"
  >
    <f-group>
      <f-grid
        v-if="grid"
        :inner-width="innerWidth"
        :inner-height="innerHeight"
        :step="step"
      />
      <f-dots
        v-if="dots"
        :inner-x="-2"
        :inner-y="-2"
        :inner-width="4"
        :inner-height="4"
        :step="step"
      />
      <f-axis
        v-if="axis"
        :inner-width="innerWidth"
        :inner-height="innerHeight"
      />
      <slot :mouse="mouse" :svgscale="svgScale" />
    </f-group>
  </f-svg>
  `
};
