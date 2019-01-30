import { Css } from "../../mixins.js";
import FMarkdown from "../internal/FMarkdown.js";
import { parseColumns } from "../../utils.js";

export default {
  mixins: [Css],
  tag: "Layout",
  description: `
Shows Markdown content.

<f-content
  content="## Hello world"
  style="box-shadow: inset 0 0 10px lightgray"
/>
  `,
  components: { FMarkdown },
  props: {
    content: { default: "", type: String },
    index: { default: 0, type: Number },
    autosaveId: { default: "0", type: String },
    type: { default: 'document', type: String }
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
    last() {
      this.currentIndex =  this.preparedContent.length - 1;
    },
    prev() {
      this.currentIndex > 0 && this.currentIndex--;
    },
    next() {
      this.currentIndex < this.preparedContent.length - 1 &&
        this.currentIndex++;
    },
    goto(index) {
      this.currentIndex = index
    },
  },
  mounted() {
    this.$watch(
      "index",
      index => {
        this.currentIndex = index;
      },
      { immediate: true }
    );

    if (this.$global) {
      this.$global.$on("next", () => this.next());
      this.$global.$on("prev", () => this.prev());
      this.$global.$on("first", () => this.first());
      this.$global.$on("last", () => this.last());
      this.$global.$on("goto", index => this.goto(index));
    }
  },
  template: `
  <div>
    <div
      v-for="(slide,i) in preparedContent"
      v-show="type == 'slides' ? i == currentIndex : true"
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
