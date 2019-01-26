import { get as getValue, set as setValue, makeNumber } from '../../utils.js';

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
    set: { default: '', type: [String], description: 'Key for setting a global value' },
  },
  data: function() {
    return {
      innerValue: this.value || this.from,
    };
  },
  methods: { getValue, setValue, makeNumber },
  mounted() {
    this.$watch(
      "value",
      value => {
          this.innerValue = value
      }
    );
    this.$watch(
      "innerValue",
      innerValue => {
        this.$emit('value', innerValue)
        this.$emit('input', innerValue)
      },
      { immediate: true }
    );
  },
  template: `
    <div>
      <div>
        <label>{{ title }} <code>{{ innerValue }}</code></label>
        <input
          v-if="!set"
          style="margin-bottom: 1rem;"
          type="range"
          v-model="innerValue"
          :min="from"
          :max="to"
          :step="!integer ? step : 1"
        />
        <input
          v-if="set"
          style="margin-bottom: 1rem;"
          type="range"
          value="getValue(set, 0)"
          @input="innerValue = makeNumber($event.target.value); setValue(set, makeNumber($event.target.value))"
          :min="from"
          :max="to"
          :step="!integer ? step : 1"
        />
      </div>
      <slot :value="innerValue" />
    </div>
  `
};

/*

import { makeNumber, get, set, log } from '../../utils.js';

export default {
  description: `
Allows to create a simple slider, to be used with \`v-model\`.

Technically it is a combination of  \`label\` and \`<input type="range" />\` tags.

<f-slider
  title="Some variable"
  v-model="someVariable"
/>
  `,
  props: {
    title: { default: "Value", type: String },
    value: { default: 0, type: [Number,String] },
    from: { default: 0, type: [Number,String] },
    to: { default: 100, type: [Number,String] },
    step: { default: 1, type: [Number,String] },
    set: { default: '', type: [String] },
  },
  methods: {
    log,
    onInput(e) {
      console.log(value)
      const value = makeNumber(e.target.value)
      $emit('input', value)
      if (this.set) {
        set(set, value)
      }
    }
  },
  computed: {
    currentValue() {
      if (this.set) {
        return get(this.set, 0)
      }
      return this.value
    }
  },
  template: `
  <div>
    <slot :value="value">
      <label>{{ title }} <code>{{ value }}</code></label>aa
    </slot>
    <input
      type="range"
      :value="value"
      :min="from"
      :max="to"
      :step="step"
      @input="log($event)"
    />
  </div>
  `
}

*/