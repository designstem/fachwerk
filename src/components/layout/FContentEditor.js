import { store } from "../../../vendor.js"
import { Css } from "../../../mixins.js";

export default {
  mixins: [Css],
  description: `
Creates a code editor with a live preview.

<f-content-editor content="### Hello World" />
  `,
  props: {
    content: { default: "", type: String },
    type: {
      default: "slides",
      type: String,
      description:
        "Content type, can be a linear `document` or a paginated `slides`"
    },
    advanced: {
      default: true,
      type: [Boolean, Number, String]
    },
    preview: {
      default: false,
      type: [Boolean, Number, String]
    },
    saveId: {
      default: "1",
      type: String
    }
  },
  data: () => ({
    innerContent: "",
    state: "idle",
    labels: { idle: "Save locally", saving: "Saving...", saved: "● Saved locally" },
    timeout: null
  }),
  methods: {
    handleSave() {
      store.set(`content-editor-${this.saveId}`, this.innerContent);
      this.state = "saving";
      this.timeout = setTimeout(() => (this.state = "saved"), 500);
    },
    handleReset() {
      store.remove(`content-editor-${this.saveId}`);
      this.innerContent = this.content;
      this.state = "idle";
    }
  },
  mounted() {
    this.$watch(
      "content",
      content => {
        const stored = store.get(`content-editor-${this.saveId}`);
        this.innerContent = stored ? stored : content;
        this.state = stored ? 'saved' : 'idle';
      },
      { immediate: true }
    );
    if (this.$global) {
      this.$global.$on("save", () => this.handleSave());
      this.$global.$on("reset", () => this.handleReset());
    }
  },
  unmounted() {
    clearTimeout(this.timeout);
  },
  template: `
  <div class="content-editor">
    <div v-if="!preview" class="editor">
      <div class="toolbar">
        <div>
          <div
            v-if="state == 'saved' || state == 'saving'"
            class="editor-button"
            style="opacity: 0.3"
            @click="handleReset"
          >Reset to original</div>&nbsp;</div>
        <div
          @click="handleSave"
          class="editor-button"
          :style="{ opacity: state == 'saved' ? 1 : 0.5}"
        >{{ labels[state] }}</div>
      </div>
      <f-editor
        class="basic"
        v-if="!advanced"
        v-model="innerContent"
      />
      <f-advanced-editor
        v-if="advanced"
        v-model="innerContent"
        style="height: 100vh;"
      />
    </div>
    <div
      class="preview"
      :style="{
        '--content-padding': preview ? '' : 'var(--base4)',
        '--content-base': preview ? '' : 'var(--base)'
      }"
    >
      <slot :content="innerContent">
        <f-content
          :content="innerContent"
          :type="type"
        />
      </slot> 
    </div>
  </div>
  `,
  cssprops: {
    "--content-editor-min-height": {
      default: "auto",
      description: "Editor minimum height"
    }
  },
  css: `
  .content-editor {
    display: flex;
  }
  .content-editor > .editor {
    flex: 1;
  }
  .content-editor > .editor .basic {
    min-height: var(--content-editor-min-height);
  }
  .content-editor > .editor .CodeMirror {
    min-height: var(--content-editor-min-height);
  }
  .content-editor > .preview {
    flex: 1;
  }
  .content-editor .toolbar {
    height: calc(var(--base) * 3.5);
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: flex-start;
    background: var(--paleblue);
  }
  .content-editor .editor-button {
    border: none;
    background: none;
    font-size: calc(var(--base) * 1.75);
    font-family: var(--font-sansserif);
    font-weight: normal;
    color: var(--white);
    padding: var(--base) calc(var(--base) * 1.75) 0 calc(var(--base) * 1.75);
    cursor: pointer;
  }
  @media (max-width: 800px) {
    .content-editor {
      flex-direction: column-reverse;
    }
  }
  `
};
