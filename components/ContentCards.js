import Markdown from "./Markdown.js";
import { flatten } from '../utils.js'
import Css from "../mixins/Css.js";

export default {
  mixins: [Css],
  components: { Markdown },
  props: ["content"],
  data: () => ({ currentIndex: 0 }),
  computed: {
    preparedContent() {
      return flatten(
        this.content
          .replace(/\n-\n/g, "")
          .split("---")
          .map(s => s.split("--"))
      );
    }
  },
  template: `
    <div style="
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      --grid-template-rows: 1fr;
      grid-gap: 1rem;
    ">
      <div
        v-for="(slide,i) in preparedContent"
        style="
          padding: 1rem;
          border: 3px solid var(--color-gray-medium);
          border-radius: var(--border-radius);
        "
        class="card"
      >
        <Markdown :content="slide"/>
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
