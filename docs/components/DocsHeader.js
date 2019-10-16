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
    v-if="show"
    theme="dark"
    style="
      display: flex;
      width: 100%;
      align-items: center;
      border-bottom: 1px solid var(--darkergray);
      height: var(--base8);
      padding: 0 var(--base2);
      overflow: auto;
      white-space: nowrap;
  ">
    <!-- en space -->
    <div><a class="quaternary" :href="rootSrc">Fachwerk</a></div>
    <div><a class="quaternary" :href="docsSrc">Documentation</a></div>
    <div><a class="quaternary" href="https://designstem.github.io/fachwerk_example" target="_blank">Playground <f-external-icon /></a></div>
    <div><a class="quaternary" href="https://designstem.github.io/projects" target="_blank">Example projects <f-external-icon /></a></div>
    <div><a class="quaternary" href="https://github.com/designstem/fachwerk" target="_blank">Github <f-external-icon /></a></div>
</f-theme>
`
};
