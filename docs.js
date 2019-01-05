import * as components from "./framework.js";
import { sortedComponents } from "./framework.js";
import { kebabCase, titleCase, utilsDocs } from "./utils.js";

import Init from "./components/Init.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

new Vue({
  mixins: [Init],
  el: "#app",
  data: function() {
    return {
      files: [
        {
          title: "🗺️Guides",
          files: true,
          items: [
            {
              title: "Getting started",
              file: "./content/guides/gettingstarted.md",
              preview: 0
            },
            {
              title: "Markdown basics",
              file: "./content/guides/markdown.md",
              preview: 0
            },
            {
              title: "Interactive slides",
              file: "./content/guides/interactive.md",
              preview: 1
            },
            {
              title: "Component communication",
              file: "./content/guides/communication.md",
              preview: 0
            },
            {
              title: "Math basics",
              file: "./content/guides/math.md",
              preview: 0
            },
            {
              title: "Drawing the spirals",
              file: "./content/guides/spirals2.md",
              preview: 1
            },
            {
              title: "Various experiments",
              file: "./content/guides/experiments.md",
              preview: 0
            },
            {
              title: "Building patterns",
              file: "./content/guides/patterns.md",
              preview: 0
            }
          ]
        },
        {
          title: "📦2D graphics",
          component: true,
          tag: "2D",
          items: this.getComponents("2D")
        },
        {
          title: "📦2D patterns",
          component: true,
          tag: "2D repeat",
          items: this.getComponents("2D repeat")
        },
        {
          title: "📦3D graphics",
          component: true,
          tag: "3D",
          items: this.getComponents("3D")
        },
        {
          title: "📦Dynamic data",
          component: true,
          tag: "Data",
          items: this.getComponents("Data")
        },
        {
          title: "📦Transitions",
          component: true,
          tag: "Transitions",
          items: this.getComponents("Transitions")
        },
        {
          title: "📦Content writing",
          component: true,
          tag: "Content",
          items: this.getComponents("Content")
        },
        {
          title: "📦Layout building",
          component: true,
          tag: "Layout",
          items: this.getComponents("Layout")
        },
        {
          title: "💄Styles",
          files: true,
          items: [
            {
              title: "Typography",
              file: "./content/styles/typography.md",
              preview: 0
            },
            {
              title: "Colors",
              file: "./content/styles/colors.md",
              preview: 0
            },
            {
              title: "Controls",
              file: "./content/styles/controls.md",
              preview: 0
            },
            {
              title: "Grid",
              file: "./content/styles/grid.md",
              preview: 0
            }
          ]
        }
      ],
      content: "",
      activeItem: [0, 0],
      previews: [components.FContentDocument, components.FContentSlides],
      activePreview: 0
    };
  },
  computed: {
    menuItems() {
      return this.files.concat(
        Object.entries(utilsDocs()).map(u => {
          return {
            title: `🍴${titleCase(u[0])} utilities`,
            utils: true,
            tag: u[0],
            items: Object.keys(u[1]).map(i => ({ title: i }))
          };
        })
      );
    }
  },
  methods: {
    getComponents(tag) {
      return sortedComponents
        .map(c => Object.entries(c)[0])
        .filter(c => c[1].tag == tag)
        .map(c => ({ title: kebabCase(c[0]), name: c[0] }));
    },
    propRows(props) {
      return Object.entries(props).map(p => ({
        Name: `<code>${p[0]}</code>`,
        Default: `<code>${p[1].default}</code>`,
        Type: `<code>${
          Array.isArray(p[1].default) ? "array" : typeof p[1].default
        }</code>`,
        Description: p[1].description ? `${p[1].description}` : ""
      }));
    },
    generateContent(name, c) {
      return `## ${kebabCase(name)}
${c.description ? c.description : ""}
${c.example ? c.example.trim() : ""}

${
        c.props
          ? `<p />

##### Props`
          : ""
      }

${
        c.props
          ? `<f-table :rows='${JSON.stringify(
              this.propRows(c.props),
              null,
              2
            ).replace(/'/g, '\\"')}' style="--lightblue: transparent" />`
          : ""
      }
      `;
    },
    generateUtils(name, content) {
      return `## ${name}

${content}

#### Import

Function can be imported using Javascript imports:

    <script type="module">
      import { ${name} } from 'https://designstem.github.io/framework/utils.js'
    </script>

`;
    }
  },
  mounted() {
    this.$watch(
      "activeItem",
      activeItem => {
        // Markdown files

        if (this.menuItems[activeItem[0]].files) {
          fetch(this.menuItems[activeItem[0]].items[activeItem[1]].file)
            .then(res => res.text())
            .then(content => {
              this.content = content;
              this.activePreview = this.menuItems[activeItem[0]].items[
                activeItem[1]
              ].preview;
            });
        }

        // Components

        if (this.menuItems[activeItem[0]].component) {
          this.content = this.generateContent(
            this.menuItems[activeItem[0]].items[activeItem[1]].title,
            sortedComponents
              .map(c => Object.entries(c)[0])
              .filter(
                c =>
                  c[0] ==
                  this.menuItems[activeItem[0]].items[activeItem[1]].name
              )
              .map(c => c[1])[0]
          );
          this.activePreview = 0;
        }

        // Utils

        if (this.menuItems[activeItem[0]].utils) {
          this.content = this.generateUtils(
            this.menuItems[activeItem[0]].items[activeItem[1]].title,
            utilsDocs()[this.menuItems[activeItem[0]].tag][
              this.menuItems[activeItem[0]].items[activeItem[1]].title
            ].trim()
          );
          this.activePreview = 0;
        }
      },
      { immediate: true }
    );
  },
  template: `
  <div>

  <header>
      <div>
        <a href="https://designstem.github.io/framework">Home</a>&nbsp;&nbsp;&nbsp;
        <a href="https://designstem.github.io/framework/docs.html">Docs</a>&nbsp;&nbsp;&nbsp;
        <a href="https://designstem.github.io/templates">Templates</a>&nbsp;&nbsp;&nbsp;
        <a href="https://designstem.github.io/homepage">Demos</a>&nbsp;&nbsp;&nbsp;
        <a href="https://github.com/designstem/framework">Github</a>
      </div>
      <f-icon-github />
  </header>

    <f-theme class="grid" style="--gap: 0; --cols: 200px 1fr; --rows:400vh;">
    <f-menu
      style="overflow-y: auto"
      :items="menuItems"
      v-model="activeItem"
    />
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
