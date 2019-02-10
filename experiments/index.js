import { Vue,components, utils } from "../fachwerk.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

Vue.prototype.$global = new Vue({ data: { state: {} } });
new Vue({
  el: "#app",
  methods: { ...utils },
  template: `
  <f-scene grid><f-grid /></f-scene>
  `
});