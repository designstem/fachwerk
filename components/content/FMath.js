import { Css } from '../../mixins.js'
import { color } from "../../utils.js";

export default {
  mixins: [Css],
  description: `
Typesetting math equations using <a href="https://github.com/Khan/KaTeX">KaTeX</a> library which supports most of the classic <a href="https://katex.org/docs/supported.html">LaTeX math syntax</a>.
<small>
It also supports dynamic content with inline variables but due to the technical limitations you will need to pass the <code>:update</code> prop of any type to the component to indicate the contents need to update.
</small>

<p>Does not update</p>
<f-math>
  a = 10
  b = a^2 + 100
  c = \\frac{a}{b} = \\frac{10}{a^2 + 100}
</f-math>

<p>Updates when edited and slider changed</p>
<f-slider-data>
  <f-math slot-scope="data" :update="data.value">
    a = 10
    b = a^2 + {{ data.value }}
    c = \\frac{a}{b} = \\frac{10}{a^2 + 100}
  </f-math>
</f-slider-data>
  `,
  props: ["update"],
  data: () => ({ math: 0, timer: null }),
  methods: {
    // String.raw`${this.$slots.default[0].text}`
    renderMath() {
      this.math = katex
        .renderToString(
          this.$slots.default[0].text.trim().replace(/\n+/g, "\\newline"),
          {
            throwOnError: false
          }
        )
        .replace(/background\-color\:red/g, "background-color:" + color("red"))
        .replace(
          /background\-color\:blue/g,
          "background-color:" + color("blue")
        )
        .replace(
          /background\-color\:green/g,
          "background-color:" + color("green")
        )
        .replace(
          /background\-color\:yellow/g,
          "background-color:" + color("yellow")
        )
        .replace(
          /background\-color\:orange/g,
          "background-color:" + color("orange")
        )
        .replace(
          /background\-color\:gray/g,
          "background-color:" + color("gray")
        );
    }
  },
  mounted() {
    this.renderMath()
    this.timer = setInterval(() =>  this.renderMath(),500)
    this.$watch("update", value => this.renderMath());
  },
  unmounted() {
    clearInterval(this.timer)
  },
  template: `
    <div v-html="math" />
  `,
  css: `
  .katex {
    font-size: 1.3em;
    color: var(--primary);
    padding: 1rem 2rem;
    display: block;
  }
  .katex .colorbox {
    border-radius: var(--border-radius);
    color: var(--white);
  }
  .katex .boxpad {
    padding: 0;
  }
  .katex .boxpad .mord {
    color: var(--white);
    font-size: calc(var(--base) * 2.5);
    /*font-family: var(--font-mono) !important;*/
  }
  `
};
