export default {
  props: {
    rootSrc: { default: '.', type: String },
    docsSrc: { default: './docs', type: String }
  },
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
    <!-- en space -->
    <div><a class="quaternary" :href="rootSrc">Fachwerk</a></div>
    <div><a class="quaternary" :href="docsSrc">Documentation</a></div>
    <div><a class="quaternary" href="https://designstem.github.io/fachwerk_example" target="_blank">Playground <f-external-icon /></a></div>
    <div><a class="quaternary" href="https://designstem.github.io/projects" target="_blank">Example projects <f-external-icon /></a></div>
    <div><a class="quaternary" href="https://github.com/designstem/fachwerk" target="_blank">Github <f-external-icon /></a></div>
    <f-github-icon />
</f-theme>
`
};
