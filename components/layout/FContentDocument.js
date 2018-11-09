import Markdown from "../Markdown.js";

export default {
  tag: 'Layout',
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
    <div style="padding: var(--base4);">
      <Markdown :content="preparedContent"/>
    </div>
  `
};