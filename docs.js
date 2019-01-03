import * as components from "./framework.js";
import { sortedComponents } from "./framework.js";
import { kebabCase } from "./utils.js";

import Init from "./components/Init.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

new Vue({
  mixins: [Init],
  el: "#app",
  data: () => ({
    contentPages: [
      { title: "Building patterns", file: "./content/patterns.md", preview: 0 },
      { title: "Markdown basics", file: "./content/markdown.md", preview: 0 },
      {
        title: "Interactive slides",
        file: "./content/interactive.md",
        preview: 1
      },
      {
        title: "Component communication",
        file: "./content/communication.md",
        preview: 0
      },
      { title: "Math basics", file: "./content/math.md", preview: 0 },
      {
        title: "Drawing the spirals",
        file: "./content/spirals2.md",
        preview: 1
      },
      {
        title: "Various experiments",
        file: "./content/experiments.md",
        preview: 0
      },
      { title: "Now it is your turn!", file: "./content/empty.md", preview: 0 }
    ],
    content: "",
    activeContent: 0,
    previews: [components.FContentDocument, components.FContentSlides],
    activePreview: 0
  }),
  computed: {
    contentFiles() {
      return this.contentPages.concat(
        ...sortedComponents
          .map(c => Object.keys(c)[0])
          .map(c => ({ title: `<${kebabCase(c)}>`, name: c }))
      );
    }
  },
  methods: {
    propRows(props) {
      console.log(props)
      return Object.entries(props).map(p => ({
        Name: `<code>${p[0]}</code>`,
        Default: `<code>${p[1].default}</code>`,
        Type: `<code>${
          Array.isArray(p[1].default) ? "array" : typeof p[1].default
        }</code>`,
        Description: p[1].description ? `${p[1].description}` : p[1].description
      }));
    },
    generateContent(name, c) {
      return `## &lt;${kebabCase(name)}>
${c.description ? c.description : ''}
${c.example ? c.example.trim() : ''}

${c.props ? `<p />

##### Props` : ''}

${c.props ?
        `<f-table :rows='${JSON.stringify(
          this.propRows(c.props),
          null,
          2
        ).replace(/'/g,'\\"')}' style="--lightblue: transparent" />` : ''}
      ` 
    }
  },
  mounted() {
    this.$watch(
      "activeContent",
      activeContent => {
        if (this.contentFiles[activeContent].file) {
          fetch(this.contentFiles[activeContent].file)
            .then(res => res.text())
            .then(content => {
              this.content = content;
              this.activePreview = this.contentFiles[activeContent].preview;
            });
        }
        if (this.contentFiles[activeContent].name) {
          this.content = this.generateContent(
            this.contentFiles[activeContent].name,
            sortedComponents
              .map(c => Object.entries(c)[0])
              .filter(c => c[0] == this.contentFiles[activeContent].name)
              .map(c => c[1])[0]
          );
          this.activePreview = 0;
        }
      },
      { immediate: true }
    );
  },
  template: `
  <div>
    <header style="background: var(--yellow);">
      <div>
        <a href="https://designstem.github.io/framework">Fachwerk</a>
        → Documentation
      </div>
      <p style="margin: 0;"><kbd>Alt</kbd> + <kbd>F</kbd> for fullscreen, <kbd>Alt</kbd> + <kbd>T</kbd> for dark theme</p>
      <f-buttons :buttons="['As Document','As Slides']" v-model="activePreview" />
    </header>
    <f-theme class="grid" style="--gap: 0; --cols: 200px 3px 1fr; --rows:400vh;">
    <f-menu style="overflow-y: auto" :items="contentFiles.map(c => c.title)" v-model="activeContent" />
    <f-vr />
    <f-content-editor
      :content="content"
      :autosave="false"
    >
      <component slot-scope="data"
        :is="previews[activePreview]"
        :content="data.content"
        base="8px"
        style="--gap: var(--base4);"
      />
    </f-content-editor>
    </f-theme>
</div>
  `
});

//     // propRows(props) {
//     //   return Object.entries(props).map(p => ({
//     //     Name: `<code>${p[0]}</code>`,
//     //     Default: `<code>${p[1].default}</code>`,
//     //     Type: `<code>${
//     //       Array.isArray(p[1].default) ? "array" : typeof p[1].default
//     //     }</code>`
//     //   }))
//     // },
//     generateContent(name, c) {
//       return `## &lt;${name}>
// ${c.description.trim()}

// ${c.example.trim()}

// <f-table :rows="[]" style="--lightblue: transparent" />
//       `
