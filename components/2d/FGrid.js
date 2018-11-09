import { Object2D } from "./2d.js";

export default {
  mixins: [Object2D],
  tag: '2D',
  description: `
As the classic once [wrote](http://printingcode.runemadsen.com/lecture-grid/), there is nothing worse for an artist than a blank canvas.
  `,
  example: `
<f-scene>
  <f-grid />
  <f-grid
    :position="{ x: 1, y: 1 }"
    :rotation="{ z: 45 }"
    :scale="{ x: 0.2, y: 0.2 }"
  />
</f-scene>
  `,
  props: {
    step: { default: 0.5, type: Number },
    position: { default: () => ({}), type: Object },
    rotation: { default: () => ({}), type: Object },
    scale: { default: () => ({}), type: Object },
    opacity: { default: 0.15, type: Number },
  },
  template: `
  <f-group :transform="transform">
    <f-basegrid
      :inner-x="-2"
      :inner-y="-2"
      :inner-width="4"
      :inner-height="4"
      :step="step"
      :opacity="opacity"
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
