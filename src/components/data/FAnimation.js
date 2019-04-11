import { Vue, anime, get as getValue, set as setValue, makeNumber } from "../../../fachwerk.js";

export default {
  description: `
An animation component, based on [AnimeJS](https://github.com/juliangarnier/anime) library. Supports most of the animation options AnimeJS provides.

#### Local data

<f-animation v-slot="{ value }">
  <output>{{ value }}</output>
</f-animation>

#### Local data, integer value

<f-animation integer v-slot="{ value }">
  <output>{{ value }}</output>
</f-animation>

#### Global data

<f-animation set="a" />

<output>{{ get('a', 0) }}</output>

  `,
  props: {
    value: { default: 0, type: [Number, String] },
    from: { default: 0, type: [Number, String] },
    to: { default: 360, type: [Number, String] },
    duration: { default: 10000, type: [Number, String] },
    playing: { default: true, type: Boolean },
    reset: { default: false, type: Boolean },
    loop: { default: true, type: Boolean },
    alternate: { default: false, type: Boolean },
    easing: { default: "linear", type: String, description: 'See [easing functions](https://animejs.com/documentation/#linearEasing)' },
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
      autoplay: false
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
