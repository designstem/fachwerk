import Markdown from "../Markdown.js";
import Css from "../../mixins/Css.js";

export default {
  mixins: [Css],
  components: { Markdown },
  props: ["content"],
  data: () => ({ currentIndex: 0 }),
  computed: {
    preparedContent() {
      return this.content
        .replace(/\n--\n/g, "")
        .split(/\n---\n/)
        .map(s => s.split(/\n-\n/));
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
        class="slide"
        :style="{
          display: 'grid',
          gridTemplateColumns: 'repeat(' + Math.min(slide.length, 3) +', 1fr)',
          gridGap: '1fr'
        }"
      >
        <Markdown
          v-for="(col,i) in slide"
          :key="i"
          :content="col"
        />
      </div>
    </div>
  `,
  css: `
    .slide p, .slide li, .slide .button_primary {
      font-size: 1.3rem;
      line-height: 2.2rem;
    }
    .slide .button_primary,
    .slide .button_secondary {
      font-size: 1.3rem;
    }
    .slide h2 {
      font-size: 2.2em;
    }
    /*
    .slide div {
      margin-top: 1rem;
    }
    */
    .slide li {
      margin-bottom: 0.5rem;
    }
    .slide blockquote {
      margin: 2em 0 2em 2em;
    }
  `
};
