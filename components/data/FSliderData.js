export default {
  tag: 'Data',
  description: `
Adds a slider next to the content and passing the slider value as <code>data.value</code> 
  `,
  example: `
<f-slider-data>
  <h1 class="bullet" slot-scope="data">
    {{ data.value }}
  </h1>
</f-slider-data>

<f-slider-data :sliders="[
  { title: 'X', from: -2, to: 2, value: 0, float: true },
  { title: 'Y', from: -2, to: 2, value: 0, float: true },
]">
  <f-scene slot-scope="data">
    <f-grid />
    <f-circle :position="{
      x: data.value[0],
      y: data.value[1]
    }" />
  </f-scene>
</f-slider-data>
  `,
  props: {
    value: { default: 0, type: Number },
    title: { default: "Value", type: String },
    from: { default: 0, type: Number },
    to: { default: 360, type: Number },
    step: { default: 1, type: Number },
    float: { default: false, type: Boolean },
    sliders: { default: () => [], type: [Array] },
  },
  data: function() {
    return {
      innerValue: this.value,
      innerValues: this.sliders.length
        ? this.sliders.map(v => (v.value ? v.value : 0))
        : null
    };
  },
  template: `
    <div>
      <div v-if="sliders.length" v-for="(v,i) in sliders" :key="i">
        <label>{{ v.title ? v.title : 'Values ' + i }} <code>{{ innerValues[i] }}</code></label>
        <input
          style="margin-bottom: 1rem;"
          type="range"
          v-model="innerValues[i]"
          :min="v.from || this.from"
          :max="v.to || this.to"
          :step="v.step ? v.step : this.step ? this.step : v.float ? 0.000001 : 1"
        />
      </div>
      <slot v-if="sliders.length" :value="innerValues" />
      <div v-if="!sliders.length">
        <label>{{ title }} <code>{{ innerValue }}</code></label>
        <input style="margin-bottom: 1rem;" type="range" v-model="innerValue" :min="from" :max="to" :step="step ? step : float ? 0.001 : 1" />
      </div>
      <slot v-if="!sliders.length" :value="innerValue" />
    </div>
  `
};
