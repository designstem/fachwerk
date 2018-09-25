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

<Buttons :buttons="['First','Second']" />

---

Some math here

<Math math="a + b" />

---

Some \`\`\`code\`\`\` here

<pre>
let even_more_code = 0
</pre>
  `
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
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 12rem 12rem 12rem 12rem;
      grid-gap: 1rem;
      padding: 2rem;
      background: var(--color-yellow);
      height: 100vh;
    ">
      <Slide v-for="(s,i) in md.split('---')" :key="i" :slide="s" />
    </div>
    </div>
  `
});
