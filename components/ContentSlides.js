import Markdown from "./Markdown.js";

export default {
  components: { Markdown },
  props: ["content"],
  data: () => ({ currentIndex: 0 }),
  computed: {
    preparedContent() {
      return this.content
        .replace(/\n--\n/g, "")
        .replace(/\n-\n/g, "")
        .split("---");
    }
  },
  methods: {
    prev() {
      this.currentIndex > 0 && this.currentIndex--;
    },
    next() {
      this.currentIndex < this.preparedContent.length - 1 && this.currentIndex++;
    }
  },
  mounted() {
    document.addEventListener('keydown', e => {
      if (e.keyCode == 37) { this.prev() }
      if (e.keyCode == 39) { this.next() }
    })
  },
  template: `
    <div>
      <div
        v-for="(slide,i) in preparedContent"
        v-if="i == currentIndex"
      >
        <Markdown :content="slide"/>
      </div>
    </div>
  `
};
