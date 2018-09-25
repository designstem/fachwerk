const slides = `

# Hello first slide

---

## Hello second slide

---

Something else here

`

const Slide = {
  props: ['slide'],
  methods: { marked },
  template: `
    <div style="
      border: 3px solid var(--color-gray-dark);
      padding: 1rem;
      background: white;
    ">
      <div v-html="marked(slide, { breaks: true })" />
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
      grid-template-rows: 15rem;
      grid-gap: 1rem;
      padding: 1rem;
      background: var(--color-gray-light);
      height: 100vh;
    ">
      <Slide v-for="(s,i) in slides.split('---')" :key="i" :slide="s" />
    </div>
  `
});
