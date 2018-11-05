import Markdown from "../Markdown.js";
import Css from "../Css.js";

import { parseColumns } from '../../utils.js'

export default {
  mixins: [Css],
  tag: 'Layout',
  components: { Markdown },
  props: ["content"],
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
        gridGap: '2em',
        gridTemplateColumns: 'repeat(' + slide.colCount + ', 1fr)',
        gridtemplateRows: 'repeat(' + slide.rowCount + ', 1fr)',
        gridTemplateAreas: slide.areas,
        gridAutoRows: '',
        gridAutoColumns: '',
        overflow: 'hidden',
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
`,
css: `
.slide {
  padding: 3em;
}
.slide p, .slide li, .slide .button_primary {
  font-size: 1.3em;
  line-height: 1.7em;
}
.slide li p {
  font-size: 1rem;
}
.slide .button_primary,
.slide .button_secondary {
  font-size: 1.3em;
}
.slide h1 {
  font-size: 3em;
}
.slide h2 {
  font-size: 2.2em;
}
.slide h3 {
  font-size: 1.8em;
}
.slide li {
  margin-bottom: 0.5em;
}
.slide blockquote {
  margin: 2em 0 2em 0;
}
.slide blockquote p {
  font-size: 1.3rem;
}
.slide small {
  font-size: 1.3em;
  line-height: 1.7em;
}
.slide p a, .slide a {
  font-size: inherit;
}
`
};
