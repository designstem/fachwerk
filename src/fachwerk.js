import { Vue, components, utils, get, set } from "../fachwerk.js";
//import { Portal, PortalTarget } from "https://unpkg.com/portal-vue@2.1.6/dist/portal-vue.esm.js"
//console.log(Portal)

export function fachwerk(c = {}) {
  const config = {
    el: "#fachwerk",
    src: "./index.md",
    editor: "hide",
    theme: "light",
    type: "slides",
    header: [],
    footer: false,
    menu: true,
    pager: true,
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

  new Vue({
    el: config.el,
    data: {
      config,
    },
    methods: {
      ...utils,
      flattenContent(content) {
        return content
          .map(
            (c, i) =>
              `<!-- Start of ${this.config.src[i]} -->\n\n${c}\n\n<!-- End of ${
                this.config.src[i]
              } -->`
          )
          .join("\n\n---\n\n");
      }
    },
    computed: {
      editorStyle() {
        return Object.assign(
          {
            // "--content-editor-min-height": "100vh",
            // "--content-editor-scale": 0.85,
            // "--content-padding": this.type ? "40px 200px" : "",
            // "--content-base": this.type
            //   ? "var(--base)"
            //   : "calc(var(--base) / 2 + 0.5vw)"
          },
          config.style
        );
      }
    },
    mounted() {
      Vue.set(this.$global.$data.state, 'type', this.type)
    },
    template: `
    <div style="position: relative">
      <f-header v-if="config.header.length" :links="config.header" />
      <f-pager v-if="get('type','slides') == 'slides'" />
      <f-fetch :src="config.src" v-slot="{ value }">
      <f-layout :theme="config.theme" :style="config.style">
        <f-menu slot="menu" :src="config.src" />
          <div slot="content">
            <f-content-editor
              :content="isarray(value) ? flattenContent(value) : value"
              :style="editorStyle"
              :save-id="'fachwerk.' + isarray(config.src)"
              :type="get('type','slides')"
            />
          </div>
      </f-layout>
      </f-fetch>
      <f-footer v-if="config.footer" />
      <f-keyboard alt character="e" @keydown="preview = 1 - preview" />
      <f-keyboard alt character="t" @keydown="type = 1 - type" />
      <f-keyboard v-if="config.editor != 'none'" alt character="s" @keydown="send('save')" />
    </div>
  `
  });
}
