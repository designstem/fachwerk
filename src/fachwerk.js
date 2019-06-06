import { Vue, components, utils } from "../fachwerk.js";

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
      type: config.type == "document" ? 1 : 0,
      preview: config.editor == "hide" ? 1 : 0
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
            "--content-editor-min-height": "100vh",
            "--content-editor-scale": 0.85,
            "--content-padding": this.type ? "40px 200px" : "",
            "--content-base": this.type
              ? "var(--base)"
              : "var(--content-preview-base)"
          },
          config.style
        );
      }
    },
    mounted() {
      Vue.prototype.$global.$on("edit", () => (this.preview = !this.preview));
    },
    template: `
    <f-theme
      :theme="config.theme"
      :style="config.style"
    >
      <f-header v-if="config.header.length" :links="config.header" />
      <f-menu v-if="config.menu" src="./menu.md" />
      <f-pager v-if="config.pager" />
      <f-fetch :src="config.src" v-slot="{ value }">
        <div>
          <f-content
            v-if="config.editor == 'none'"
            :content="isarray(value) ? flattenContent(value) : value"
            :type="config.type"
          />
          <f-content-editor
            v-if="config.editor != 'none'"
            :content="isarray(value) ? flattenContent(value) : value"
            :preview="preview"
            :style="editorStyle"
            :save-id="'fachwerk.' + isarray(config.src)"
            :type="['slides','document'][type]"
            @togglePreview="preview = !preview"
          />
        </div>
      </f-fetch>
      <f-footer v-if="config.footer" />
      <f-keyboard alt character="e" @keydown="preview = 1 - preview" />
      <f-keyboard alt character="t" @keydown="type = 1 - type" />
      <f-keyboard v-if="config.editor != 'none'" alt character="s" @keydown="send('save')" />
    </f-theme>
  `
  });
}
