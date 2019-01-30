export default {
  description: `
Rotates the child elements in 3D space.

<f-scene3>
  <f-rotation3>
    <f-grid3 />
    <f-box3 />
  </f-rotation3>
</f-scene3>
    `,
  props: {
    duration: {
      default: 30000,
      type: [Number, String],
      description: "Time for one rotation, in milliseconds."
    }
  },
  template: `
  <f-animation :duration="duration">
    <f-group3
      slot-scope="{ value }"
      :rotation="[value,value,value]"
    >
      <slot  />
    </f-group3>
  </f-animation>
  `
};
