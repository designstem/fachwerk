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
    this.editor = CodeMirror(this.$refs.editor, {
      mode: "gfm",
      theme: "material",
      lineWrapping: true,
      viewportMargin: Infinity,
      tabSize: 2,
      lineNumbers: false
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
  <div style="position: relative;">
    <div style="position: absolute; inset: 0;" ref="editor" />
  </div>
  `,
  css: `
  @import url("https://unpkg.com/codemirror/lib/codemirror.css");
  @import url("https://unpkg.com/codemirror/theme/material.css");
  
  .CodeMirror {
    font-family: var(--font-mono);
    padding: var(--base2);
    font-size: calc(var(--base) * 1.85);
    line-height: 1.55em;
    height: inherit;
  }
  .CodeMirror-linenumber {
    opacity: 0.25;
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
    color: var(--yellow);
  }
  `
};
