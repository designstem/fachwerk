import { Init } from "../mixins.js";
import * as components from "../components.js";
import * as utils from "../utils.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

new Vue({
  el: "#app",
  mixins: [Init],
  methods: { ...utils },
  data: { preview: 0, header: 1 },
  template: `
  <div>
    <header v-if="header">
      Sample content
    </header>
    <f-fetch-data url="./index.md">
      <f-content-editor
        slot-scope="{ value }"
        :content="value"
        :preview="preview"
        style="--content-editor-min-height: 100vh"
        save-id="playground"
      />
    </f-fetch-data>
    <f-keyboard alt character="p" @keyup="preview = 1 - preview" />
    <f-keyboard alt character="h" @keyup="header = 1 - header" />
    <f-keyboard alt character="s" @keydown="send('save')" />
    <f-keyboard alt character="r" @keyup="send('reset')" />
    <f-keyboard alt character="left" @keydown="send('prev')" />
    <f-keyboard alt character="right" @keydown="send('next')" />
  </div>
`
});