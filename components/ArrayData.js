export default {
  example: `
<ArrayData :length="3">
  <TwoScene slot-scope="data">
  <circle
    v-for="(value,x) in data.value"
    :key="x"
    :cx="x - 1"
    r="0.5"
    :fill="value ? 'var(--red)' : 'var(--primary)'"
    @click="data.update(1 - value, x)"
  />
  </TwoScene>
</ArrayData>

<ArrayData :length="7" :dimensions="2">
  <TwoScene slot-scope="data">
  <template v-for="(col, x) in data.value">
  <two-box
    v-for="(value, y) in col"
    :key="x * y"
    :x="x / 2 - 1.2"
    :y="y / 2 - 1.2"
    width="0.49"
    height="0.49"
    :fill="value ? 'var(--red)' : 'var(--primary)'"
    @click.native="data.update(1 - value, x, y)"
  />
  </template>
  </TwoScene>
</ArrayData>

<ArrayData :length="3" :map="(_,i) => i">
  <pre slot-scope="data">{{ data }}</pre>
</ArrayData>
  `,
  props: {
    length: { default: 1, type: Number },
    dimensions: { default: 1, type: Number },
    map: { default: () => 0, type: Function }
  },
  methods: {
    onUpdate(newValue, x, y = -1, z = -1) {
      if (y > -1 && z > -1) {
        this.$set(this.value[x][y], z, newValue);
      }
      if (y > -1 && z == -1) {
        this.$set(this.value[x], y, newValue);
      }
      if (y == -1 && z == -1) {
        this.$set(this.value, x, newValue);
      }

    }
  },
  created() {
    if (this.dimensions == 3) {
      this.value = Array.from({ length: 1000 }).slice(0, this.length).map(_ =>
        Array.from({ length: 1000 }).slice(0, this.length).map(_ =>
          Array.from({ length: 1000 }).slice(0, this.length).map(this.map)
        )
      );
    }
    if (this.dimensions == 2) {
      this.value = Array.from({ length: 1000 }).slice(0, this.length).map(_ =>
        Array.from({ length: 1000 }).slice(0, this.length).map(this.map)
      );
    }
    if (this.dimensions == 1) {
      this.value = Array.from({ length: 1000 }).slice(0, this.length).map(this.map);
    }
  },
  data: () => ({ value: [] }),
  template: `
    <slot :value="value" :update="onUpdate" /> 
  `
};
