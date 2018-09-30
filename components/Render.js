import Buttons from "./Buttons.js";
import Math from "./Math.js";
import Anime from "./Anime.js";
import Transport from "./Transport.js";
import Slider from "./Slider.js";
import Triangle from "./Triangle.js";

import Poly from "./experimental/Poly.js";

export default {
  components: { Buttons, Math, Poly, Anime, Transport, Slider, Triangle },
  props: { t: String },
  data: () => ({
    render: null
  }),
  mounted() {
    this.$watch(
      "t",
      value => {
        const template = Vue.compile(value);
        this.render = template.render;
        this.$options.staticRenderFns = [];
        this._staticTrees = [];
        for (var i in template.staticRenderFns) {
          this.$options.staticRenderFns.push(template.staticRenderFns[i]);
        }
      },
      { immediate: true }
    );
  },
  render: function(h) {
    return this.render ? this.render() : h();
  }
};
