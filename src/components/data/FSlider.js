import {
  Vue,
  get as getValue,
  set as setValue,
  makeNumber
} from "../../../fachwerk.js"
;

export default {
  description: `
Numeric slider.

#### Local data

<f-slider v-slot="{ value }">
  <output>{{ value }}</output>
</f-slider>

#### Local data, integer value

<f-slider integer v-slot="{ value }">
  <output>{{ value }}</output>
</f-slider>

#### Global data

<f-slider set="b" />

<output>{{ get('b', 0) }}</output>
  `,
  props: {
    value: { default: 0, type: [Number, String] },
    title: { default: "", type: String },
    from: { default: 0, type: [Number, String] },
    to: { default: 360, type: [Number, String] },
    integer: { default: false, type: Boolean },
    step: { default: "", type: [Number, String] },
    set: {
      default: "",
      type: String,
      description: "Name for global value to set" 
    },
    plain: {
      default: false,
      type: [Boolean, String]
    }
  },
  data: function() {
    return {
      innerValue: this.value || this.from
    };
  },
  methods: { getValue, setValue, makeNumber },
  mounted() {
    this.$watch("value", value => {
      this.innerValue = value;
    });
    if (this.set) {
      Vue.set(
        this.$global.$data.state,
        this.set,
        JSON.parse(JSON.stringify(this.innerValue))
      );
    }
    this.$watch(
      "innerValue",
      innerValue => {
        this.$emit("value", innerValue);
        this.$emit("input", innerValue);
        if (this.set) {
          Vue.set(
            this.$global.$data.state,
            this.set,
            JSON.parse(JSON.stringify(innerValue))
          );
        }
      },
      { immediate: true }
    );
  },
  computed: {
    currentTitle() {
      return this.title || ''
    }
  },
  template: `
    <div>
      <div>
        <label>
        <slot name="title" :value="innerValue">
          <template v-if="currentTitle">{{ currentTitle }}&nbsp;&nbsp;<code>{{ innerValue }}</code></template>
        </slot>
        </label>
        <input
          v-if="!set"
          style="margin-bottom: 1rem;"
          type="range"
          v-model="innerValue"
          :min="from"
          :max="to"
          :step="step ? step : (integer ? 1 : 0.001)"
        />
        <input
          v-if="set"
          style="margin-bottom: 1rem;"
          type="range"
          :value="getValue(set, 0)"
          @input="innerValue = makeNumber($event.target.value)"
          :min="from"
          :max="to"
          :step="step ? step : (integer ? 1 : 0.001)"
        />
      </div>
      <slot :value="innerValue" />
    </div>
  `
};