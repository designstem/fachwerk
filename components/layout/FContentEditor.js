import { Css } from "../../mixins.js";

export default {
  mixins: [Css],
  description: `
Creates a code editor with a live preview.

<f-content-editor content="### Hello World" />
  `,
  props: {
    content: { default: "", type: String },
    value: { default: "", type: String },
    type: {
      default: "slides",
      type: String,
      description:
        "Content type, can be a linear `document` or a paginated `slides`"
    },
    advanced: {
      default: false, type: [Boolean,Number,String]
    },
    saveId: {
      default: '1', type: String 
    }
  },
  data: () => ({ innerContent: "", saved: false }),
  methods: {
    handleSave() {
      store.set(`content-editor-${this.saveId}`, this.innerContent)
      this.saved = true
    },
    handleReset() {
      store.remove(`content-editor-${this.saveId}`)
      this.innerContent = this.content
      this.saved = false
    }
  },
  mounted() {
    this.$watch(
      "content",
      content => {
        const stored = store.get(`content-editor-${this.saveId}`)
        this.innerContent = stored ? stored : content;
        this.saved = !!stored 
      },
      { immediate: true }
    );
  },
  template: `
  <div class="content-editor">
    <div class="editor">
      <div class="toolbar">
        <button v-if="saved" style="opacity: 0.3" @click="handleReset">Reset to original</button>
        <span v-if="!saved" />
        <button @click="handleSave" :style="{ opacity: saved ? 1 : 0.5}">Local save</button>
      </div>
      <f-editor
        v-if="!advanced"
        v-model="innerContent"
      />
      <f-advanced-editor
        v-if="advanced"
        v-model="innerContent"
      />
    </div>
    <div>
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
    "--content-editor-cols": {
      default: "1fr 1fr",
      description: "Editor colum widths"
    }
  },
  css: `
  .content-editor {
    display: flex;
  }
  .content-editor .toolbar {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    background: var(--paleblue);
  }
  .content-editor button {
    border: none;
    background: none;
    font-size: calc(var(--base) * 1.75);
    font-family: var(--font-sansserif);
    font-weight: normal;
    color: var(--white);
    padding: var(--base) calc(var(--base) * 1.75) 0 calc(var(--base) * 1.75);
  }
  @media (max-width: 800px) {
    .content-editor {
      flex-direction: column-reverse;
    }
  }
  `
};
