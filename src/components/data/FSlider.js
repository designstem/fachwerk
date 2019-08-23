import {
  Vue,
  get as getValue,
  set as setValue,
  makeNumber
} from "../../../fachwerk.js"
;

export default {
  description: `
Displays numeric slider and allows to get its value.

### Simplest usage

Provide a \`set\` prop to set a global variable:

    <f-slider set="d" />

<f-slider set="d" />

and \`get\` it with utility function:

  <pre v-pre>{{ get('d') }}</pre>

Output: 

<output>d value: {{ get('d') }}</output>

### Integer value

To get the integer value, set \`integer\` prop:

    <f-slider set="e" integer />

<f-slider set="e" integer />

<output>b value: {{ get('e') }}</output>


### Local data

In some cases you want animation value to be available to its children components only. You can use the following:

    <f-slider v-slot="{ value: f }">
      <output>{{ f }}</output>
    </f-slider>

<f-slider v-slot="{ value: f }">
  <output>Local f value: {{ f }}</output>
</f-slider>
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
      description: "Name for a global value to set" 
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