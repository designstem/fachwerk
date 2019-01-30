export default {
  props: {
    duration: { default: 50000, type: [Number, String] }},
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
