import { Init } from "./mixins.js";
import * as components from "./components.js";
import * as utils from "./utils.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

new Vue({
  mixins: [Init],
  el: "#app",
  methods: Object.assign({}, utils),
  mounted() {
    this.set('componentCount', Object.keys(components).length)
    this.set('utilsCount', Object.keys(utils).length)
  }
});
