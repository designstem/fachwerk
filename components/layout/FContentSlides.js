import Markdown from "../Markdown.js";
import { parseColumns } from "../../utils.js";
import Css from "../Css.js";

export default {
  mixins: [Css],
  tag: "Layout",
  description: `
Shows Markdown content as slides.

⌨️ Allows to navigate between slides using  <kbd>Alt</kbd> <kbd>←</kbd> and <kbd>Alt</kbd> <kbd>→</kbd>.
  `,
  example: `
<f-buttons-data :buttons="['Slide 1','Slide 2']">
  <f-content-slides
    slot-scope="data"
    :index="data.value"
    content="## Hello\n---\n## World"
    style="box-shadow: inset 0 0 10px lightgray"
  />
</f-buttons-data>
  `,
  components: { Markdown },
  props: {
    content: { default: "", type: String },
    index: { default: 0, type: Number },
    base: { default: "12px", type: String },
    autosaveId: { default: "0", type: String }
  },
  data: () => ({ currentIndex: 0 }),
  computed: {
    preparedContent() {
      return this.content
        .replace(/\n--\n/g, "")
        .split(/\n---\n/)
        .map(parseColumns);
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
    const savedContent = JSON.parse(
      localStorage.getItem(`f-content-slides-${this.autosaveId}`)
    );
    if (savedContent) {
      this.currentIndex = savedContent.currentIndex;
    }

    this.$watch(
      "index",
      index => {
        this.currentIndex = index;
      },
      { immediate: true }
    );

    this.$watch("currentIndex", currentIndex => {
      localStorage.setItem(
        `f-content-slides-${this.autosaveId}`,
        JSON.stringify({ currentIndex })
      );
    });

    document.addEventListener("keydown", e => {
      if (e.altKey && e.keyCode == 37) {
        e.preventDefault();
        this.prev();
      }
      if (e.altKey && e.keyCode == 39) {
        e.preventDefault();
        this.next();
      }
    });

    if (this.$events) {
      this.$events.$on('next', () => this.next())
      this.$events.$on('prev', () => this.prev())
    }

  },
  template: `
  <div>
    <div
      v-for="(slide,i) in preparedContent"
      v-show="i == currentIndex"
      class="slide"
      :style="{
        '--base': base,
        display: 'grid',
        gridGap: 'var(--gap)',
        gridTemplateColumns: 'repeat(' + slide.colCount + ', 1fr)',
        gridtemplateRows: 'repeat(' + slide.rowCount + ', 1fr)',
        gridTemplateAreas: slide.areas,
        gridAutoRows: '',
        gridAutoColumns: '',
        overflow: 'hidden',
        padding: 'var(--f-content-slides-padding)'
      }"
    >
      <Markdown
        v-for="(col,i) in slide.content"
        :style="{ gridArea: 'a' + (i + 1) }"
        :key="i"
        :content="col"
        class="cell"
      />
    </div>
  </div>
  `,
  css: `
    :root {
      --f-content-slides-padding: var(--base5);
    }
    .cell > div > p {
      margin: 0;
    }
  `
};
