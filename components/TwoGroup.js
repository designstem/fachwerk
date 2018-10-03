export default {
  name: "TwoGroup",
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
    position: { default: () => ({}) },
    rotation: { default: () => ({}) },
    scale: { default: () => ({}) }
  },
  computed: {
    positionTransform() {
      return `translate(${this.position.x || 0} ${this.position.y || 0})`;
    },
    rotationTransform() {
      return `rotate(${this.rotation.x ||
        this.rotation.y ||
        this.rotation.z ||
        0})`;
    },
    scaleTransform() {
      return `scale(${(this.scale.x || 1, this.scale.y || 1)})`;
    },
    transform() {
      return `${this.positionTransform} ${this.rotationTransform} ${
        this.scaleTransform
      }`;
    }
  },
  template: `
    <g :transform="transform">
      <slot />
    </g>
  `
};