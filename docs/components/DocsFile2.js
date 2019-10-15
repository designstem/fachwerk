export default {
  props: ["title", "src"],
  template: `
<f-fetch :src="src" v-slot="{ value: content }">
  <f-content-editor2
    type="document"
    menu="none"
    :title="title"
    :content="content"
  />
</f-fetch>`
};
