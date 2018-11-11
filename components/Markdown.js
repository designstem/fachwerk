import Render from "./Render.js";

export default {
  components: { Render },
  props: ["content"],
  methods: { marked },
  computed: {
    processedContent() {
      return this.content.replace(/(<[^>]+>)/g, w =>
        w.replace(/(\n|[\n])/g, " ").replace(/\s+/g, " ")
      );
    }
  },
  template: `
  <div>
    <Render :t="'<div>' + marked(processedContent, { breaks: true }) + '</div>'" />
  </div>
  `
};
