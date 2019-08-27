import {
  Vue,
  Css,
  store,
  isimageurl,
  parseContent,
  color,
  array2object,
  setCssVariable,
  get,
  set,
  slug
} from "../../../fachwerk.js";

import FMarkdown from "../internal/FMarkdown.js";

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
    index: { default: 0, type: [String, Number] },
    saveId: { default: "fachwerk", type: String },
    type: { default: "slides", type: String }
  },
  data: () => ({ currentIndex: 0 }),
  computed: {
    preparedContent() {
      return parseContent(this.content);
    }
  },
  methods: {
    get,
    set,
    array2object,
    slug,
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
      if (Vue.prototype.$global.state.type == 'slides') {
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
      }
      if (Vue.prototype.$global.state.type == 'document') {
        if (typeof id === "string") {
          const index = this.preparedContent.findIndex(
            slide => slide.section === id || slide.id === id
          );
          if (index > -1) {
            window.location.hash = slug(id)
          }
        } else {
          window.location.hash = 'id-' + i
        }
      }
    },
    background(slide) {
      const tint = slide.tint ? slide.tint : 0.3;
      return isimageurl(slide.background)
        ? `linear-gradient(
          rgba(0, 0, 0, ${tint}),
          rgba(0, 0, 0, ${tint})
        ),
        url(${slide.background})
      `
        : color(slide.background);
    },
    parseStyle(style) {
      return array2object(
        style
          .split(/;/g)
          .map(item => item.split(/:/).map(s => s.trim()))
          .filter(item => {
            return item.length == 2;
          })
      );
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
    const paddingMap = {
      slides: {
        view: "var(--base8) var(--base6) var(--base6) var(--base6)",
        edit: "var(--base8) var(--base6) var(--base6) var(--base6)"
      },
      document: {
        view: "var(--base8) calc(var(--base) * 18)",
        edit: "var(--base8) var(--base6) var(--base6) var(--base6)"
      }
    };
    // this.$watch(
    //   "type",
    //   type => {
    //     setCssVariable(
    //       "--content-padding",
    //       paddingMap[type == "slides" ? "slides" : "document"][
    //         this.$global.$data.state.preview ? "view" : "edit"
    //       ]
    //     );
    //   },
    //   { immediate: true }
    // );

    // Vue.prototype.$global.$on("edit", () =>
    //   setCssVariable(
    //     "--content-padding",
    //     paddingMap[this.type == "slides" ? "slides" : "document"][
    //       this.$global.$data.state.preview ? "view" : "edit"
    //     ]
    //   )
    // );

    const storedActiveIndex = store.get(this.saveId + ".index");

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
        store.set(this.saveId + ".index", currentIndex);
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
    <portal to="topright" v-if="get('type', 'slides') == 'slides'" :order="-2">
      <a class="quaternary" @click="set('type', 'document')">Document</a>
    </portal>
    <portal to="topright" v-if="get('type', 'slides') == 'document'" :order="-2">
      <a class="quaternary" @click="set('type', 'slides')">Slides</a>
    </portal>
    <f-theme
      v-for="(slide,i) in preparedContent"
      :key="i"
      :theme="slide.theme || 'light'"
      :id="slide.section ? slug(slide.section) : 'id-' + i"
    >
      <f-fade
        v-if="get('type', 'slides') == 'slides' ? i == currentIndex : true"
        :class="get('type', 'slides') == 'slides' ? 'fit' : ''"
        class="cells"
        :style="Object.assign({
          '--base': get('type', 'slides') == 'slides' ? '11px' : '8px',
          '--transition-duration': '0.1s',
          minHeight: slide.height ? slide.height : get('type', 'slides') == 'slides' ? '100vh' : 'auto',
          gridTemplateColumns: slide.cols ? slide.cols : 'repeat(' + slide.colCount + ', 1fr)',
          gridTemplateRows: slide.rows ? slide.rows : 'repeat(' + slide.rowCount + ', auto)',
          gridTemplateAreas: slide.areas,
          gridGap: slide.gap ? slide.gap : 'var(--content-gap)',
          padding: (slide.padding || '').trim() ? slide.padding : 'var(--base8) var(--base6) var(--base6) var(--base6)',
          background: slide.background ? background(slide) : '',
          backgroundSize: slide.background ? 'cover' : '',
          backgroundRepeat: slide.background ? 'no-repeat' : '',
          breakAfter: 'always'
        }, slide.style ? parseStyle(slide.style) : {})"
      >
        <FMarkdown
          v-for="(col,i) in slide.content"
          :style="{ gridArea: 'a' + (i + 1) }"
          :key="i"
          :content="col"
          class="cell"
        />
      </f-fade>
    </f-theme>
  </div>
  `,
  cssprops: {
    "--content-height": {
      default: "100vh",
      description: "Content height"
    },
    "--content-gap": {
      default: "var(--base3)",
      description: "Gap between content columns"
    }
  },
  css: `
  .cells {
    display: grid;
  }
  @media (max-width: 800px) {
    .cells {
      display: block;
    }
    .cell {
      margin-top: var(--content-gap);
    }
  }
  .cell p:last-child {
    margin: 0;
  }
  .fit > .cell {
    --image-min-height: 0;
  }
  .cell h1:only-child,
  .cell h2:only-child,
  .cell h3:only-child,
  .cell h4:only-child,
  .cell h5:only-child {
    margin: 0;
  }
  `
};
