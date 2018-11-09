export default {
  tag: 'Experimental',
  description: `
  `,
  example: `
<f-artboard grid="true">
  <f-circle x="100" y="100" r="100" />
</f-artboard>
  `,
  props: {
    width: { default: 1000, type: Number },
    height: { default: 1000, type: Number },
    grid: { default: false, type: Boolean }
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
      :step="25"
    />
    <f-basegrid 
      v-if="grid"
      :inner-width="width"
      :inner-height="height"
      :step="100"
    />
    <slot />
  </f-svg>
  `
};
