export default {
  description: `
Rotates the child elements in 2D space.

<f-scene grid>
  <f-rotation>
    <f-box />
  </f-rotation>
</f-scene>
  `,
  props: {
    duration: {
      default: 20000,
      type: [Number, String],
      description: "Time for one rotation, in milliseconds."
    }
  },
  template: `
  <f-animation :duration="duration">
    <f-group
      slot-scope="{ value }"
      :rotation="value"
    >
      <slot  />
    </f-group>
  </f-animation>
  `
};
