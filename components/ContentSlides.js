import Markdown from "./Markdown.js";
import Css from "../mixins/Css.js";

export default {
  mixins: [Css],
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
      this.currentIndex < this.preparedContent.length - 1 &&
        this.currentIndex++;
    }
  },
  mounted() {
    document.addEventListener("keydown", e => {
      if (e.keyCode == 37) {
        this.prev();
      }
      if (e.keyCode == 39) {
        this.next();
      }
    });
  },
  template: `
    <div>
      <div
        v-for="(slide,i) in preparedContent"
        v-if="i == currentIndex"
        
      >
        <Markdown class="slide" :content="slide"/>
      </div>
    </div>
  `,
  css: `
    .slide p, .slide li, .slide .button_primary {
      font-size: 1.5rem;
      line-height: 2.2rem;
    }
    .slide .button_primary,
    .slide .button_secondary {
      font-size: 1.3rem;
    }
    .slide h2 {
      font-size: 2.2em;
      --line-height: 2.2rem;
    }
    .slide div {
      margin-top: 1rem;
    }
    .slide li {
      margin-bottom: 0.5rem;
    }
    .slide blockquote {
      margin: 2em 0 2em 2em;
    }
  `
};
