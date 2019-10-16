export default {
  props: ["title", "content"],
  methods: {
    generateUtils(title, content) {
      return `## ${title}${content}

#### Import

Function can be imported using Javascript import:

    import { ${title} } from "https://designstem.github.io/fachwerk/fachwerk.js"

`;
    }
  },
  template: `
<f-content-editor
  type="document"
  menu="none"
  :title="title"
  :content="generateUtils(title,content)"
/>
</div>`
};
