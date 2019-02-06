import { Vue, Init, components, utils } from "../fachwerk.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

new Vue({
  el: "#app",
  mixins: [Init],
  methods: { ...utils },
  template: `
  <f-fetch url="./index.md">
    <f-content
      slot-scope="data"
      :content="data.value"
    />
  </f-fetch>
  `
});