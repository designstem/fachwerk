import { Css } from '../../mixins.js'

export default {
  mixins: [Css],
  props: ["value"],
  data: () => ({ editor: null }),
  methods: {
//     preFormat(content) {
//       const formattedContent = content
//         .replace(/```\n+/g,'```\n\n')
//         .replace(/([^>])\n\n/g, "$1QQQ")
//         .replace(/\`\</g, "`@@@");
//       return `<template>
//   ${formattedContent}
// </template>`;
//     },
//     postFormat(content) {
//       return content
//         .replace("<template>\n", "")
//         .replace("</template>", "")
//         .replace(/QQQ/g, "\n\n")
//         .replace(/^  /, "")
//         .replace(/\n  /g, "\n")
//     },
//     onFormat() {
//       const doc = this.editor.getDoc();
//       const { ch, line } = doc.getCursor();
//       const prettyVue = prettier.formatWithCursor(
//         this.preFormat(this.editor.getValue()),
//         {
//           printWidth: 60,
//           cursorOffset: ch,
//           parser: "vue",
//           plugins: prettierPlugins
//         }
//       );
//       const prettyMd = prettier.formatWithCursor(
//         this.postFormat(prettyVue.formatted),
//         {
//           printWidth: 80,
//           cursorOffset: prettyVue.cursorOffset,
//           parser: "markdown",
//           proseWrap: "never",
//           plugins: prettierPlugins
//         }
//       );
//       this.editor.setValue(prettyMd.formatted);
//       doc.setCursor({ ch: prettyMd.cursorOffset, line });
//       this.editor.focus();
//     }
  },
  mounted() {
    this.editor = CodeMirror.fromTextArea(this.$refs.editor, {
      mode: "gfm",
      theme: "material",
      lineWrapping: true,
      //viewportMargin: Infinity,
      viewportMargin: 20,
      tabSize: 2,
      lineNumbers: true,
      smartIndent: false,
      //undoLevels: 0
      inputStyle: 'contenteditable'
    });
    const doc = this.editor.getDoc();
    this.$watch(
      "value",
      value => {
        const cursor = doc.getCursor()
        this.editor.setValue(value)
        doc.setCursor(cursor)
      },
      { immediate: true }
    );
    this.editor.on("change", (editor, { origin }) => {
      if (origin !== 'setValue') {
        this.$emit("input", editor.getValue());
      }
    });
  },
  template: `
    <textarea ref="editor" />
  `,
  css: `
  .CodeMirror {
    font-family: var(--font-mono);
    padding: calc(var(--base2) * 0.8);
    font-size: calc(var(--base) * 1.85);
    line-height: calc(var(--base) * 2.75);
    height: auto;
    overflow-y: hidden;
    overflow-x: auto;
  }
  .CodeMirror-linenumber {
    opacity: 0.2;
    padding-right: var(--base);
  }
  .CodeMirror-line {
    color: #87a0ab !important;
  }
  .CodeMirror .cm-header  {
    color: #f0f3f5;
    font-weight: normal;
  }
  .CodeMirror .cm-tag {
    color: #58b2e9;
  }
  .CodeMirror .cm-strong {
    font-weight: normal;
    color: #f0f3f5;
  }
  .CodeMirror .cm-em {
    color: #f0f3f5;
  }
  .CodeMirror .cm-strong.cm-em {
    font-weight: normal;
    font-style: normal;
    color: var(--yellow);
  }
  `
};
