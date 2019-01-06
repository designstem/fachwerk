export default {
  tag: "2D",
  description: `
A 2D vector graphics scene.

Technically it draws a \`svg\` element and sets it coordinate system suitable for graph drawing and allows easy migration to 3D, just replace it with \`<f-scene3>\`.
`,
  example: `
  <f-scene grid="true">
  
  <!-- Coordinates increase towards top right -->
  <f-point r="0.1" x="1" y="1" :stroke="color('blue')" />
  <f-text x="1" y="1" :fill="color('blue')">
    x:1 y:1
  </f-text>
  
  <!-- Regular SVG elements are OK as well here -->
  <circle cx="-1" cy="-1" r="0.02" fill="rebeccapurple" />

  <f-text x="-1" y="-1" :fill="color('purple')">
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
    height: { default: 250, type: [Number, String] },
    grid: { default: false, type: [Boolean, String] },
    step: { default: 0.5, type: [Number, String] }
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
