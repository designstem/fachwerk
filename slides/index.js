const slides = `

# I am a slide

Hmm, more text here
---

## I am a slide too

---

Some text here

---

<Buttons :buttons="['First','Second']" />

---

Some math here

<Math math="x = sin(y)" />

---

Some \`\`\`code\`\`\` here

<pre>
let even_more_code = 0
</pre>

`;

import Render from '../components/Render.js'

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
