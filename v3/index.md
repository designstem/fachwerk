| padding: 5vw 10vw

<f-inline style="--inline-justify: space-between">
<f-inline style="--inline-gap: var(--base2)">
  <a href="../v3">Fachwerk</a>
  <a href="../v2">Documentation</a>
  <a href="https://designstem.github.io/scenarios" target="_blank">Example projects</a>
  <a href="https://github.com/designstem/fachwerk" target="_blank">Github</a>
</f-inline>
<f-github-icon />
</f-inline>

### &nbsp;

# Like <var>systematisch</var>?<br>Try Fachwerk.

<big><big>A **VueJS** and **Markdown** based framework for creating interactive learning materials.</big></big>

---

| padding: 5vw 10vw
| background: var(--lightergray)

<caption>Markdown, with layouts</caption>

<big>It's easy to do another Markdown live playground but what about layouts?<br>With a simple separator `-` and number-based layouts you can arrange the content in any way you like</big>

<f-fetch src="../docs/examples/content.md" v-slot="{ value: content }">
  <f-content-editor type="document" :content="content" style="--background: white; box-shadow: inset var(--border-width) var(--border-width) 0px var(--lightergray); background: white" />
</f-fetch>

---

| padding: 5vw 10vw
| background: var(--lightergray)

<f-inline>
  <caption>2D vector galore</caption>
  <button>2D Docs</button>
</f-inline>

<big>Fachwerk has a wide range of 2D components to use. They are built on top of `<svg>` but there also bitmap `<canvas>` available</big>

<f-fetch src="../docs/examples/2d.md" v-slot="{ value: content }">
  <f-content-editor type="document" :content="content" style="--background: white; box-shadow: inset var(--border-width) var(--border-width) 0px var(--lightergray); background: white" />
</f-fetch>