import { Vue, components, utils } from "../fachwerk.js";

export function fachwerk(c = {}) {
  const config = {
    el: "#fachwerk",
    src: "./index.md",
    editor: "show",
    theme: "light",
    type: "slides",
    header: [],
    home: true,
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
    data: { config, preview: config.editor == "hide" ? 1 : 0 },
    methods: { ...utils },
    template: `
    <f-theme
      :theme="config.theme"
      :style="config.style"
    >
      <f-header v-if="config.header.length" :links="config.header" />
      <f-fetch :url="config.src">
      <div slot-scope="{ value }">
        <f-content
          v-if="config.editor == 'none'"
          :content="value"
          :type="config.type"
        />
        <f-content-editor
          v-if="config.editor != 'none'"
          :content="value"
          :preview="preview"
          style="--content-editor-min-height: 100vh"
          save-id="fachwerk"
          :type="config.type"
        />
      </div>
      </f-fetch>
      <f-home v-if="config.home" />
      <f-pager v-if="config.pager" />
      <f-keyboard alt character="e" @keydown="preview = 1 - preview" />
      <f-keyboard v-if="config.editor != 'none'" alt character="s" @keydown="send('save')" />
    </f-theme>
  `
  });
}
