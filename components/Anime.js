export default {
  name: "Anime",
  description: "A component that does a lot",
  example: `
<Anime :to="10" :duration="10000" >
  <h2 slot-scope="{value}">
    <span class="bullet">
      {{ Math.floor(value) }}
    </span>
  </h2>
</Anime>
  `,
  props: {
    name: { default: "value" },
    from: { default: 0 },
    to: { default: 100 },
    duration: { default: 1000 },
    playing: { default: true },
    loop: { default: true },
    alternate: { default: false },
    easing: { default: "linear" },
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
    return this.$scopedSlots.default({ [this.name]: this.value });
  }
};