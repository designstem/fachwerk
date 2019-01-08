export default {
  description: `
2D vector graphics scene with a coordinate system optimized for graph drawing. For more general vector graphics see \`<f-artboard>\`.

<f-scene grid="true">
  
  <f-point x="1" y="1" />
  <f-text x="1" y="1.5">
    x:1 y:1
  </f-text>
  
  <f-point x="-1" y="-1" />
  <f-text x="-1" y="-0.5">
    x:-1 y:-1
  </f-text>

</f-scene>
  `,
  props: {
    width: {
      default: 250,
      type: [Number, String],
      description: "Scene width in pixels"
    },
    height: { default: 250, type: [Number, String],
      description: "Scene height in pixels" },
    grid: { default: false, type: [Boolean, String],
      description: "Show background grid?" },
    step: { default: 0.5, type: [Number, String],
      description: "Background grid step" }
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
  >
    <f-group slot-scope="data">
      <f-basegrid
        v-if="grid"
        :inner-x="innerX"
        :inner-y="innerY"
        :inner-width="innerWidth"
        :inner-height="innerHeight"
        :step="step"
      />
      <slot :value="data.value" />
    </f-group>
  </f-svg>
  `
};
