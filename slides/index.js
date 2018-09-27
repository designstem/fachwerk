import Render from '../components/Render.js'
import Buttons from "../components/Buttons.js";
import Poly from "../components/Poly.js";

import sample from "./sample.js"

const Slide = {
  components: { Render },
  props: ["slide"],
  methods: { marked },
  computed: {
    t() {
      return `<div>${marked(this.slide, { breaks: true })}</div>`;
    }
  },
  template: `
    <div
      style="
        background: white;
        padding: 2rem;
        height: calc(100vh - 5rem);
      "
      class="slide"
    >
      <Render :t="t" />
    </div>
  `
};

new Vue({
  components: { Slide, Render, Buttons },
  el: "#app",
  data: () => ({
    md: sample,
    cols: 0,
    currentIndex: 0
  }),
  computed: {
    slides() {
      return this.md.split("---");
    }
  },
  methods: {
    prev() {
      this.currentIndex > 0 && this.currentIndex--;
    },
    next() {
      this.currentIndex < this.slides.length - 1 && this.currentIndex++;
    }
  },
  mounted() {
    document.addEventListener('keydown', e => {
      if (e.keyCode == 37) { this.prev() }
      if (e.keyCode == 39) { this.next() }
    })
  },
  template: `
    <div>
    <header>
      <div>
        <a href="..">Styles</a>
        → Slide {{ currentIndex + 1 }}
      </div>
      <div class="buttons">
        <div class="button_tertiary" @click="prev">← Previous</div>
        <div class="button_tertiary" @click="next">Next →</div>
      </div>
    </header>
    <div style="display: flex; height: 100vh;">
    <textarea v-model="md" style="
      padding: 1rem;
      color: var(--color-gray-darker);
      font-family: var(--font-mono);
      border: none;
      height: 100vh;
      line-height: 1.2rem;
      width: 300px;
      outline: none;
      color: #eee;
      background: var(--color-gray-darker);
      font-size: 0.8rem;
    "/>
    <div style="
      background: var(--color-yellow);
      height: 100vh;
      flex: 1;
    ">
    <div>
      <Slide
        v-for="(s,i) in slides"
        :key="i"
        :slide="s"
        v-show="i == currentIndex"
      />
    </div>
    </div>
    </div>
    </div>
  `
});
