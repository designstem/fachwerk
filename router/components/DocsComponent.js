export default {
  props: ["title", "content"],
  computed: {
    currentContent() {
      return `# ${this.title}
${this.content}
    `;
    }
  },
  template: `
<f-content-editor :content="currentContent" />
</div>`
};