export default {
  name: "Anime",
  description: "An animation component, in fact, AnimeJS wrapper",
  example: `
<Anime>
  <h1 class="bullet" slot-scope="{value}">
      {{ Math.floor(value) }}
  </h1>
</Anime>

<Anime :duration="50000">
  <h1 class="bullet" slot-scope="{value}">
      {{ Math.floor(value) }}
  </h1>
</Anime>
  `,
  props: {
    name: { default: "value" },
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
    return this.$scopedSlots.default ? this.$scopedSlots.default({
      [this.name]: this.value
    }) : '';
  }
};