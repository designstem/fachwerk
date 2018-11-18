export default {
  props: {
    length: { default: 3, type: Number },
    map: { default: d => 0, type: Function }
  },
  methods: {
    onUpdate(value) {
      this.buffer.shift();
      this.buffer.push(value);
    }
  },
  data: function() {
    return { buffer: Array.from({ length: this.length }).map(this.map) };
  },
  template: `
    <slot :value="buffer" :update="onUpdate" /> 
  `
};
