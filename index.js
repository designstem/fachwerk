import Components from "./homepage/Components.js";
import Components2 from "./homepage/Components2.js";
import Utils from "./homepage/Utils.js";
import Faq from "./homepage/Faq.js";

import * as components from './framework.js'
import * as utils from './utils.js'
import { sortedComponents } from "../framework.js";

for (const name in components) {
  Vue.component(name, components[name])
}

Vue.config.devtools = true

new Vue({
  components: { Components, Components2, Utils, Faq },
  el: "#app",
  methods: utils,
  data: { componentCount: sortedComponents.length }
});
