import Markdown from "./Markdown.js";

export default {
  components: { Markdown },
  props: ["content"],
  computed: {
    preparedContent() {
      return this.content
        .replace(/\n--\n/g, "")
        .replace(/\n-\n/g, "")
        .split("---");
    }
  },
  template: `
    <div>
      <div
        v-for="slide in preparedContent"
        style="border: 3px solid black"
      >
        <Markdown :content="slide"/>
      </div>
    </div>
  `
};
