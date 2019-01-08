export default {
  description: `
An animation component, based on [AnimeJS](https://github.com/juliangarnier/anime) library.

Supports most of the animation options AnimeJS provides.

See also avabilable [easing functions](https://github.com/juliangarnier/anime#built-in-functions). 

### Local data

<f-animation :to="99">
  <h1 slot-scope="{ value }" class="bullet">
      {{ Math.floor(value) }}
  </h1>
</f-animation>

### Global data

<f-animation :to="99" v-on:value="value => set('animation', value)" />

<h1 class="bullet">
  {{ Math.floor(get('animation', 0)) }}
</h1>

  `,
  props: {
    from: { default: 0, type: [Number,String] },
    to: { default: 360, type: [Number,String] },
    duration: { default: 10000, type: [Number,String] },
    playing: { default: true, type: Boolean },
    reset: { default: false, type: Boolean },
    loop: { default: true, type: Boolean },
    alternate: { default: false, type: Boolean },
    easing: { default: "linear", type: String },
    integer: { default: false, type: Boolean },
  },
  data: () => ({ value: 0 }),
  mounted() {
    this.value = this.from;
    const a = anime({
      targets: this,
      duration: this.duration,
      value: this.to,
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
            a.reset()
          }
          a.pause();
        }
      },
      { immediate: true }
    );
    this.$watch(
      "value",
      value => {
        this.$emit('value', value)
      },
      { immediate: true }
    );
  },
  render() {
    return this.$scopedSlots.default
      ? this.$scopedSlots.default({
          value: this.value
        })
      : "";
  }
};