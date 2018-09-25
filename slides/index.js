const slides = `

# I am a slide

---

## I am a slide too

---

Some text here

---

<Buttons :buttons="['First','Second']" />

---

<Math math="x = sin(y)" />

---

<pre>
let y = 0
let x = Math.sin(y)
</pre>

`;

import Render from '../components/Render.js'

const Slide = {
  components: { Render },
  props: ['slide'],
  methods: { marked },
  computed: {
    t() {
      return marked(this.slide, { breaks: true })
    }
  },
  template: `
    <div style="
      border: 3px solid var(--color-gray-dark);
      padding: 1rem;
      background: white;
    ">
      <Render :t="t" />
    </div>
  `
}

new Vue({
  components: { Slide },
  el: "#app",
  data: () => ({ slides }),
  template: `
    <div style="
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 15rem 15rem 15rem;
      grid-gap: 1rem;
      padding: 2rem;
      background: var(--color-yellow);
      height: 100vh;
    ">
      <Slide v-for="(s,i) in slides.split('---')" :key="i" :slide="s" />
    </div>
  `
});
