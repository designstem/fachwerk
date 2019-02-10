import { Vue, components, utils } from './fachwerk.js'

for (const name in components) {
  Vue.component(name, components[name]);
}

Vue.prototype.$global = new Vue({ data: { state: {} } });
new Vue({
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
