import * as components from "./framework.js";
import * as utils from "./utils.js";
for (const name in components) {
  Vue.component(name, components[name]);
}

Vue.config.devtools = true
new Vue({
  el: "#app",
  methods: utils,
  template: `
<div>
<f-artboard grid>
  <f-regularpolygon r="20" rotation="0" scale="10" />

</f-artboard>
</div>
  `
})
