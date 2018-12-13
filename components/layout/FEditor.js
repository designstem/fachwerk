export default {
  tag: "Layout",
  props: { value: { default: "", type: [String,Number] } },
  description: `
Creates a code editor, to be used with v-model.

⌨️ Allows to enter two spaces using  <kbd>tab</kbd> key.

Technically it creates a \`<textarea>\` tag. It is a low level component, it is usually easier to use \`<f-content-editor>\` instead.
  `,
  example: `
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
        color: var(--blue);
        font-family: var(--font-mono);
        font-size: calc(var(--base) * 1.75);
        line-height: calc(var(--base) * 2.75);
        height: 100%;
        outline: none;
        resize: none;
        width: 100%;
        background: var(--lightblue);
        padding: var(--base2);
      "
    />
  `
};
