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
    <div>
      <button @click="handleSave">Local save</button>
      <button v-if="saved" @click="handleReset">Reset to original</button>
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
  .content-editor > * {
    flex: 1;
  }
  @media (max-width: 800px) {
    .content-editor {
      flex-direction: column-reverse;
    }
  }
  `
};
