import Buttons from "./components/Buttons.js";
import Math from "./components/Math.js";
import Components from "./components/Components.js";

new Vue({
  components: { Buttons, Math, Components },
  el: "#app",
  data: ({ index: 0, slider: 50 })
});
