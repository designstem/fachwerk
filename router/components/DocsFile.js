export default {
  props: ["title", "src"],
  template: `
<f-fetch :src="src" v-slot="{ value: content }">
  <f-content-editor :content="content" />
</f-fetch>`
};
