import { Object2D } from "./internal/two.js";

export default {
  mixins: [Object2D],
  description: `
The component is a wrapper around SVG's <code>g</code> for feature parity with <code>ThreeGroup</code> and applying transformations like <code>:position</code>, <code>:rotation</code> and <code>:scale</code>

  `,
  example: `
<TwoScene>
  <TwoGrid />
  <TwoGroup
    :position="{ x: 1, y: 1 }"
    :rotation="{ z: 45 }"
    :scale="{ x: 0.2, y: 0.2 }"
  >
    <TwoBox />
  </TwoGroup>
</TwoScene>
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