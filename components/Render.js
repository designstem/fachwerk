import Anime from "./Anime.js";
import Buttons from "./Buttons.js";
import Math from "./Math.js";
import Poly from "./experimental/Poly.js";
import Slider from "./Slider.js";
import ThreeRegularPolygon from "./ThreeRegularPolygon.js";
import ThreeScene from "./ThreeScene.js";
import Transport from "./Transport.js";
import Triangle from "./Triangle.js";

export default {
  components: {
    Anime,
    Buttons,
    Math,
    Poly,
    Slider,
    ThreeRegularPolygon,
    ThreeScene,
    Transport,
    Triangle,
  },
  props: { t: String },
  data: () => ({
    render: null,
    someVariable: null
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
