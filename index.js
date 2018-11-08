import Components from "./homepage/Components.js";
import Utils from "./homepage/Utils.js";
import Faq from "./homepage/Faq.js";

import * as components from './framework.js'
import * as utils from './utils.js'

for (const name in components) {
  Vue.component(name, components[name])
}

Vue.config.devtools = true

new Vue({
  components: { Components, Utils, Faq },
  el: "#app",
  methods: utils
});
