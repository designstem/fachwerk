// import { fachwerk } from "../src/fachwerk.js";

// fachwerk({
//   editor: "show",
//   menu: "none",
//   type: "document"
// });

import { Vue, components, parseContent } from "../fachwerk.js";

export function fachwerk(c = {}) {
  const config = {
    el: "#fachwerk",
    src: "./index.md",
    title: "Fachwerk",
    editor: "hide",
    menu: "hide",
    type: "document",
    theme: "light",
    style: {},
    components: {},
    utils: {},
    ...c
  };
  for (const name in components) {
    Vue.component(name, components[name]);
  }
  for (const name in config.components) {
    Vue.component(name, config.components[name]);
  }
  Vue.mixin({ methods: { ...config.utils } });

  Vue.config.productionTip = false;
  Vue.prototype.$global = new Vue({ data: { state: {} } });

  const FContentEditor2 = {
    props: {
      edit: { default: "hide", type: String },
      menu: { default: "hide", type: String },
      type: { default: "document", type: String }
    },
    data: () => ({
      currentContent: "",
      currentEdit: true,
      currentMenu: false,
      currentType: "document"
    }),
    mounted() {
      this.$global.$on("menu", () => {
        this.currentMenu = !this.currentMenu;
      });
      this.$global.$on("edit", () => {
        this.currentEdit = !this.currentEdit;
      });
      this.$global.$on("type", () => {
        this.currentType =
          this.currentType === "document" ? "slider" : "document";
      });
    },
    computed: {
      gridStyle() {
        const menuCol = this.currentMenu ? "200px" : "55px";
        const editCol = this.currentEdit ? "1fr" : "";
        const contentCol = "1fr";
        return [menuCol, editCol, contentCol].join(" ");
      }
    },
    template: `
    <div class="grid" :style="{'--cols': gridStyle, '--gap': 0}">
      <f-menu2 :menu="currentMenu" :content="currentContent" />
      <div v-if="currentEdit">
        <f-editor-header2 v-model="currentContent" />
        <f-advanced-editor v-model="currentContent" />
      </div>
      <div>
        <f-content-header2 :edit="currentEdit" :content="currentContent" />
        <f-content2 :content="currentContent" />
      </div>
      <pre style="position: fixed; bottom: 0; right: var(--base2);">
currentEdit: {{ currentEdit }}
currentMenu: {{ currentMenu }}
currentType: {{ currentType }}
gridStyle: {{ gridStyle }}</pre>
    </div>
    `
  };

  const FMenu2 = {
    props: {
      content: { default: "", type: String },
      menu: { default: false, type: Boolean }
    },
    computed: {
      currentContent() {
        return parseContent(this.content).filter(c => c.chapter || c.section)
      }
    },
    template: `
    <div style="
      background: var(--lightergray);
      height: 100vh;
      padding: var(--base);
    ">
      <a class="quaternary" @click="$global.$emit('menu')"><f-menu-icon /></a>
      <div v-if="menu">
        <div v-for="(c, i) in currentContent">
          <h5
            v-if="c.chapter"
            style="
              padding: var(--base) var(--base) var(--base) var(--base2);
              margin: var(--base2) 0 0 0;
            "
          >
            {{ c.chapter }}
          </h5>
          <h5
            style="
              display: block;
              cursor: pointer;
              padding-left: 1ch;
              margin: 0;
              padding: var(--base) var(--base) var(--base) var(--base3);
              font-Weight: normal;
            "
          >
            {{ c.section }}
          </h5>
        </div>
      </div>
    </div>
    `
  };

  /*

  import { parseContent, goto, get, set } from "../../../fachwerk.js";

export default {
  props: {
    src: { default: "", type: [String, Array] },
    title: { default: "", type: String }
  },
  methods: { parseContent, goto, get, set },
  template: `
    <f-fetch :src="src" v-slot="{ value: content }">
      <div>
      <div v-for="(c, i) in parseContent(content).filter(c => c.chapter || c.section)">
        <h5
          v-if="c.chapter"
          style="
            padding: var(--base) var(--base) var(--base) var(--base2);
            margin: var(--base2) 0 0 0;
          "
        >
          {{ c.chapter }}
        </h5>
        <h5
          style="
            display: block;
            cursor: pointer;
            padding-left: 1ch;
            margin: 0;
            padding: var(--base) var(--base) var(--base) var(--base3);
            font-Weight: normal;
          "
          :style="{
            color: get('section','') == c.section ? 'var(--background)' : 'var(--primary)',
            background: get('section','') == c.section ? 'var(--lightergray)' : 'var(--transparent)',
          }"
          @click="set('section', c.section); goto(c.section)"
        >
          {{ c.section }}
        </h5>
      </div>
    </div>
    </f-fetch>
  `
};

  */

  const FEditorHeader2 = {
    props: {
      value: { default: "", type: String }
    },
    mounted() {
      this.$emit(
        "input",
`
| section: hello

Fachwerk is a Javascript framework for creating interactive learning materials in the browser.

---

| section: world

Content can be authored in a Markdown format, with custom additions such as dynamic layouts, interactivity and wide range of HTML-like components.
`
      );
    },
    template: `
    <div style="
      height: var(--base6);
      padding: 0 var(--base);
      background: var(--paleblue);
      display: flex;
      align-items: center;
      justify-content: space-between;
    ">
      <a class="quaternary" @click="$global.$emit('edit')"><f-close-icon /></a>
    </div>
    `
  };

  const FContentHeader2 = {
    props: {
      content: { default: "", type: String },
      edit: { default: false, type: Boolean }
    },
    template: `
    <div style="
      height: var(--base6);
      padding: 0 var(--base);
      background: var(--lightestgray);
      display: flex;
      align-items: center;
      justify-content: space-between;
    ">
      <a v-if="!edit" class="quaternary" @click="$global.$emit('edit')">Edit</a>
    </div>
    `
  };

  const FContent2 = {
    props: {
      content: { default: "", type: String },
      type: { default: "document", type: String }
    },
    template: `
    <div style="display: flex; justify-content: center;">
    <p
      :style="{
        padding: 'var(--base5)',
        maxWidth: type == 'document' ? '600px' : 'auto'
      }"
      v-html="content"
    />  
    </div>
    `
  };

  Vue.component("FContentEditor2", FContentEditor2);
  Vue.component("FMenu2", FMenu2);
  Vue.component("FEditorHeader2", FEditorHeader2);
  Vue.component("FContent2", FContent2);
  Vue.component("FContentHeader2", FContentHeader2);

  new Vue({
    components: {
      FContentEditor2
    },
    el: config.el,
    data: {
      config
    },
    template: `
    <f-content-editor2
      :editor="config.editor"
      :menu="config.menu"
      :type="config.type"
    />
    `
  });
}

fachwerk();
