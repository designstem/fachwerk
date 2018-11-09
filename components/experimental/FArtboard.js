export default {
  tag: 'Experimental',
  description: `
  `,
  example: `
<f-artboard grid="true">
  <f-circle
    v-for="y in range(100, 300, 25)"
    :x="100"
    :y="y"
    :r="50"
    :fill="hsl(y)"
    :opacity="0.25"
  />
</f-artboard>
  `,
  props: {
    width: { default: 1000, type: Number },
    height: { default: 1000, type: Number },
    grid: { default: false, type: Boolean },
    step: { default: 25, type: Number }
  }, 
  template: `
  <f-svg 
    :width="width"
    :height="height"
  >
    <f-basegrid 
      v-if="grid"
      :inner-width="width"
      :inner-height="height"
      :step="step"
    />
    <f-basegrid 
      v-if="grid"
      :inner-width="width"
      :inner-height="height"
      :step="step * 4"
    />
    <slot />
  </f-svg>
  `
};
