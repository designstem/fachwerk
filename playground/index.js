// import { fachwerk } from "../src/fachwerk.js";

// fachwerk({
//   editor: "show",
//   menu: "none",
//   type: "document"
// });

import { Vue, components, utils, get, set, slug } from "../fachwerk.js";

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
      <f-menu2 />
      <div v-if="currentEdit">
        <f-editor-header2 v-model="currentContent" />
        <f-advanced-editor v-model="currentContent" />
      </div>
      <div>
        <f-content-header2 :edit="currentEdit" :content="currentContent" />
        <f-content2 :content="currentContent" />
      </div>
      <pre style="position: fixed; bottom: 0; left: var(--base2);">
currentEdit: {{ currentEdit }}
currentMenu: {{ currentMenu }}
currentType: {{ currentType }}
gridStyle: {{ gridStyle }}</pre>
    </div>
    `
  };

  const FMenu2 = {
    template: `
    <div style="
      background: var(--lightergray);
      height: 100vh;
      padding: var(--base);
    ">
      <a class="quaternary" @click="$global.$emit('menu')"><f-menu-icon /></a>
    </div>
    `
  };

  const FEditorHeader2 = {
    props: {
      value: { default: "", type: String }
    },
    mounted() {
      this.$emit(
        "input",
        "Fachwerk is a Javascript framework for creating interactive learning materials in the browser. Content can be authored in a Markdown format, with custom additions such as dynamic layouts, interactivity and wide range of HTML-like components."
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
