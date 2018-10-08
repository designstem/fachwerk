import Components from "./components/internal/Components.js";
import Utils from "./components/internal/Utils.js";
import Faq from "./components/internal/Faq.js";

// Vue.config.warnHandler = function(msg, vm, trace) {
// };

new Vue({
  components: { Components, Utils, Faq },
  el: "#app",
});
