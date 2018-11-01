export default {
  description: `
An animation component, based on [AnimeJS](https://github.com/juliangarnier/anime) library.

Supports most of the animation options AnimeJS provides.

See also avabilable [easing functions](https://github.com/juliangarnier/anime#built-in-functions). 
  `,
  example: `
<ButtonsData :buttons="['Pause','Play']" :value="1">
<AnimeDataTwo slot-scope="bData" :values="[{ from: 0, duration: 10000 },{ duration: 100 }]" :playing="bData.value">
  <pre slot-scope="aData" v-html="aData" />
</AnimeDataTwo>
</ButtonsData>
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
    this.innerValues = this.values.map(v => {
      return { value: v.value ? v.value : v.from ? v.from : 0 };
    });
    const animes = this.values.map((v, i) =>
      anime({
        targets: this.innerValues[i],
        duration: v.duration || 5000,
        value: v.to || 100,
        loop: this.loop || true,
        direction: v.alternate ? "alternate" : null,
        easing: v.easing || "linear",
        autoplay: false
      })
    );
    this.$watch(
      "playing",
      playing => {
        animes.forEach(a => {
          if (playing) {
            a.play();
          } else {
            a.pause()
          }
        })
      },
      { immediate: true }
    );
  },
  render() {
    return this.$scopedSlots.default
      ? this.$scopedSlots.default({
          values: this.innerValues.map(v => v.value)
        })
      : "";
  }
};
