import { Init } from "../mixins.js";
import * as components from "../components.js";
import { kebabCase, titleCase, utilsDocs } from "../utils.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

import menu from "./menu.js";

new Vue({
  mixins: [Init],
  el: "#app",
  data: function() {
    return {
      content: "",
      wide: false,
      activeIndex: [0, 0],
      previews: [components.FContentDocument, components.FContentSlides],
      activePreview: 0
    };
  },
  computed: {
    menuItems() {
      return menu
        .map(m => {
          m.items = m.items.map(i => {
            i.title = i.component ? `${kebabCase(i.component)}` : i.title;
            return i;
          });
          return m;
        })
        .concat(
          Object.entries(utilsDocs()).map(([tag, items]) => {
            return {
              title: `🍴${titleCase(tag)} utilities`,
              utils: true,
              tag,
              items: Object.keys(items).map(i => ({ title: i }))
            };
          })
        );
    },
    activeMenu() {
      return this.menuItems[this.activeIndex[0]].items[this.activeIndex[1]];
    }
  },
  methods: {
    getComponents(tag) {
      return sortedComponents
        .map(c => Object.entries(c)[0])
        .filter(c => c[1].tag == tag)
        .map(c => ({ title: kebabCase(c[0]), name: c[0] }));
    },
    propsTable(props) {
      return Object.entries(props).map(p => ({
        Name: `\`${p[0]}\``,
        Default: p[1].default ? `\`${p[1].default}\`` : "",
        Type: `\`${
          Array.isArray(p[1].default) ? "array" : typeof p[1].default
        }\``,
        Description: p[1].description ? `${p[1].description}` : ""
      }));
    },
    cssTable(props) {
      return Object.entries(props).map(([key, value]) => ({
        Name: `\`${key}\``,
        Value: `\`${value.default}\``,
        Description: value.description ? `${value.description}` : ""
      }));
    },
    generateContent(name, c) {
      return `## ${kebabCase(name)}
${c.description ? c.description : ""}
${c.example ? c.example.trim() : ""}

${c.props ? `<br><br>\n\n#### Props` : ""}

${
        c.props
          ? `<f-table :rows='${JSON.stringify(
              this.propsTable(c.props),
              null,
              2
            ).replace(/'/g, '\\"')}'
              style="--lightblue: transparent;"
            />`
          : ""
      }

${c.cssprops ? `\n\n<br>\n\n#### CSS variables` : ""}

${
        c.cssprops
          ? `<f-table :rows='${JSON.stringify(
              this.cssTable(c.cssprops),
              null,
              2
            )}' style="--lightblue: transparent" />`
          : ""
      }

<br>

#### Import

Component can be imported using Javascript import:
  
    import { ${name} } from 'https://designstem.github.io/framework/framework.js'
    
    Vue.component('${name}', ${name})

Alternatively you can import all components in one go:

    import * as components from "https://designstem.github.io/framework/framework.js";
    
    for (const name in components) {
      Vue.component(name, components[name])
    }

      `;
    },
    generateUtils(name, content) {
      return `## ${name}

${content}

#### Import

Function can be imported using Javascript import:

    import { ${name} } from 'https://designstem.github.io/framework/utils.js'

`;
    }
  },
  mounted() {
    this.$watch(
      "activeMenu",
      activeMenu => {
        if (activeMenu.file) {
          fetch(activeMenu.file)
            .then(res => res.text())
            .then(content => {
              this.content = content;
              this.activePreview = activeMenu.preview;
              this.wide = activeMenu.wide;
            });
        }

        if (activeMenu.component) {
          this.content = this.generateContent(
            activeMenu.component,
            components[activeMenu.component]
          );
          this.activePreview = activeMenu.preview;
          this.wide = activeMenu.wide;
        }

        if (this.menuItems[this.activeIndex[0]].utils) {
          this.content = this.generateUtils(
            activeMenu.title,
            utilsDocs()[this.menuItems[this.activeIndex[0]].tag][
              activeMenu.title
            ].trim()
          );
          this.activePreview = 0;
          this.wide = false;
        }

        // Components

        // if (this.menuItems[activeIndex[0]].component) {
        //   this.content = this.generateContent(
        //     this.menuItems[activeIndex[0]].items[activeIndex[1]].name,
        //     sortedComponents
        //       .map(c => Object.entries(c)[0])
        //       .filter(
        //         c =>
        //           c[0] ==
        //           this.menuItems[activeIndex[0]].items[activeIndex[1]].name
        //       )
        //       .map(c => c[1])[0]
        //   );
        //   this.activePreview = 0;
        //   this.wide = false;
        // }

        // if (this.menuItems[activeIndex[0]].component) {
        //   this.content = this.generateContent(
        //     this.menuItems[activeIndex[0]].items[activeIndex[1]].name,
        //     sortedComponents
        //       .map(c => Object.entries(c)[0])
        //       .filter(
        //         c =>
        //           c[0] ==
        //           this.menuItems[activeIndex[0]].items[activeIndex[1]].name
        //       )
        //       .map(c => c[1])[0]
        //   );
        //   this.activePreview = 0;
        //   this.wide = false;
        // }

        // Utils

        // if (this.menuItems[activeIndex[0]].utils) {
        //   this.content = this.generateUtils(
        //     this.menuItems[activeIndex[0]].items[activeIndex[1]].title,
        //     utilsDocs()[this.menuItems[activeIndex[0]].tag][
        //       this.menuItems[activeIndex[0]].items[activeIndex[1]].title
        //     ].trim()
        //   );
        //   this.activePreview = 0;
        //   this.wide = false;
        // }
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
        <a href="https://github.com/designstem/framework">Github</a>
      </div>
      <f-icon-github />
  </header>

  <f-theme class="grid" style="--gap: 0; --cols: 200px 1fr; --rows:400vh;">

    <f-menu
      style="overflow-y: auto"
      :items="menuItems"
      v-model="activeIndex"
    />

    <f-content-editor
      v-if="!wide"
      :content="content"
      :type="['document','slides'][activePreview]"
    />

    <f-content
      v-if="wide"
      :type="['document','slides'][activePreview]"
      :content="content"
    />

  </f-theme>

</div>
  `
});
