import Markdown from "./Markdown.js";
import { flatten } from '../utils.js'
import Css from "./Css.js";

export default {
  mixins: [Css],
  components: { Markdown },
  props: ["content"],
  data: () => ({ currentIndex: 0 }),
  computed: {
    preparedContent() {
      return flatten(this.content
          .replace(/\n-\n/g, "")
          .split(/\n---\n/)
        .map(s => s.split(/\n--\n/)));
    }
  },
  template: `
    <div style="
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 1rem;
      padding: 1.5rem;
    ">
      <div
        v-for="(card,i) in preparedContent"
        style="
          padding: 1rem;
          border: 3px solid var(--gray);
          border-radius: var(--border-radius);
        "
        class="card"
      >
        <Markdown :content="card"/>
      </div>
    </div>
  `,
  css: `
    .card h1 {
      font-size: 2rem;
      line-height: 2rem;
    }
  `
};
