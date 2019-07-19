export default {
  template: `
<f-fetch src="../index.md" v-slot="{ value: content }">
  <f-content-editor save-id="home" :content="content" />
</f-fetch>`
};