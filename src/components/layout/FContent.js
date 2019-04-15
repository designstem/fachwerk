import { Vue, Css, store } from "../../../fachwerk.js";
import FMarkdown from "../internal/FMarkdown.js";
import { parseColumns } from "../../../fachwerk.js";

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
    type: { default: "slides", type: String }
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
      this.currentIndex = this.preparedContent.length - 1;
    },
    prev() {
      this.currentIndex > 0 && this.currentIndex--;
    },
    next() {
      this.currentIndex < this.preparedContent.length - 1 &&
        this.currentIndex++;
    },
    goto(id) {
      if (typeof id === "string") {
        const index = this.preparedContent.findIndex(
          slide => slide.section === id || slide.id === id
        );
        if (index > -1) {
          this.currentIndex = index;
        }
      } else {
        this.currentIndex = id;
      }
    },
    background(slide) {
      const tint = slide.tint ? slide.tint : 0.3;
      return `linear-gradient(
          rgba(0, 0, 0, ${tint}),
          rgba(0, 0, 0, ${tint})
        ),
        url(${slide.background})
      `;
    }
  },
  mounted() {

    this.$watch(
      "index",
      index => {
        this.currentIndex = index;
      },
      { immediate: true }
    );

    const storedActiveIndex = store.get("index");

    Vue.nextTick(() => {
      if (
        storedActiveIndex &&
        storedActiveIndex < this.preparedContent.length
      ) {
        this.currentIndex = storedActiveIndex;
      }
    });

    this.$watch(
      "currentIndex",
      currentIndex => {
        const currentSlide = this.preparedContent[currentIndex];
        if (currentSlide && currentSlide.section) {
          Vue.set(this.$global.$data.state, "section", currentSlide.section);
        }
        store.set("index", currentIndex);
      },
      { immediate: true }
    );

    if (this.$global) {
      this.$global.$on("next", () => this.next());
      this.$global.$on("prev", () => this.prev());
      this.$global.$on("first", () => this.first());
      this.$global.$on("last", () => this.last());
      this.$global.$on("goto", id => this.goto(id));
    }
  },
  template: `
  <div class="content">
    <f-theme
      v-for="(slide,i) in preparedContent"
      :key="i"
      :theme="slide.theme || 'light'"
    >
      <div
        v-if="type == 'slides' ? i == currentIndex : true"
        :class="type == 'slides' ? 'fit' : ''"
        :style="{
          display: 'grid',
          height: slide.height ? slide.height : type == 'slides' ? 'var(--content-height)' : '',
          gridTemplateColumns: 'repeat(' + slide.colCount + ', 1fr)',
          gridTemplateRows: type == 'slides' ? 'repeat(' + slide.rowCount + ', 1fr)' : 'none',
          gridTemplateAreas: slide.areas,
          gridAutoRows: '',
          gridAutoColumns: '',
          overflow: '',
          gridGap: slide.gap ? slide.gap : 'var(--content-gap)',
          padding: (slide.padding || '').trim() ? slide.padding : 'var(--content-padding)',
          background: slide.background ? background(slide) : '',
          backgroundSize: slide.background ? 'cover' : '',
          backgroundRepeat: slide.background ? 'no-repeat' : '',
          breakAfter: 'always'
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
    </f-theme>
  </div>
  `,
  cssprops: {
    "--content-height": {
      default: "100vh",
      description: "Content height"
    },
    "--content-padding": {
      default: "calc(var(--content-base) * 5)",
      description: "Content padding"
    },
    "--content-gap": {
      default: "calc(var(--content-base) * 3)",
      description: "Gap between content columns"
    },
    "--content-section-padding": {
      default: "calc(var(--content-base) * 3)",
      description: "Padding around `section` tag"
    },
    "--content-base": {
      default: "calc(var(--base) / 2 + 0.5vw)",
      description: "Gap between content columns"
    }
  },
  css: `
  .content {
    --base: var(--content-base);
  }
  .cell p:last-child {
    margin: 0;
  }
  /*
  .fit > .cell > p {
    height: 100%;
  }
  */
  .fit > .cell {
    --image-min-height: 0;
  }
  `
};
