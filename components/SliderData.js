export default {
  description: `
Adds a slider next to the content and passing the slider value as <code>data.value</code>.
  `,
  example: `
<SliderData>
  <h1 class="bullet" slot-scope="data">
    {{ data.value }}
  </h1>
</SliderData>

<SliderData :from="10" :to="20" :value="15">
  <h1 class="bullet" slot-scope="data">
    {{ data.value }}
  </h1>
</SliderData>
  `,
  props: {
    title: { default: "Value", type: String },
    value: { default: 0, type: Number },
    from: { default: 0, type: Number },
    to: { default: 100, type: Number },
    step: { default: 1, type: Number },
  },
  data: function() {
    return { innerValue: this.value };
  },
  template: `
    <div>
      <label>{{ title }} <code>{{ innerValue }}</code></label>
      <input style="margin-bottom: 1rem;" type="range" v-model="innerValue" :min="from" :max="to" :step="step" />
      <slot :value="innerValue"/>
    </div>
  `
};
