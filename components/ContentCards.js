import Markdown from "./Markdown.js";
import { flatten } from "./utils.js"

export default {
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
      >
        <Markdown :content="slide"/>
      </div>
    </div>
  `
};
