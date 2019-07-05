import { marked } from "../../../fachwerk.js";
import FRender from "./FRender.js";

export default {
  components: { FRender },
  props: ["content"],
  methods: { marked },
  computed: {
    processedContent() {
      return this.content
        .replace(/(<[^>]+>)/g, w =>
          w.replace(/(\n|[\n])/g, " ").replace(/\s+/g, " ")
        )
        .replace(/(@)(.*)(=)/g, "v-on:$2$3")
        .replace(/(#+)\s+([0-9a-zA-Z]+)\./g, "$1 <span class=\"bullet\">$2</span>")
    }
  },
  template: `
    <f-render :content="'<div>' + marked(processedContent, { breaks: true }) + '</div>'" />
  `
};
