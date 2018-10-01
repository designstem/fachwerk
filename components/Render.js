import Anime from "./Anime.js";
import Buttons from "./Buttons.js";
import Math from "./Math.js";
import Poly from "./experimental/Poly.js";
import Slider from "./Slider.js";
import ThreeLine from "./ThreeLine.js";
import ThreeGroup from "./ThreeGroup.js";
import ThreeRegularPolygon from "./ThreeRegularPolygon.js";
import ThreeScene from "./ThreeScene.js";
import ThreeTriangle from "./ThreeTriangle.js";
import Transport from "./Transport.js";
import Triangle from "./Triangle.js";
import TwoScene from "./TwoScene.js";
import TwoPolygon from "./TwoPolygon.js";
import TwoGrid from "./TwoGrid.js";
import TwoLine from "./TwoLine.js";
import TwoRegularPolygon from "./TwoRegularPolygon.js";

import { rad2deg, deg2rad, cx, cy } from '../utils.js'

export default {
  components: {
    Anime,
    Buttons,
    Math,
    Poly,
    Slider,
    ThreeLine,
    ThreeGroup,
    ThreeRegularPolygon,
    ThreeScene,
    ThreeTriangle,
    Transport,
    Triangle,
    TwoScene,
    TwoPolygon,
    TwoGrid,
    TwoLine,
    TwoRegularPolygon
  },
  props: { t: String },
  data: () => ({
    render: null,
    someVariable: 0
  }),
  methods: {
    rad2deg,
    deg2rad,
    cx,
    cy
  },
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
