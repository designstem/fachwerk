import Components from "./homepage/Components.js";
import Utils from "./homepage/Utils.js";
import Faq from "./homepage/Faq.js";

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
