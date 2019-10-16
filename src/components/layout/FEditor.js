export default {
  tag: "Layout",
  props: { value: { default: "", type: [String,Number] } },
  description: `
Creates a code editor, to be used with v-model.

⌨️ Allows to enter two spaces using  <kbd>tab</kbd> key.

Technically it creates a \`<textarea>\` tag. For richer code editing experience, use \`<f-markdown-editor>\` instead.

<f-editor v-model="someVariable" />
  `,
  data: () => ({ content: "" }),
  mounted() {
    this.$watch(
      "value",
      value => {
        this.content = value;
      },
      { immediate: true }
    );
    // Handle tab key
    // https://jsfiddle.net/2wAzx/13/
    this.$refs.editor.onkeydown = function(e) {
      if (e.keyCode === 9) {
        const val = this.value;
        const start = this.selectionStart;
        const end = this.selectionEnd;
        this.value = val.substring(0, start) + "  " + val.substring(end);
        this.selectionStart = this.selectionEnd = start + 2;
        return false;
      }
    };
  },
  template: `
    <textarea
      ref="editor"
      v-model="content"
      @input="$emit('input', content)"
      style="
        border: none;
        color: var(--lightergray);
        background: var(--paleblue);
        font-family: var(--font-mono);
        font-size: var(--font-mono-size);
        line-height: var(--font-mono-lineheight);
        outline: none;
        resize: none;
        width: 100%;
        padding: var(--base2);
      "
    />
  `
};
