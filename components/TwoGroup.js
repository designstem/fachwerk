export default {
  name: 'TwoGroup',
  description: 'The component is here for feature parity with <code>ThreeGroup</code>, using a SVGgs handy <code>g</code> is *Gut* as well',
  example: `
<TwoScene>
  <TwoGrid />
  <TwoGroup
    :position="{ x: 1, y: 1 }"
  >
    <circle r="0.5" />
  </TwoGroup>
</TwoScene>
  `,
  props: { position: { default: { x: 0, y: 0 }}},
  template: `
    <g :transform="'translate(' + position.x + ' ' + position.y + ')'">
      <slot />
    </g>
  `
}