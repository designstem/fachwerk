import Object2D from "./internal/Object2D.js";

export default {
  mixins: [Object2D],
  description: `
Groups child elements and applies 2D transformations to the group.

<f-scene grid>
  <f-group
    position="1 1"
    rotation="45"
    scale="0.5"
  >
    <f-box />
  </f-group>
</f-scene>
  `,
  props: {
    position: { default: '0 0', type: [String, Number, Object, Array] },
    rotation: { default: '0', type: [String, Number, Object, Array] },
    scale: { default: '1', type: [String, Number, Object, Array] },
    opacity: { default: 1, type: [Number,String] },
  },
  provide() {
    return {
      groupScale: () => this.scale
    }
  },
  template: `
    <g :transform="transform" :opacity="opacity">
      <slot />
    </g>
  `
};