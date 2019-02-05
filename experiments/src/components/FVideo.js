export default {
  props: {
    src: {
      default: "https://www.youtube.com/watch?v=B9dSYgd5Elk",
      type: String,
      description: "Youtube video URL"
    }
  },
  computed: {
    currentSrc() {
      const { search } = new URL(this.src);
      const params = new URLSearchParams(search);
      const id = params.get("v");
      return `//youtube.com/embed/${id}`;
    }
  },
  template: `
    <div style="
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
    </div>
  `
};
