import {
  Vue,
  components,
  parseContent,
  send,
  isimageurl,
  color,
  slug,
  store,
  Css
} from "../../../fachwerk.js";

export default {
  mixins: [Css],
  props: {
    content: { default: "", type: String },
    type: { default: "document", type: String }
  },
  data: () => ({
    currentIndex: 0
  }),
  computed: {
    currentContent() {
      return parseContent(this.content);
    }
  },
  methods: {
    slug,
    gridStyle(slide) {
      return {
        gridTemplateColumns: slide.cols
          ? slide.cols
          : "repeat(" + slide.colCount + ", 1fr)",
        gridTemplateRows: slide.rows
          ? slide.rows
          : "repeat(" + slide.rowCount + ", minmax(min-content, max-content))",
        gridTemplateAreas: slide.areas,
        gridGap: slide.gap ? slide.gap : "var(--base3)"
      };
    },
    backgroundStyle(slide) {
      const tint = slide.tint ? slide.tint : 0.3;
      const background = slide.background
        ? isimageurl(slide.background)
          ? `linear-gradient(
                rgba(0, 0, 0, ${tint}),
                rgba(0, 0, 0, ${tint})
                ),
                  url(${slide.background})
              `
          : color(slide.background)
        : "";

      return {
        background,
        backgroundSize: slide.background ? "cover" : "",
        backgroundRepeat: slide.background ? "no-repeat" : ""
      };
    }
  },
  mounted() {
    this.$global.$on("index", index => (this.currentIndex = index));
  },
  template: `
    <div>
      <f-theme
        v-if="type == 'slides' ? i == currentIndex : true"
        v-for="(slide,i) in currentContent"
        :key="i"
        :id="slide.section ? slug(slide.section) : 'id-' + i"
        :theme="slide.theme ? slide.theme : ''"
        :style="{
          height: '100%'
        }"
      ><div :style="{
          ...backgroundStyle(slide),
          justifyContent: 'center',
          border: '-px solid red',
          textAlign: 'center',
      }">
        <div
          class="cells"
          :style="{
            ...gridStyle(slide),
            textAlign: 'left',
            margin: '0 auto',
            padding: slide.padding ? slide.padding : 'var(--content-padding2)',
            maxWidth: type == 'document' ? 'var(--content-max-width, 800px)' : '100%',
            minHeight: slide.height ? slide.height : type == 'slides' ? '100vh' : 'auto',
        }">
          <f-markdown
            v-for="(contentCell, j) in slide.content"
            :key="j"
            :content="contentCell"
            class="cell"
            :style="{
              '--base': type == 'slides' ? '11px' : '8px',
              gridArea: 'a' + (j + 1)
            }"
          />
        </div>
          </div>
      </f-theme>
    </div>
    `,
  cssprops: {
    "--content-padding2": {
      default: "var(--base6) calc(var(--base) + 5vw)",
      description: "Content height"
    },
  },
  css: `
    aside {
      padding: var(--content-padding2);
    }
    aside:only-child {
      height: 100%;
    }
    .cells {
      display: grid;
    }
    @media (max-width: 800px) {
      .cells {
        display: block;
        padding: var(--content-padding2) !important;
      }
    }
    .cell *:only-child, .cell *:last-child {
      margin-bottom: 0;
    }
    @media (max-width: 800px) {
      .cell {
        margin-top: calc(var(--base) + 5vw);
      }
      .cell:first-child {
        margin-top: 0;
      }
    }
    `
};