export default {
  methods: {
    onUpdate(newValue, x, y = -1, z = -1) {
      // if (y > -1 && z > -1) {
      //   this.$set(this.value, x, newValue);
      // }
      if (y > -1 && z == -1) {
        this.$set(this.value[x], y, newValue);
      }
      if (y == -1 && z == -1) {
        this.$set(this.value, x, newValue);
      }

    }
  },
  example: `
<ArrayData :length="3" :dimensions="2">
  <TwoScene slot-scope="data">
  <template v-for="(x,i) in data.value">
  <circle
      v-for="(y,j) in x"
      :key="i * j"
      :cx="i - 1"
      :cy="j - 1"
      r="0.5"
      :fill="y ? 'var(--red)' : 'var(--primary)'"
      @click="data.update(1 - y, i, j)"
    />
  </template>
  </TwoScene>
</ArrayData>

<ArrayData :length="3">
  <TwoScene slot-scope="data">
    <circle
      v-for="(x,i) in data.value"
      :key="i"
      :cx="i - 1"
      r="0.5"
      :fill="x ? 'var(--red)' : 'var(--primary)'"
      @click="data.update(1 - x, i)"
    />
  </TwoScene>
</ArrayData>
  `,
  props: {
    length: { default: 1, type: Number },
    dimensions: { default: 1, type: Number }
  },
  created() {
    if (this.dimensions == 3) {
      this.value = Array.from({ length: this.length }).map(_ =>
        Array.from({ length: this.length }).map(_ =>
          Array.from({ length: this.length }).map(_ => 0)
        )
      );
    }
    if (this.dimensions == 2) {
      this.value = Array.from({ length: this.length }).map(_ =>
        Array.from({ length: this.length }).map(_ => 0)
      );
    }
    if (this.dimensions == 1) {
      this.value = Array.from({ length: this.length }).map(_ => 0);
    }
  },
  data: () => ({ value: [] }),
  template: `
    <slot :value="value" :update="onUpdate" /> 
  `
};
