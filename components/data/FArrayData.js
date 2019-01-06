export default {
  description: `
<f-array-data :length="3">
  <f-scene slot-scope="data">
  <circle
    v-for="(value,x) in data.value"
    :key="x"
    :cx="x - 1"
    r="0.5"
    :fill="value ? 'var(--red)' : 'var(--primary)'"
    @click="data.update(1 - value, x)"
  />
  </f-scene>
</f-array-data>

<f-array-data :length="7" :dimensions="2">
  <f-scene slot-scope="data">
  <f-group v-for="(col, x) in data.value" :key="x">
  <f-box
    v-for="(value, y) in col"
    :key="y"
    :x="x / 2 - 1.2"
    :y="y / 2 - 1.2"
    width="0.49"
    height="0.49"
    :fill="value ? 'var(--red)' : 'var(--primary)'"
    @click.native="data.update(1 - value, x, y)"
  />
  </f-group>
  </f-scene>
</f-array-data>

<f-array-data :length="3" :map="(_,i) => i">
  <pre slot-scope="data">{{ data }}</pre>
</f-array-data>
  `,
  props: {
    length: { default: 1, type: Number },
    dimensions: { default: 1, type: Number },
    map: { default: (d) => d, type: Function }
  },
  methods: {
    onUpdate(newValue, x, y = -1, z = -1) {
      if (y > -1 && z > -1) {
        this.$set(this.maxValue[x][y], z, newValue);
      }
      if (y > -1 && z == -1) {
        this.$set(this.maxValue[x], y, newValue);
      }
      if (y == -1 && z == -1) {
        this.$set(this.maxValue, x, newValue);
      }
      
    }
  },
  created() {
    if (this.dimensions == 3) {
      this.maxValue = Array.from({ length: 1000 }).map(_ =>
        Array.from({ length: 1000 }).map(_ =>
          Array.from({ length: 1000 }).map(_ => 0)
        )
      );
    }
    if (this.dimensions == 2) {
      this.maxValue = Array.from({ length: 1000 }).map(_ =>
        Array.from({ length: 1000 }).map(_ => 0)
      );
    }
    if (this.dimensions == 1) {
      this.maxValue = Array.from({ length: 1000 }).map(_ => 0)
    }
  },
  computed: {
    value() {
      if (this.dimensions == 3) {
        return this.maxValue.slice(0, this.length).map(x =>
          x.slice(0, this.length).map(y =>
            y.slice(0, this.length).map(this.map)
          )
        );
      }
      if (this.dimensions == 2) {
        return this.maxValue.slice(0, this.length).map(x =>
          x.slice(0, this.length).map(this.map)
        );
      }
      if (this.dimensions == 1) {
        return this.maxValue.slice(0, this.length).map(this.map);
      }
    }
  },
  data: () => ({ maxValue: [] }),
  template: `
  <div>
    <slot :value="value" :update="onUpdate" /> 
  </div>
  `
};
