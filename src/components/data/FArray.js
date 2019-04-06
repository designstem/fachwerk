export default {
  description: `
Provides an array of values and an update function.

<f-array v-slot="{ value, update }">
  <f-scene>
    <f-circle
      :fill="value[0] ? color('gray') : color('red')"
      @click.native="update(1 - value[0], 0)"
    />
  </f-scene>
</f-array>
  `,
  props: {
    length: { default: 1, type: Number },
    dimensions: { default: 1, type: Number },
    map: { default: d => d, type: Function }
  },
  slots: {
    value: {
      type: "array",
      description: "Gets array values"
    },
    update: {
      type: "function",
      description: "Updates an element in and array, `update(index, value)`"
    }
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
      this.maxValue = Array.from({ length: 1000 }).map(_ => 0);
    }
  },
  computed: {
    value() {
      if (this.dimensions == 3) {
        return this.maxValue
          .slice(0, this.length)
          .map(x =>
            x
              .slice(0, this.length)
              .map(y => y.slice(0, this.length).map(this.map))
          );
      }
      if (this.dimensions == 2) {
        return this.maxValue
          .slice(0, this.length)
          .map(x => x.slice(0, this.length).map(this.map));
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
