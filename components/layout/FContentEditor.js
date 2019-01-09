import { Css } from "../../mixins.js";

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
      default: false, type: [Boolean,Number,String]
    }
  },
  data: () => ({ innerContent: "" }),
  mounted() {
    this.$watch(
      "content",
      content => {
        this.innerContent = content;
      },
      { immediate: true }
    );
  },
  template: `
  <div class="content-editor">
    <f-editor
      v-if="!advanced"
      v-model="innerContent"
    />
    <f-advanced-editor
      v-if="advanced"
      v-model="innerContent"
    />
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
