import { Css } from "../../mixins.js";
import FMarkdown from "../internal/FMarkdown.js";
import { parseColumns } from "../../utils.js";

export default {
  mixins: [Css],
  tag: "Layout",
  description: `
Shows Markdown content.

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
  components: { FMarkdown },
  props: {
    content: { default: "", type: String },
    index: { default: 0, type: Number },
    autosaveId: { default: "0", type: String },
    slides: { default: false, type: Boolean }
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
    first() {
      this.currentIndex = 0;
    },
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

    if (this.$global) {
      this.$global.$on("next", () => this.next());
      this.$global.$on("prev", () => this.prev());
      this.$global.$on("first", () => this.first());
    }
  },
  template: `
  <div>
    <div
      v-for="(slide,i) in preparedContent"
      v-show="slides ? i == currentIndex : true"
      class="slide"
      :style="{
        display: 'grid',
        gridTemplateColumns: 'repeat(' + slide.colCount + ', 1fr)',
        gridtemplateRows: 'repeat(' + slide.rowCount + ', 1fr)',
        gridTemplateAreas: slide.areas,
        gridAutoRows: '',
        gridAutoColumns: '',
        overflow: 'hidden',
        gridGap: 'var(--content-gap)',
        padding: 'var(--content-padding)'
      }"
    >
      <FMarkdown
        v-for="(col,i) in slide.content"
        :style="{ gridArea: 'a' + (i + 1) }"
        :key="i"
        :content="col"
        class="cell"
      />
    </div>
  </div>
  `,
  cssprops: {
    "--content-padding": {
      default: "var(--base3)",
      description: "Content padding"
    },
    "--content-gap": {
      default: "var(--base2)",
      description: "Gap between content columns"
    }
  }
};
