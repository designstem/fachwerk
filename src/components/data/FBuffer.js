export default {
  description: `
Stores an array of values as a sliding buffer. When adding value to the end of buffer, first value will be removed.

Initially all buffer values are \`0\` but it can be adjusted with a \`map\` prop.

#### Adding elements to the buffer

<f-buffer length="3" v-slot="{ value, add }">
  <button @click="add(1)">Add 1 to buffer</button>
  <button @click="add(2)">Add 2 to buffer</button>
  <p />
  <output>{{ value }}</output>
</f-buffer>

#### Drawing with buffer

Buffer can also be used for dynamic drawing, we can capture the mouse movements, add them to the buffer and loop over buffer values to draw the elements.

<f-buffer length="10" v-slot="{ value, add }">
  <f-scene grid v-slot="{ mouse }">
    <f-circle
      v-for="(v,i) in value"
      :position="v"
      :opacity="scale(i,0,9,0,1)"
    />
    <f-box
      width="4"
      height="4"
      fill="rgba(0,0,0,0)"
      stroke
      @mousemove.native="add(mouse)"
    />
  </f-scene>
</f-buffer>

Here is the drawing workflow:

1. Capture the mouse movements with the transparent rectangle, (see the \`fill="rgba(0,0,0,0)"\`).

2. Get mouse coordinates with \`mouse\` variable provided by the \`f-scene\` component.

3. Add the coordinates to buffer with the function \`add()\` provided by the \`f-buffer\` component.

4. Loop over the buffer \`value\`, drawing the elements with decreasing opacity, calculated with \`scale\` utility function. 
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
