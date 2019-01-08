export default {
  description: `
Numeric slider.

### Local data

<f-slider>
  <h1 slot-scope="{ value }">{{ value }}</h1>
</f-slider>

### Local data, integer value

Setting \`interger\` prop is the same as setting \`step="1"\`.

<f-slider integer>
  <h1 slot-scope="{ value }">{{ value }}</h1>
</f-slider>

### Global data

<f-slider v-on:value="value => set('slider', value)" />

<h1>{{ get('slider', 0) }}</h1>
  `,
  props: {
    value: { default: 0, type: [Number,String] },
    title: { default: "Value", type: String },
    from: { default: 0, type: [Number,String] },
    to: { default: 360, type: [Number,String] },
    integer: { default: false, type: Boolean },
    step: { default: 0.01, type: [Number,String] },
  },
  data: function() {
    return {
      innerValue: this.value || this.from,
    };
  },
  mounted() {
    this.$watch(
      "innerValue",
      innerValue => {
        this.$emit('value', innerValue)
      },
      { immediate: true }
    );
  },
  template: `
    <div>
      <div>
        <label>{{ title }} <code>{{ innerValue }}</code></label>
        <input
          style="margin-bottom: 1rem;"
          type="range"
          v-model="innerValue"
          :min="from"
          :max="to"
          :step="!integer ? step : 1"
        />
      </div>
      <slot :value="innerValue" />
    </div>
  `
};
