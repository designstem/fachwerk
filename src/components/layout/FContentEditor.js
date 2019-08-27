import { Vue, Css, store, get, set, log } from "../../../fachwerk.js";

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
      default: "fachwerk",
      type: String
    },
  },
  data: () => ({
    innerContent: "",
    state: "idle",
    labels: { idle: "Save locally", saving: "Saving...", saved: "● Saved locally" },
    timeout: null
  }),
  methods: {
    get,
    set,
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
      "preview",
      preview => {
        Vue.set(
          this.$global.$data.state,
          'preview',
          preview
        );
      },
      { immediate: true }
    );
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
    Vue.prototype.$global.$on("edit", () => (this.preview = !this.preview));
  },
  unmounted() {
    clearTimeout(this.timeout);
  },
  /* @TODO remove reset button position hack */
  template: `
  <div style="position: relative; width: 100%;">
    <f-keyboard
      alt
      character="s"
      @keydown="handleSave"
    />
    <f-keyboard
      alt
      character="e"
      @keydown="set('preview', !get('preview', false))"
    />
    <portal v-if="get('preview', false)" to="topright" :order="-1">
      <a title="Open editor Alt + e" class="quaternary" @click="set('preview', false)">Edit</a>
    </portal>
    <portal v-if="!get('preview', false)" to="topright" :order="-1">
      <a title="Close editor Alt + e" class="quaternary" @click="set('preview', true)">View</a>
    </portal>
    <div class="content-editor">
      <div v-if="!get('preview', false)" class="editor">
        <div class="toolbar">
          <a
            v-if="state == 'saved' || state == 'saving'"
            class="quaternary"
            style="opacity: 0.3; margin-right: var(--base);"
            @click="handleReset"
          >
            Reset to original
          </a>
          <a
            @click="handleSave"
            class="quaternary"
            :style="{ display: 'flex', justifyContent: 'flex-end', width: '14ch', opacity: state == 'saved' ? 1 : 0.5}"
          >
            {{ labels[state] }}
          </a>
         
        </div>
        <f-editor
          v-if="!advanced"
          class="basic"
          v-model="innerContent"
        />
        <f-advanced-editor
          v-if="advanced"
          v-model="innerContent"
          style="height: 100vh;"
        />
      </div>
      <div class="preview">
        <f-content
          :content="innerContent"
          :type="type"
          :saveId="saveId"
          :preview="preview"
        />
      </div>
    </div>
  </div>
  `,
  cssprops: {
    "--content-editor-min-width": {
      default: "40vw",
      description: "Editor minimum width"
    },
    "--content-editor-min-height": {
      default: "auto",
      description: "Editor minimum height"
    },
    "--content-editor-scale": {
      default: "1",
      description: "How much to scale content preview when editing"
    }
  },
  css: `
  .content-editor {
    display: flex;
    flex-direction: row;
  }
  .content-editor > .editor {
    flex: 1;
    min-width: var(--content-editor-min-width);
    background: var(--paleblue);
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
    padding: var(--base);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    align-items: flex-start;
    background: var(--paleblue);
  }
  @media (max-width: 800px) {
    .content-editor {
      flex-direction: column-reverse;
    }
  }
  `
};
