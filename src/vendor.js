import * as d3Shape from "d3-shape";
import * as d3Scale from "d3-scale";
import anime from "animejs";
import chroma from "chroma-js";
import CodeMirror from "codemirror";
import colorBlind from "color-blind";
import gfm from "codemirror/mode/gfm/gfm.js";
import katex from "katex";
import marked from "marked";
import store from "store/dist/store.modern.js";
import THREE from "three/build/three.js";
// 2.6+ import Vue from 'vue/dist/vue.esm.browser.js';
import Vue from "vue/dist/vue.js";

export {
  anime,
  chroma,
  CodeMirror,
  colorBlind,
  gfm,
  katex,
  marked,
  store,
  THREE,
  Vue
};

const d3 = Object.assign({}, d3Scale,d3Shape);
export { d3 };
