import { Object2D } from "../internal/two.js";

export default {
  mixins: [Object2D],
  description: `
The component is a wrapper around SVG's <code>g</code> for feature parity with \`f-group3\` and applying transformations like <code>:position</code>, <code>:rotation</code> and <code>:scale</code>

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