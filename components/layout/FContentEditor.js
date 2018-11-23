import Css from "../Css.js";

export default {
  mixins: [Css],
  tag: "Layout",
  description: `
Creates a code editor with live preview and optionallt auto-saves the content to users browser.

⌨️ Allows to display and hide the code editor using  <kbd>Alt</kbd><kbd>F</kbd>.

Technically it uses \`localStorage\` and uses \`:autosave-id\` to make sure the saved data do not go to conflict with other code editor instances on the page.
`,
  example: `
<f-theme theme="blue">
  <f-content-editor content="## Hello\n---\n## World" />
</f-theme>
  `,
  props: {
    content: { default: '', type: String },
    autosave: { default: true, type: Boolean },
    autosaveId: { default: "0", type: String },
  },
  data: function() {
    return {
      innerContent: '',
      changed: true,
      fullscreen: false
    };
  },
  methods: {
    handleReset() {
      this.innerContent = this.content;
      Vue.nextTick(() => (this.changed = false));
    }
  },
  mounted() {
    this.$watch(
      "content",
      content => {
        this.innerContent = content;
      },
      { immediate: true }
    );
    if (this.autosave) {
      const savedContent = JSON.parse(
        localStorage.getItem(`f-content-editor-${this.autosaveId}`)
      );
      if (savedContent) {
        this.innerContent = savedContent.content;
        if (savedContent.content !== this.content) {
          this.changed = true;
        }
      }
      this.$watch("innerContent", innerContent => {
        localStorage.setItem(
          `f-content-editor-${this.autosaveId}`,
          JSON.stringify({ content: innerContent })
        );
        this.changed = true;
      });
    }

    document.addEventListener("keydown", e => {
      if (e.altKey && e.keyCode === 70) {
        // f
        e.preventDefault();
        this.fullscreen = !this.fullscreen;
      }
    });

  },
  template: `
  <div class="f-content-editor">
    <div v-if="!fullscreen" style="position: relative;">
      <f-editor
        v-model="innerContent"
        style="position: absolute; top: 0, right: 0, bottom: 0, left: 0"
      />
      <div
        v-if="autosave"
        style="
          cursor: pointer;
          position: absolute;
          top: calc(var(--base) * 1.5);
          right: calc(var(--base) * 1.5);
          font-size: 0.8rem;
          color: var(--primary);
        "
        @click="handleReset"
      >
        {{ changed ? '↺' : ''}}
      </div>
    </div>
    <div>
      <slot :content="innerContent">
        <f-content-slides :content="innerContent" :autosave-id="autosaveId" />
      </slot> 
    </div>
  </div>
  `,
  css: `
  :root {
    --f-content-editor-cols: 1fr 1fr;
    --f-content-editor-gap: var(--base3);
  }
  .f-content-editor {
    display: grid;
    grid-template-columns: var(--f-content-editor-cols);
    grid-gap: var(--f-content-editor-gap);
  }
  @media (max-width: 800px) {
    .f-content-editor {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-row: none;
    }
  }
  `
};
