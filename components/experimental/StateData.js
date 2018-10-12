export default {
  methods: {
    onUpdate(i, newValue) {
      this.value[i] = newValue; 
      this.$set(this.value, i, newValue);
    }
  },
  example: `
<StateData :length="4">
  <TwoScene slot-scope="data">
    <rect
      v-for="(x,i) in [-2,-1,0,1]"
      :key="i"
      :x="x"
      width="1"
      height="1"
      stroke="white"
      :fill="data.value[i] ? 'black' : 'gray'"
      @click="data.update(i, 1 - data.value[i])"
    />
  </TwoScene>
</StateData>
  `,
  props: {
    length: { default: 1, type: Number }
  },
  mounted() {
    // setInterval(() => {
    //   this.value[1] = Math.random() > 0.5 ? 1 : 0
    //   console.log(this.value);
    // },500)
    // setTimeout(() => {
    //   this.value = [1,1,1,1]
    // },2000)
  },
  data: () => ({ value: [0,0,0,0] }),
  template: `
    <slot :value="value" :update="onUpdate" /> 
  `
}