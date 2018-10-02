export default {
  name: "Slider",
  description: `
**⚠️ To be renamed to SliderScope**.
  `,
  example: `
<Slider>
  <h1 class="bullet" slot-scope="{value}">
    {{ value }}
  </h1>
</Slider>
  `,
  props: {
    title: { default: "Value" },
    max: { default: 100 },
    step: { default: 1 },
    min: { default: 0 }
  },
  data: function() {
    return { value: this.min };
  },
  template: `
    <div>
      <slot :value="value"/>
      <label>{{ title }} <code>{{ value }}</code></label>
      <input type="range" v-model="value" :min="min" :max="max" :step="step" />
    </div>
  `
};
