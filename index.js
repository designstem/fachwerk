import Buttons from "./components/Buttons.js";
import Math from "./components/Math.js";

new Vue({
  components: { Buttons, Math },
  el: "#app",
  data: ({ index: 0, slider: 50 })
});
