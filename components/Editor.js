export default {
  props: ["value"],
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
        color: var(--color-blue-medium);
        font-family: var(--font-mono);
        font-size: 0.85rem;
        height: 100%;
        line-height: 1.3rem;
        outline: none;
        resize: none;
        width: 100%;
      "
    />
  `
};
