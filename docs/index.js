import { Init, Css } from "../mixins.js";
import * as components from "../components.js";
import * as utils from "../utils.js";
const { kebabCase, titleCase, flatten } = utils;

import * as colors from "../src/utils/colors.js";
import * as math from "../src/utils/math.js";
import * as trig from "../src/utils/trig.js";
import * as string from "../src/utils/string.js";
import * as array from "../src/utils/array.js";

const utilsHelp = [{ colors, math, trig, string, array }].map(g =>
  Object.entries(g).map(([group, module]) => [
    group,
    Object.entries(module)
      .filter(([key, value]) => key.endsWith("_help"))
      .map(([key, value]) => [key.replace('_help',''),value()])
  ])
);

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
      activeIndex: [0, 0],
      menu: 0,
      preview: 0,
      theme: 0
    };
  },
  computed: {
    menuItems() {
      return menu.map(m => {
        m.items = m.items.map(i => {
          i.title = i.component ? `${kebabCase(i.component)}` : i.title;
          i.disabled = !!i.tbd;
          return i;
        });
        return m;
      })
      .concat(flatten(utilsHelp.map(g => {
        return g.map(([group, items]) => {
          return {
            title: `🍴${titleCase(group)} utilities`,
            utils: true,
            items: items.map(([title,content]) => ({ title, content }))
          }
        })
      })))
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
        Name: `\`${kebabCase(p[0])}\``,
        Default: p[1].default
          ? `\`${String(p[1].default).replace(/'primary'/, '"primary"')}\``
          : "",
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
            activeMenu.content.trim()
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
      v-on:keydown="preview = 1 - preview"
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
          :buttons="['Menu','No Menu']"
          v-model="menu"
        ></f-buttons>
        <f-buttons
          :buttons="['Edit','Preview']"
          v-model="preview"
        ></f-buttons>
        <f-buttons
          :buttons="['Light','Dark','Yellow']"
          v-model="theme"
        ></f-buttons>
      </f-inline>
    </div>
  </header>

  <main style="min-height: 100vh">

  <f-theme
    :theme="['light','dark','yellow'][theme]"
    class="docs"
  >
    <f-menu
      v-if="!menu"
      :items="menuItems"
      v-model="activeIndex"
      class="menu"
    />

    <f-content-editor
      class="editor"
      :content="content"
      :preview="preview"
      :save-id="activeIndex.join('-')"
    />
    
  </f-theme>

  </main>

  <f-keyboard alt character="p" @keydown="preview = 1 - preview" />
  <f-keyboard alt character="s" @keydown="send('save')" />
  <f-keyboard alt character="left" @keydown="send('prev')" />
  <f-keyboard alt character="right" @keydown="send('next')" />

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
