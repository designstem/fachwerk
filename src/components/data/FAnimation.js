import { Vue, anime, get as getValue, set as setValue, makeNumber } from "../../../fachwerk.js";

export default {
  description: `
An animation component, based on [AnimeJS](https://github.com/juliangarnier/anime) library. Supports most of the animation options AnimeJS provides.

> See also available [easing functions](https://animejs.com/documentation/#linearEasing). 

#### Local data

<f-animation>
  <pre slot-scope="{ value }">{{ value }}</pre>
</f-animation>

#### Local data, integer value

<f-animation integer>
  <pre slot-scope="{ value }">{{ value }}</pre>
</f-animation>

#### Global data

<f-animation v-on:value="value => set('animation', value)" />

<pre>{{ get('animation', 0) }}</pre>

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
    easing: { default: "linear", type: String },
    integer: { default: false, type: Boolean },
    set: {
      default: "",
      type: [String],
      description: "Key for setting a global value"
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
