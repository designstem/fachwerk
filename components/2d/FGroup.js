import { Object2d } from "../../mixins.js";

export default {
  mixins: [Object2d],
  tag: '2D',
  description: `
Groups child elements and a applies geometric transformations to the group.

 Technically it generates a \`g\` tag and adds custom transformation parameters.
  `,
  example: `
<f-scene>
  <f-grid />
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