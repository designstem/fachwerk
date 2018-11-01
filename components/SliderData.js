export default {
  description: `
Adds a slider next to the content and passing the slider value as <code>data.value</code> or <code>data.values</code>
  `,
  example: `
<SliderData>
  <h1 class="bullet" slot-scope="data">
    {{ data.value }}
  </h1>
</SliderData>

<SliderData :values="[
  { title: 'R', to: 255, value: 102 },
  { title: 'G', to: 255, value: 51 },
  { title: 'B', to: 255, value: 153 },
  { title: 'A', to: 1, value: 1, float: true },
]">
  <TwoScene slot-scope="data">
    <TwoCircle :fill="rgb(...data.values)" />
  </TwoScene>
</SliderData>

<SliderData :values="[
  { title: 'H', to: 255, value: 270 },
  { title: 'S', to: 100, value: 50 },
  { title: 'L', to: 100, value: 40 },
  { title: 'A', to: 1, value: 1, float: true },
]">
  <TwoScene slot-scope="data">
    <TwoCircle :fill="hsl(...data.values)" />
  </TwoScene>
</SliderData>
  `,
  props: {
    title: { default: "Value", type: String },
    value: { default: 0, type: Number },
    from: { default: 0, type: Number },
    to: { default: 100, type: Number },
    step: { default: 1, type: Number },
    values: { default: () => [], type: [Array] },
    float: { default: false, type: Boolean }
  },
  data: function() {
    return {
      innerValue: this.value,
      innerValues: this.values.length
        ? this.values.map(v => (v.value ? v.value : 0))
        : null
    };
  },
  template: `
    <div>
      <div v-if="values.length" v-for="(v,i) in values" :key="i">
        <label>{{ v.title ? v.title : 'Values ' + i }} <code>{{ innerValues[i] }}</code></label>
        <input
          style="margin-bottom: 1rem;"
          type="range"
          v-model="innerValues[i]"
          :min="v.from"
          :max="v.to"
          :step="v.step ? v.step : v.float ? 0.01 : 1"
        />
      </div>
      <slot v-if="values.length" :values="innerValues" />
      <div v-if="!values.length">
        <label>{{ title }} <code>{{ innerValue }}</code></label>
        <input style="margin-bottom: 1rem;" type="range" v-model="innerValue" :min="from" :max="to" :step="step ? step : float ? 0.01 : 1" />
      </div>
      <slot v-if="!values.length" :value="innerValue" />
    </div>
  `
};
