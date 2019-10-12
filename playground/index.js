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
      edit: { default: 'hide', type: String },
      menu: { default: 'hide', type: String },
      type: { default: 'document', type: String },
    },
    data: () => ({
      currentContent: '',
      currentEdit: false,
      currentMenu: false,
      currentType: 'document'
    }),
    mounted() {
      this.$global.$on("edit", () => {
        console.log('edit')
        this.currentEdit = !this.currentEdit
      });
      this.$global.$on("type", () => {
        this.currentType = this.currentType === 'document' ? 'slider' : 'document'
      });
    },
    template: `
    <div class="grid" style="--cols: 200px 1fr 1fr; --gap: 0">
      <div>Menu</div>
      <div v-if="currentEdit">
        <f-editor-header2 v-model="currentContent" />
        <f-advanced-editor v-model="currentContent" />
      </div>
      <div>
        <f-content-header2 :content="currentContent" />
        <f-content2 :edit="currentEdit" :content="currentContent" />
      </div>
      <pre style="position: fixed; bottom: 0; left: var(--base2);">
currentEdit: {{ currentEdit }}
currentMenu: {{ currentMenu }}
currentType: {{ currentType }}</pre>
    </div>
    `
  };

  const FEditorHeader2 = {
    props: {
      value: { default: '', type: String },
    },
    mounted() {
      this.$emit('input', 'It is me')
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

  const FContent2 = {
    props: {
      content: { default: '', type: String },
    },
    template: `
    <div style="
      padding: var(--base5);
    "
      v-html="content"
    />  
    `
  };

  const FContentHeader2 = {
    props: {
      content: { default: '', type: String },
    },
    template: `
    <div style="
      height: var(--base6);
      padding: 0 var(--base);
      background: var(--lightergray);
      display: flex;
      align-items: center;
      justify-content: space-between;
    ">
      <a class="quaternary" @click="$global.$emit('edit')">Edit</a>
    </div>
    `
  };

  Vue.component('FContentEditor2', FContentEditor2);
  Vue.component('FEditorHeader2', FEditorHeader2);
  Vue.component('FContent2', FContent2);
  Vue.component('FContentHeader2', FContentHeader2);

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