import { Vue, components, utils } from "../fachwerk.js";

export function fachwerk(c = {}) {
  const config = {
    el: "#fachwerk",
    url: "./index.md",
    editor: "show",
    components: {},
    ...c
  };
  for (const name in components) {
    Vue.component(name, components[name]);
  }
  for (const name in config.components) {
    Vue.component(name, config.components[name]);
  }
  Vue.prototype.$global = new Vue({ data: { state: {} } });
  new Vue({
    el: config.el,
    methods: { ...utils },
    data: { config, preview: config.editor == "hide" ? 1 : 0 },
    template: `
    <div>
      <f-fetch :url="config.url">
      <div slot-scope="{ value }">
        <f-content
          v-if="config.editor == 'none'"
          :content="value"
        />
        <f-content-editor
          v-if="config.editor != 'none'"
          :content="value"
          :preview="preview"
          style="--content-editor-min-height: 100vh"
          save-id="fachwerk"
        />
      </div>
    </f-fetch>
    <f-pager />
    <f-keyboard alt character="e" @keydown="preview = 1 - preview" />
    <f-keyboard v-if="config.editor != 'none'" alt character="s" @keydown="send('save')" />
    </div>
  `
  });
}
