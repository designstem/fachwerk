export default {
  description: `
Loads content from Markdown file and show it inline.

Below is the content fetched from \`../README.md\`:

<f-embed src="../README.md" />
`,
  props: {
    src: { default: '', type: String },
  },
  template: `
  <f-fetch :src="src" v-slot="{ value }">
    <f-content
      :content="value"
      type="document"
      style="--content-padding: 0;"
    />
  </f-fetch>
  `
};
