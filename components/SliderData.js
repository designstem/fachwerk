export default {
  description: `
Wrapper component, adding a slider below the children and passing down the slider value as <code>data.value</code>.
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
    return { value: this.value };
  },
  template: `
    <div>
      <slot :value="value"/>
      <label>{{ title }} <code>{{ value }}</code></label>
      <input type="range" v-model="value" :min="from" :max="to" :step="step" />
    </div>
  `
};
