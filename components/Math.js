import Css from "./Css.js";

export default {
  mixins: [Css],
  name: "Math",
  description: `
Typesetting math equations using <a href="https://github.com/Khan/KaTeX">KaTeX</a> library which supports most of the classic <a href="https://reu.dimacs.rutgers.edu/Symbols.pdf">LaTeX math syntax</a>.
<small>
It also supports dynamic content with inline variables but due to the technical limitations you will need to pass the <code>:update</code> prop of any type to the component to indicate the contents need to update.
</small>
  `,
  example: `
Does not update
<Math>
  a = 10
  b = a^2 + 100
  c = \\frac{a}{b} = \\frac{10}{a^2 + 100}
</Math>

Updates when edited and slider changed
<SliderData>
  <Math slot-scope="data" :update="data.value">
    a = 10
    b = a^2 + {{ data.value }}
    c = \\frac{a}{b} = \\frac{10}{a^2 + 100}
  </Math>
</SliderData>
  `,
  props: ["update"],
  data: () => ({ math: 0 }),
  methods: {
    renderMath() {
      this.math = katex.renderToString(
        this.$slots.default[0].text.trim().replace(/\n+/g, "\\newline"),
        {
          throwOnError: false
        }
      );
    }
  },
  mounted() {
    this.renderMath();
    this.$watch("update", value => this.renderMath());
  },
  template: `
    <div v-html="math" />
  `,
  css: `
  .katex {
    font-size: 1.3em;
    color: var(--color-gray-dark);
    padding: 1rem 2rem;
    display: block;
  }
  .katex .colorbox {
    border-radius: var(--border-radius);
    color: red;
    background: var(--color-blue-light) !important;
  }
  .katex .boxpad {
    padding: 0;
  }
  .katex .boxpad .mord {
    color: var(--color-blue-medium);
    font-family: var(--font-mono) !important;
    font-size: 1rem;
  }
  `
};
