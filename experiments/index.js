import { Vue } from "../dist/vendor.js";
import { Init } from "../dist/mixins.js";
import * as components from "../dist/components.js";
import * as utils from "../dist/utils.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

new Vue({
  el: "#app",
  mixins: [Init],
  methods: { ...utils },
  template: `
<div style="padding: var(--base4);">
  Hello
</div>
  `
});