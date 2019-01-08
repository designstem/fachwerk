import { Init, Css } from "../mixins.js";
import * as components from "../components.js";
import * as utils from "../utils.js";

const { kebabCase, titleCase, utilsDocs } = utils

for (const name in components) {
  Vue.component(name, components[name]);
}

import menu from "./menu.js";

new Vue({
  mixins: [Init, Css],
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
            i.disabled = !!i.tbd;
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
  methods: Object.assign({}, utils, {
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

${c.description ? c.description.trim() : ""}
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
      }<br><br>

#### Import

Component can be imported using Javascript import:
  
    import { ${name} } from 'https://designstem.github.io/fachwerk/components.js'
    
    Vue.component('${name}', ${name})

      `;
    },
    generateUtils(name, content) {
      return `## ${name}

${content}

#### Import

Function can be imported using Javascript import:

    import { ${name} } from 'https://designstem.github.io/fachwerk/utils.js'

`;
    }
  }),
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

        if (activeMenu.tbd) {
          this.content = "# To be written" + Array(100).join("\n");
        }
      },
      { immediate: true }
    );
  },
  template: `
  <div>

  <f-keyboard
      alt
      character="p"
      v-on:keydown="set('preview', 1 - get('preview', 0))"
  ></f-keyboard>

  <header>
      <div>
        <a href="..">Fachwerk</a>&nbsp;&nbsp; 
        <a href=".">Docs</a>&nbsp;&nbsp; 
        <a href="https://github.com/designstem/templates" target="_blank">Templates</a>&nbsp;&nbsp; 
        <a href="https://github.com/designstem/fachwerk" target="_blank">Github</a>
      </div>
      <div>
        <f-inline>
          <f-buttons
            :buttons="['Edit','Preview']"
            :value="get('preview', 0)"
            v-on:input="i => set('preview', i)"
          />
          <f-buttons
            :buttons="['Light','Dark','Yellow']"
            :value="get('theme', 0)"
            v-on:input="i => set('theme', i)"
          />
        </f-inline>
      </div>
  </header>

  <f-theme
    :theme="['light','dark','yellow'][get('theme',0)]"
    class="docs"
  >
    <f-menu
      :items="menuItems"
      v-model="activeIndex"
      class="menu"
    />

    <f-content-editor
      v-if="!get('preview', 0)"
      :content="content"
      type="slides"
      class="editor"
    />

    <f-content
      v-if="get('preview', 0)"
      type="slides"
      :content="content"
      class="editor"
    />

  </f-theme>

  <div class="footer">
    <div>
      <p>
        All code is licenced under
        <a href="https://choosealicense.com/licenses/mit/" rel="licence">
          MIT licence
        </a>.
        All content is licenced under
        <br>
        <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
          Creative Commons Attribution 4.0 International License
        </a>.
      </p>
    </div>
    <img src="../images/erasmus_logo.svg" style="width:240px" />
  </div>
    
</div>
  `,
  css: `
  .docs {
    display: flex;
  }
  .docs .menu {
    width: 200px;
  }
  .docs .editor {
    flex: 1;
  }
  @media (max-width: 800px) {
    .docs .menu {
      width: 100%;
    }
    .docs {
      flex-direction: column-reverse;
    }
  }
  `
});
