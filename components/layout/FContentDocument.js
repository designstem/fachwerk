import Markdown from "../Markdown.js";

export default {
  tag: 'Layout',
  description: `
Shows a Markdown content as a linear document.
  `,
  example: `
<f-content-document
  content="## Hello\n---\n\n## World"
  style="box-shadow: inset 0 0 10px lightgray"
/>
  `,
  components: { Markdown },
  props: { content: { default: '', type: String }},
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