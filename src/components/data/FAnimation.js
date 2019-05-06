import { Vue, anime, get as getValue, set as setValue, makeNumber } from "../../../fachwerk.js";

export default {
  description: `
An animation component, based on [AnimeJS](https://github.com/juliangarnier/anime) library. Supports most of the animation options AnimeJS provides.

### Simplest usage

Provide a \`set\` prop to set a global variable:

    <f-animation set="a" />

<f-animation set="a" />

and \`get\` it with utility function:

 <pre v-pre>{{ get('a') }}</pre>

Output: 

<output>a value: {{ get('a') }}</output>

### Integer value

To get the integer value, set \`integer\` prop:

    <f-animation set="b" integer />

<f-animation set="b" integer />

<output>b value: {{ get('b') }}</output>


### Local data

In some cases you want animation value to be available to its children components only. You can use the following:

    <f-animation v-slot="{ value: c }">
      <output>{{ c }}</output>
    </f-animation>

<f-animation v-slot="{ value: c }">
  <output>Local c value: {{ c }}</output>
</f-animation>

  `,
  props: {
    value: { default: 0, type: [Number, String] },
    from: { default: 0, type: [Number, String] },
    to: { default: 360, type: [Number, String] },
    duration: { default: 10000, type: [Number, String] },
    delay: { default: 0, type: [Number, String] },
    playing: { default: true, type: Boolean },
    reset: { default: false, type: Boolean },
    loop: { default: true, type: Boolean },
    alternate: { default: false, type: Boolean },
    easing: { default: "linear", type: String, description: 'See [easing functions](https://github.com/juliangarnier/anime/tree/v2.2.0#easing-functions)' },
    integer: { default: false, type: Boolean },
    set: {
      default: "",
      type: String,
      description: "Name for global value to set" 
    }
  },
  slots: {
    value: {
      type: "number",
      description: "Gets animation value"
    }
  },
  data: function() {
    return {
      innerValue: this.value || this.from
    };
  },
  mounted() {
    this.innerValue = this.from;
    const a = anime({
      targets: this,
      duration: this.duration,
      innerValue: this.to,
      loop: this.loop,
      direction: this.alternate ? "alternate" : null,
      easing: this.easing,
      autoplay: false,
      delay: this.delay
    });
    this.$watch(
      "playing",
      playing => {
        if (playing) {
          a.play();
        } else {
          if (this.reset) {
            a.reset();
          }
          a.pause();
        }
      },
      { immediate: true }
    );
    if (this.set && this.$global) {
      Vue.set(this.$global.$data.state, this.set, this.innerValue);
    }
    this.$watch(
      "innerValue",
      function(innerValue) {
        const value = this.integer ? Math.floor(innerValue) : innerValue;
        this.$emit("input", value);
        this.$emit("value", value);
        if (this.set && this.$global) {
          Vue.set(this.$global.$data.state, this.set, makeNumber(value));
        }
      },
      { immediate: false }
    );
  },
  render() {
    return this.$scopedSlots.default
      ? this.$scopedSlots.default({
          value: this.integer ? Math.floor(this.innerValue) : this.innerValue
        })
      : "";
  }
};
