import { Vue, Init, components, utils } from "../fachwerk.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

new Vue({
  el: "#app",
  mixins: [Init],
  methods: { ...utils },
  template: `
  <div>A</div>
  `
});