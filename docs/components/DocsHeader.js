export default {
  template: `
  <div
    class="grid"
    style="
      width: 100%;
      --cols: auto auto auto auto 1fr auto;
      --mobile-cols: 1fr 1fr;
      --mobile-gap: 0;
      --rows: auto;
      align-items: center;
      padding: var(--base2);
      background: var(--yellow);
      border-bottom: 2px solid var(--primary);
  ">
    <div><a href="..">Fachwerk</a></div>
    <div><a href="../docs">Documentation</a></div>
    <div><a href="https://designstem.github.io/fachwerk_example" target="_blank">Playground</a></div>
    <div><a href="https://designstem.github.io/projects" target="_blank">Example projects</a></div>
    <div><a href="https://github.com/designstem/fachwerk" target="_blank">Github</a></div>
    <f-github-icon />
</div>
`
};
