import Markdown from "../Markdown.js";
import { flatten } from '../../utils.js'
import Css from "../Css.js";

export default {
  mixins: [Css],
  tag: 'Layout',
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
        class="card break"
      >
        <Markdown :content="card"/>
      </div>
    </div>
  `,
  css: `
  .card {
    --base: 7px;
    padding: var(--base2);
    border: 3px solid var(--gray);
    border-radius: var(--border-radius);
  }
  `
};
