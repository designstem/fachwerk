import Render from '../components/Render.js'
import Buttons from "../components/Buttons.js";
import Poly from "../components/Poly.js";

import sample from "./sample.js"

const Slide = {
  components: { Render },
  props: ['slide'],
  methods: { marked },
  computed: {
    t() {
      return `<div>${marked(this.slide, { breaks: true })}</div>`
    }
  },
  template: `
    <div style="
      background: white;
      padding: 1.25rem;
      --border: 3px solid var(--color-gray-dark);
    ">
      <Render :t="t" />
    </div>
  `
}

new Vue({
  components: { Slide, Render, Buttons },
  el: "#app",
  data: () => ({
    md: sample,
    cols: 0
  }),
  template: `
    <div>
    <header>
      <div>
        <a href="..">Styles</a>
        → Theory
      </div>
      <Buttons v-model="cols" :buttons="['Continuous','1 col','2 col','3 col']" />
    </header>
    <div style="display: flex; height: 100vh;">
    <textarea v-model="md" style="
      padding: 1rem;
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
      padding: 1rem;
      background: var(--color-gray-darker);
      height: 100vh;
      flex: 1;
      overflow: auto;
    ">
    <div
      v-if="cols > 0"
      style="
        display: grid;
        grid-template-rows: repeat(10, minmax(12rem, 1fr));
      "
      :style="{
        gridGap: cols > 0 ? '1rem' : '',
        gridTemplateColumns: 'repeat(' + (cols > 0 ? cols : 1)   + ', 1fr)'
      }"
    >
        <Slide v-for="(s,i) in md.split('---')" :key="i" :slide="s" />
    </div>
    <Slide v-else :slide="md.replace('<hr>','')" /> 
    </div>
    </div>
    </div>
  `
});
