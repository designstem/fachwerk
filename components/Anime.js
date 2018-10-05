export default {
  description: `
**⚠️ To be renamed to AnimeData**.

An animation component, based on [AnimeJS](https://github.com/juliangarnier/anime) library.

Supports most of the animation options AnimeJS provides, in addition allows to configure the returned variable name with <code>:name</code> prop. 
  `,
  example: `
<Anime>
  <h1 class="bullet" slot-scope="{value}">
      {{ Math.floor(value) }}
  </h1>
</Anime>

<Anime name="count" :duration="50000">
  <h1 class="bullet" slot-scope="{count}">
      {{ Math.floor(count) }}
  </h1>
</Anime>
  `,
  props: {
    name: { default: "value", type: String },
    from: { default: 0 },
    to: { default: 100 },
    duration: { default: 5000 },
    playing: { default: true },
    loop: { default: true },
    alternate: { default: false },
    easing: { default: "linear" }
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
          a.pause();
        }
      },
      { immediate: true }
    );
  },
  render() {
    return this.$scopedSlots.default
      ? this.$scopedSlots.default({
          [this.name]: this.value
        })
      : "";
  }
};