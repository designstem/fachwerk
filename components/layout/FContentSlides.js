import Markdown from "../Markdown.js";

import { parseColumns } from '../../utils.js'

export default {
  tag: 'Layout',
  components: { Markdown },
  props: {
    content: { default: '', type: String },
    base: { default: '12px', type: String },
  },
  data: () => ({ currentIndex: 0 }),
  computed: {
    preparedContent() {
      return this.content
        .replace(/\n--\n/g, "")
        .split(/\n---\n/)
        .map(parseColumns);
    },
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
      if (e.altKey && e.keyCode == 37) {
        e.preventDefault()
        this.prev();
      }
      if (e.altKey && e.keyCode == 39) {
        e.preventDefault()
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
        '--base': base,
        display: 'grid',
        gridGap: '2em',
        gridTemplateColumns: 'repeat(' + slide.colCount + ', 1fr)',
        gridtemplateRows: 'repeat(' + slide.rowCount + ', 1fr)',
        gridTemplateAreas: slide.areas,
        gridAutoRows: '',
        gridAutoColumns: '',
        overflow: 'hidden',
        padding: 'var(--base4)'
      }"
    >
      <Markdown
        v-for="(col,i) in slide.content"
        :style="{ gridArea: 'a' + (i + 1) }"
        :key="i"
        :content="col"
      />
    </div>
  </div>
  `
};
