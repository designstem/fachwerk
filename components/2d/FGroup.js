import { Object2d } from "../../mixins.js";

export default {
  mixins: [Object2d],
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
    position: { default: () => ({}), type: Object },
    rotation: { default: () => ({}), type: Object },
    scale: { default: () => ({}), type: Object }
  },
  template: `
    <g :transform="transform">
      <slot />
    </g>
  `
};