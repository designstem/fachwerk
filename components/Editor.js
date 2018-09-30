export default {
  props: ["value"],
  data() {
    return {
      content: this.value
    };
  },
  mounted() {
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
        --padding: 1rem;
        color: var(--color-blue-medium);
        font-family: var(--font-mono);
        border: none;
        height: 100vh;
        line-height: 1.3rem;
        width: 95%;
        outline: none;
        --background: var(--color-gray-darker);
        font-size: 0.9rem;
      "
    />
  `
};
