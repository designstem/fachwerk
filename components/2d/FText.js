export default {
  tag: '2D',
  description: `
Adds a text to the \`f-scene\`.  
  `,
  example: `
<f-scene>
  <f-circle r="0.1" />
  <f-text>x:0, y:0</f-text>
</f-scene>
  `,
  props: {
    x: { default: 0, type: Number },
    y: { default: 0, type: Number }
  },
  template: `
  <f-group :position="{x: x, y: y}">
    <text
      dy="-0.2"
      text-anchor="middle"
      transform="scale(1,-1)"
      style="
        font-family: var(--font-mono);
        fill: var(--primary);
      "
    
    >
      <slot />
    </text>
  </f-group>
  `
}