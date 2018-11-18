export default {
  tag: 'Data',
  example: `
<f-buffer-data>
  <div slot-scope="data">
    <div class="button_tertiary"
    @click="data.update(Math.random())"
    >Add random value</div>
    <p/>
    <pre>{{ data }}</pre>
  </div>
</f-buffer-data>
  `,  
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
