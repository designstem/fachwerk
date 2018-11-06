export default {
  data: () => ({ content: "" }),
  template: `
  <div style="display: flex">
    <f-editor
      style="
        width: 30vw;
        height: 1000vh;
        overflowY: auto;
        border-radius: 0;
        padding: 1.5rem;
      "
      v-model="content"
    />
    <f-content-document style="flex: 1;" :content="content" />
  </div>
  `
};