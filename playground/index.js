import { Vue, components } from "../fachwerk.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

new Vue({
  el: '#fachwerk',
  template: `
  <f-fetch src="./index.md" v-slot="{ value }">
  <div style="display: flex;">
    <f-advanced-editor
      style="width: 40vw"
      :value="value"
      save-id="fachwerk"
    />
    <f-content style="width: 60vw" :content="value" />
  </div>
  </f-fetch>  `
})