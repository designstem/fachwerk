import { Vue, Css, store } from "../../../fachwerk.js";

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
    },
    menu: {
      default: true,
      type: [Boolean, Number, String]
    },
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
  },
  unmounted() {
    clearTimeout(this.timeout);
  },
  /* @TODO remove reset button position hack */
  template: `
  <div style="position: relative">
  <div
    v-if="preview"
    style="
      position: absolute;
      z-index: 10000;
      left: 40px;
      top: 12px;
    "
  >
      <a slot="button" title="Alt + E" class="quaternary" @click="$emit('togglePreview')">Edit</a>
    <slot />
  </div>
  <div class="content-editor">
    <div v-if="!preview" class="editor">
      <div class="toolbar" :style="{ padding: menu ? '12px 10px 0 40px' : '7px 10px 0 0' }">
      <div
        v-if="menu"
        class="quaternary"
        style="opacity: 0.5"
        @click="$emit('togglePreview')"
      >Close</div>
      <div>
          <div
            v-if="state == 'saved' || state == 'saving'"
            class="quaternary"
            style="opacity: 0.3"
            @click="handleReset"
          >
            Reset to original
          </div>
          &nbsp;
        </div>
        <div
          @click="handleSave"
          class="quaternary"
          :style="{ opacity: state == 'saved' ? 1 : 0.5}"
        >{{ labels[state] }}</div>
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
    <div
      class="preview"
      :style="{
        '--content-base': preview ? '' : 'var(--base) * var(--content-editor-scale)',
        '--content-padding': preview ? '' : 'calc(var(--base) * 3)',
        '--content-gap': preview ? '' : 'calc(var(--base) * 2)'
      }"
    >
      <f-content
        :content="innerContent"
        :type="type"
      />
    </div>
  </div>
  </div>
  `,
  cssprops: {
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
    /* @TODO Fix this padding */
    height: calc(var(--base) * 7);
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
