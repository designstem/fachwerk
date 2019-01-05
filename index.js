import * as components from "./framework.js";
import Init from "./components/Init.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

new Vue({
  mixins: [Init],
  el: "#app"
});
