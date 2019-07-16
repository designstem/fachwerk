export default {
  template: `
<f-fetch src="../index.md" v-slot="{ value: content }">
  <f-content-editor :content="content" />
</f-fetch>`
};