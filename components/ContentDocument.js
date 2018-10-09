import Markdown from "./Markdown.js";

export default {
  components: { Markdown },
  props: ["content"],
  computed: {
    preparedContent() {
      return this.content
        .replace(/\n---\n/g, "")
        .replace(/\n--\n/g, "")
        .replace(/\n-\n/g, "");
    }
  },
  template: `
    <div>
      <Markdown :content="preparedContent"/>
    </div>
  `
};