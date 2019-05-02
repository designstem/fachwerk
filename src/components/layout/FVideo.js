export default {
  props: {
    src: {
      default: "",
      type: String,
      description: "Youtube video URL"
    }
  },
  description: `
Shows a Youtube video.

<f-video src="https://www.youtube.com/watch?v=JYHp8LwBUzo" />
  `,
  computed: {
    currentSrc() {
      const { search } = new URL(this.src || 'https://www.youtube.com/watch?v=JYHp8LwBUzo');
      const params = new URLSearchParams(search);
      const id = params.get("v");
      const start = params.get("start");
      return start ? `//youtube.com/embed/${id}?start=${start}` : `//youtube.com/embed/${id}`;
    }
  },
  template: `
    <p style="
      height: 0;
      max-width: 100%;
      overflow: hidden;
      padding-bottom: calc(9 / 16 * 100%);
      position: relative;
    ">
    <iframe
        style="
          height: 100%;
          left: 0;
          position: absolute;
          top: 0;
          width: 100%;
        "
        :src="currentSrc"
        frameborder="0"
        allowfullscreen
    />
  </p>
  `
};
