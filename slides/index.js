import Render from '../components/Render.js'
import Buttons from "../components/Buttons.js";

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
      padding: 1rem;
      border: 3px solid var(--color-gray-dark);
    ">
      <Render :t="t" />
  `
}

new Vue({
  components: { Slide, Render, Buttons },
  el: "#app",
  data: () => ({
    md: `
# I am a slide

Hmm, more text here

---

## I am a slide too

---

Some *text* **here**

* Need
* Bullets!

---

<Buttons :value="0" :buttons="['First','Second']" />

---

> Normal polygons are **polygons** with all \`sides\` and angles equal. Are formed by \`triangles\`, normally *isosceles*.

<Math math="a + b" />

<input type="range" />

---

Some \`\`\`code\`\`\` here

<pre>
let even_more_code = 0
</pre>
  `,
    cols: 3
  }),
  template: `
    <div style="display: flex; height: 100vh;">
    <textarea v-model="md" style="
      padding: 1rem;
      color: var(--color-gray-dark);
      font-family: var(--font-mono);
      border: none;
      height: 100vh;
      line-height: 1rem;
      width: 350px;
      outline: none;
      color: #eee;
      background: var(--color-gray-dark);
      font-size: 0.8rem;
    "/>
    <div style="
      padding: 1rem;
      background: var(--color-yellow);
      height: 100vh;
      flex: 1;
      overflow: auto;
    ">
    <Buttons style="margin-bottom: 1rem" v-model="cols" :buttons="['Continuous','1 col','2 col','3 col']" />
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
  `
});
