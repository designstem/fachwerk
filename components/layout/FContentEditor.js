import Css from "../Css.js";

export default {
  mixins: [Css],
  props: {
    content: { default: "", type: String },
    autosaveId: { default: "0", type: String }
  },
  data: function() {
    return {
      innerContent: this.content,
      changed: false,
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
    document.addEventListener("keydown", e => {
      if (e.altKey && e.keyCode === 70) { // f
        e.preventDefault()
        this.fullscreen = !this.fullscreen
      }
    });
  },
  template: `
  <div class="f-content-editor">
    <div v-if="!fullscreen" class="f-content-editor--editor" style="position: relative;">
      <f-editor
        v-model="innerContent"
        style="position: absolute; top: 0, right: 0, bottom: 0, left: 0"
      />
      <div
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
    <div class="f-content-editor--preview">
      <slot :content="innerContent">
        <f-content-slides :content="innerContent" :autosave-id="autosaveId" />
      </slot> 
    </div>
  </div>
  `,
  css: `
  .f-content-editor {
    display: flex;
    min-height: 100vh;
  }
  .f-content-editor--editor {
    width: 400px;
  }
  .f-content-editor--preview {
    flex: 1;
  }
  @media (max-width: 800px) {
    .f-content-editor {
      display: block;
      min-height: inherit;
    }
    .f-content-editor--editor {
      width: inherit;
      min-height: 20rem;
    }
  }
  `
}