import { Vue } from './dist/vendor.js'
import { Init } from "./dist/mixins.js";
import * as components from "./dist/components.js";
import * as utils from "./dist/utils.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

new Vue({
  mixins: [Init],
  el: "#app",
  methods: Object.assign({}, utils),
  data: { content: '', preview: 0 },
  mounted() {
    fetch('./index.md')
      .then(res => res.text())
      .then(content => this.content = content)
    this.set('componentCount', Object.keys(components).length)
    this.set('utilsCount', Object.keys(utils).length)
  }
});
