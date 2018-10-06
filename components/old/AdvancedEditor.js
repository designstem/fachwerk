import Css from "../mixins/Css.js";

export default {
  mixins: [Css],
  props: { value: { default: "" } },
  mounted() {
    const editor = new CodeFlask(this.$refs.editor, {
      defaultTheme: false
    });
    editor.updateCode(this.value);
    editor.onUpdate(content => {
      this.$emit("input", content);
    });
  },
  template: `
    <div style="position: relative; height: 100%;">
      <div ref="editor" />
    </div>
  `,
  css: `
    .codeflask {
      color: var(--color-gray-dark);
    }
    .codeflask_flatten {
    }
    .codeflask_pre {
    }
    .codeflask__textarea {
    }
    .codeflask .token.punctuation,
    .codeflask .token.keyword,
    .codeflask .token.operator, 
    .codeflask .token.selector,
    .codeflask .token.string,
    .codeflask .token.comment,
    .codeflask .token.function, 
    .codeflask .token.boolean,
    .codeflask .token.number,
    .codeflask .token.property,
    .codeflask .token.tag,
    .codeflask .token.attr-value {
      color: var(--color-blue-medium);
    }
  `
};
