import Components from "./components/internal/Components.js";
import Faq from "./components/internal/Faq.js";

// Vue.config.warnHandler = function(msg, vm, trace) {
// };

new Vue({
  components: { Components, Faq },
  el: "#app",
});
