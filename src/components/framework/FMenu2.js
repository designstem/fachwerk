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
    menu: { default: false, type: Boolean }
  },
  data: () => ({ currentSection: null }),
  computed: {
    currentContent() {
      return parseContent(this.content).filter(c => c.chapter || c.section);
    }
  },
  mounted() {
    this.$global.$on("section", section => (this.currentSection = section));
  },
  template: `
    <div v-if="menu" class="menu">
      <div v-for="(c, i) in currentContent">
        <h5
          v-if="c.chapter"
          style="
            padding: var(--base) var(--base) var(--base) var(--base2);
            margin: var(--base2) 0 0 0;
          "
        >
          {{ c.chapter }}
        </h5>
        <h5
          style="
            display: block;
            cursor: pointer;
            padding-left: 1ch;
            margin: 0;
            padding: var(--base) var(--base) var(--base) var(--base3);
            font-Weight: normal;
          "
          @click="currentSection = c.section; $global.$emit('section', c.section)"
        >
          <span :style="{
            color: c.section == currentSection ? 'var(--blue)' : 'var(--gray)',
            borderBottom: c.section == currentSection ? '2px solid var(--blue)' : '',
          }">
          {{ c.section }}
          </span>
        </h5>
      </div>
    </div>
    `,
    css: `
    .menu {
      width: 200px;
      height: 100vh;
      padding: var(--base6) 0 var(--base2) 0;
      overflow: auto;
      position: sticky;
      top: 0;
    }
    @media (max-width: 800px) {
      .menu {
        height: inherit;
        max-height: 50vh;
        position: static;
        top: inherit;
      }
    }
    `
};
