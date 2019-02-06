import { require } from "d3-require";
import * as d3 from "d3-shape";
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
  d3,
  gfm,
  katex,
  marked,
  require,
  store,
  THREE,
  Vue
};

export async function loadAframe() {
  await require('https://unpkg.com/aframe@0.8.2').catch(() => {})
  await require('https://unpkg.com/aframe-rounded@1.0.3').catch(() => {})
}
