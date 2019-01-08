import { Css } from "../../mixins.js";

export default {
  mixins: [Css],
  description: `
Creates a code editor with a live preview.

<f-content-editor content="### Hello World" />
  `,
  props: {
    content: { default: "", type: String },
    type: { default: "slides", type: String, description: 'Content type, can be a linear `document` or a paginated `slides`' }
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
  <div
    class="grid"
    :style="{
      '--cols': '1fr 1fr',
      '--rows': '1fr'
    }">
    <f-markdown-editor
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
  `
};
