export default {
  props: {
    src: { default: "B9dSYgd5Elk", type: String }
  },
  computed: {
    currentSrc() {
      return `//youtube.com/embed/${this.src}`;
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
