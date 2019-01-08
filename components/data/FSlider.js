export default {
  description: `
Numeric slider.

#### Local data

<f-slider>
  <pre slot-scope="{ value }">{{ value }}</pre>
</f-slider>

#### Local data, integer value

<f-slider integer>
  <pre slot-scope="{ value }">{{ value }}</pre>
</f-slider>

#### Global data

<f-slider v-on:value="value => set('slider', value)" />

<pre>{{ get('slider', 0) }}</pre>
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
