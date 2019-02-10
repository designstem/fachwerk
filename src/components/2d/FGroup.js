import Object2D from "./internal/Object2D.js";

export default {
  mixins: [Object2D],
  description: `
Groups child elements and applies geometric transformations to the group.

<f-scene grid>
  <f-group
    :position="{ x: 1, y: 1 }"
    :rotation="{ z: 45 }"
    :scale="{ x: 0.2, y: 0.2 }"
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
  template: `
    <g :transform="transform">
      <slot />
    </g>
  `
};