import { Css } from "../../../mixins.js";
import FMarkdown from "../internal/FMarkdown.js";
import { parseColumns } from "../../../utils.js";

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
    type: { default: 'slides', type: String }
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
    console.log(this.preparedContent)
  },
  template: `
  <div>
    <f-theme
      v-for="(slide,i) in preparedContent"
      :key="i"
      :theme="slide.theme || 'light'"
      v-show="type == 'slides' ? i == currentIndex : true"
      :class="type == 'slides' ? 'slides' : 'document'"
      :style="{
        display: 'grid',
        height: slide.height == 'fit' ? 'var(--content-height)' : 'auto',
        gridTemplateColumns: 'repeat(' + slide.colCount + ', 1fr)',
        gridTemplateRows: type == 'slides' ? 'repeat(' + slide.rowCount + ', 1fr)' : 'none',
        gridTemplateAreas: slide.areas,
        gridAutoRows: '',
        gridAutoColumns: '',
        overflow: 'hidden',
        gridGap: slide.gap == 'none' ? '' : 'var(--content-gap)',
        padding: slide.padding == 'none' ? '' : 'var(--content-padding)'
      }"
    >
      <FMarkdown
        v-for="(col,i) in slide.content"
        :style="{ gridArea: 'a' + (i + 1) }"
        :key="i"
        :content="col"
        class="cell"
      />
    </f-theme>
  </div>
  `,
  cssprops: {
    "--content-height": {
      default: "100vh",
      description: "Content height"
    },
    "--content-padding": {
      default: "var(--base3)",
      description: "Content padding"
    },
    "--content-gap": {
      default: "var(--base2)",
      description: "Gap between content columns"
    }
  },
  // css: `
  // .slides > .cell > * {
  //   height: 100%;
  // }
  // `
};