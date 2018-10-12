function chunk(arr, l) { 
  return new Array(Math.ceil(arr.length / l)).fill(0)
      .map((_, n) => arr.slice(n*l, n*l + l)); 
}

export default {
  methods: {
    onUpdate(i, newValue) {
      this.value[i] = newValue; 
      this.$set(this.value, i, newValue);
    }
  },
  example: `
<StateData :length="3">
  <TwoScene slot-scope="data">
    <circle
      v-for="(x,i) in 3"
      :key="i"
      :cx="[-1,0,1][i % 3]"
      r="0.5"
      stroke="white"
      :fill="data.value[i] ? 'black' : 'gray'"
      @click="data.update(i, 1 - data.value[i])"
      style="transition: all 100ms"
    />
  </TwoScene>
</StateData>
  `,
  props: {
    length: { default: 1, type: Number }
  },
  data: function() {
    return { value: Array(this.length).fill(0) }
  },
  template: `
    <slot :value="value" :update="onUpdate" /> 
  `
}