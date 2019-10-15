export default {
  data: () => ({ show: true }),
  mounted() {
    this.$global.$on("type", type => (this.show = type == "document"));
  },
  template: `
  <f-theme
    v-show="show"
    theme="dark"
    class="grid"
    style="
      width: 100%;
      --cols: auto auto auto auto auto 1fr;
      --gap: var(--base);
      --mobile-cols: 1fr 1fr;
      --mobile-gap: 0;
      --rows: auto;
      align-items: center;
      padding: var(--base2);
  ">
    <div><a class="quaternary" href="..">Fachwerk</a></div>
    <div><a class="quaternary" href="../docs">Documentation</a></div>
    <div><a class="quaternary" href="https://designstem.github.io/fachwerk_example" target="_blank">Playground</a></div>
    <div><a class="quaternary" href="https://designstem.github.io/projects" target="_blank">Example projects</a></div>
    <div><a class="quaternary" href="https://github.com/designstem/fachwerk" target="_blank">Github</a></div>
    <f-github-icon />
</f-theme>
`
};
