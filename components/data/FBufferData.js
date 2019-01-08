export default {
  description: `
> Will be renamed to FBuffer

<f-buffer-data length="10" :map="() => [0,0]">
  <f-scene slot-scope="bData" grid>
    <f-group slot-scope="sData">
      <f-circle
        v-for="(p,i) in bData.value"
        :key="i"
        :x="p[0]"
        :y="p[1]"
        r="0.25"
        :fill="color('white')"
        :opacity="scale(i,0,9,0,1)"
      />
      <f-box
        @mousemove.native="
          bData.add([sData.value[0],sData.value[1]])
        "
        fill="rgba(0,0,0,0)"
        width="4"
        height="4"
        stroke="none"
      />
    </f-group>
  </f-scene>
</f-buffer-data>
  `,  
  props: {
    length: { default: 3, type: [Number,String] },
    map: { default: d => 0, type: Function }
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
