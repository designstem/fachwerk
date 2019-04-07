export default {
  description: `
Stores an array of values as a sliding buffer. When adding value to the end of buffer, first value will be removed.

Initially all buffer values are \`0\` but it can be adjusted with a \`map\` prop.


<f-buffer length="3" v-slot="{ value, add }">
  <button @click="add(1)">Add 1 to buffer</button>
  <button @click="add(2)">Add 2 to buffer</button>
  <p />
  <output>{{ value }}</output>
</f-buffer>

  `,  
  props: {
    length: { default: 1, type: [Number,String] },
    map: { default: d => 0, type: Function }
  },
  slots: {
    value: {
      type: "array",
      description: "Gets buffer values"
    },
    add: {
      type: "function",
      description: "Adds a value to the buffer, `add(value)`"
    }
  },
  methods: {
    onAdd(value) {
      this.buffer.shift();
      this.buffer.push(value);
    }
  },
  data: function() {
    return { buffer: Array.from({ length: this.length }).map(this.map) };
  },
  template: `
  <div>
    <slot :value="buffer" :add="onAdd" /> 
  </div>
  `
};
