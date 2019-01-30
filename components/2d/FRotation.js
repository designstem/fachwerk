export default {
  props: {
    duration: { default: 50000, type: [Number, String] }},
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
