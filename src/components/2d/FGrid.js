import Object2D from "./internal/Object2D.js";

export default {
  mixins: [Object2D],
  description: `
Displays a 2D rectangular grid.

Compared to \`<f-scene grid>\` it allows allows greater freedom to generate custom grids using transformation parameters.

<f-scene>
  <f-grid />
  <f-grid step="0.25" />
  <f-grid step="0.125" />
</f-scene>
  `,
  props: {
    step: { default: 0.5, type: [Number,String] },
    position: { default: '0 0', type: [String, Number, Object, Array] },
    rotation: { default: '0', type: [String, Number, Object, Array] },
    scale: { default: '1', type: [String, Number, Object, Array] },
    opacity: { default: 0.2, type: [Number,String] },
  },
  template: `
  <f-group :transform="transform" id="Grid">
    <f-basegrid
      :inner-x="-2"
      :inner-y="-2"
      :inner-width="4"
      :inner-height="4"
      :step="step"
      :opacity="opacity / 4"
    />
    <f-basegrid
      :inner-x="-2"
      :inner-y="-2"
      :inner-width="4"
      :inner-height="4"
      :step="step * 2"
      :opacity="opacity / 2"
    />
    <f-basegrid
      :inner-x="-2"
      :inner-y="-2"
      :inner-width="4"
      :inner-height="4"
      :step="step * 4"
      :opacity="opacity"
    />
  </f-group>
  `
};
