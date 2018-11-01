export default {
  description: `
An animation component, based on [AnimeJS](https://github.com/juliangarnier/anime) library.

Supports most of the animation options AnimeJS provides.

See also avabilable [easing functions](https://github.com/juliangarnier/anime#built-in-functions). 
  `,
  example: `
  <AnimeData :to="99">
<h1
  slot-scope="data"
  class="bullet"
>
    {{ Math.floor(data.value) }}
</h1>
</AnimeData>

<AnimeData :values="[
  {to: 360, duration: 1000 * 60 * 10 },
  {to: 360, duration: 1000 * 60 * 10 },
  {to: 360, duration: 1000 * 60 * 10 }
]">
<ThreeScene slot-scope="data">
<ThreeBox
  :rotation="{ x: data.values[0], y: data.values[1], z: data.values[2] }"
/>
</ThreeScene>
</AnimeData>
  `,
  props: {
    value: { default: 0, type: Number },
    from: { default: 0, type: Number },
    to: { default: 100, type: Number },
    duration: { default: 5000, type: Number },
    playing: { default: true, type: Boolean },
    loop: { default: true, type: Boolean },
    alternate: { default: false, type: Boolean },
    easing: { default: "linear", type: String },
    values: { default: [], type: Array }
  },
  data: () => ({ innerValue: 0, innerValues: [] }),
  mounted() {
    if (this.values.length) {
      this.innerValues = this.values.map(v => {
        return { value: v.value ? v.value : v.from ? v.from : 0 };
      });
      const as = this.values.map((v, i) =>
        anime({
          targets: this.innerValues[i],
          duration: v.duration || this.duration,
          value: v.to || this.to,
          loop: this.loop || this.loop,
          direction: v.alternate ? "alternate" : this.direction,
          easing: v.easing || this.easing,
          autoplay: false
        })
      );
      this.$watch(
        "playing",
        playing => {
          as.forEach(a => {
            if (playing) {
              a.play();
            } else {
              a.pause();
            }
          });
        },
        { immediate: true }
      );
    } else {
      this.innerValue = this.value ? this.value : this.from ? this.from : 0
      const a = anime({
        targets: this,
        innerValue: this.to,
        duration: this.duration,
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
    }
  },
  render() {
    return this.$scopedSlots.default
      ? this.$scopedSlots.default(this.values.length ? {
          values: this.innerValues.map(v => v.value)
        } : { value: this.innerValue })
      : "";
  }
};
