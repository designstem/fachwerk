export default {
  description: `
Description to be written.

<f-buffer length="10" :map="() => [0,0]" v-slot="{ value, add }">
  <f-scene grid v-slot="{ mouse }">
    <f-group>
      <f-circle
        v-for="(v,i) in value"
        :key="i"
        :x="v[0]"
        :y="v[1]"
        r="0.25"
        :fill="color('white')"
        :opacity="scale(i,0,9,0,1)"
      />
      <f-box
        @mousemove.native="
          add([mouse.x,mouse.y])
        "
        fill="rgba(0,0,0,0)"
        width="4"
        height="4"
        stroke="none"
      />
    </f-group>
  </f-scene>
</f-buffer>
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
