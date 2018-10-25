import Components from "./homepage/Components.js";
import Utils from "./homepage/Utils.js";
import Faq from "./homepage/Faq.js";

import * as components from './framework.js'

for (const name in components) {
  Vue.component(name, components[name])
}

Vue.config.devtools = true

new Vue({
  components: { Components, Utils, Faq },
  el: "#app",
  data: () => ({ inverted: false }),
  mounted() {
    document.addEventListener("keydown", e => {
      if (e.altKey && e.keyCode === 73) { // Alt + I
        this.inverted = !this.inverted
      }
    });
  }
});
