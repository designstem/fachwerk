import { Css } from "../../mixins.js";
import { color } from "../../utils.js";

export default {
  mixins: [Css],
  description: `
Typesetting math equations in classic [LaTeX](https://katex.org/docs/supported.html) format.

Tecnically the framework uses [KaTeX](https://github.com/Khan/KaTeX) library with addional features such as colorized variables and simple multiline support.

<f-math>
  a = 10
  b = a^2 + 100
  c = \\frac{a}{b} = \\frac{10}{a^2 + 100}
</f-math>

When using live variables, it is recommended to set a \`:update\` prop that triggers instant re-rendering of the equation:

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
          /background\-color\:orange/g,
          "background-color:" + color("orange")
        )
        .replace(
          /background\-color\:yellow/g,
          "background-color:" + color("yellow")
        )
        .replace(
          /background\-color\:purple/g,
          "background-color:" + color("purple")
        )
        .replace(
          /background\-color\:blue/g,
          "background-color:" + color("blue")
        )
        .replace(
          /background\-color\:green/g,
          "background-color:" + color("green")
        )
        .replace(
          /background\-color\:gray/g,
          "background-color:" + color("gray")
        )
    }
  },
  mounted() {
    this.renderMath();
    this.timer = setInterval(() => this.renderMath(), 500);
    this.$watch("update", value => this.renderMath());
  },
  unmounted() {
    clearInterval(this.timer);
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
    border-radius: 3px;
    color: var(--white);
  }
  .katex .boxpad {
    padding: 0;
  }
  .katex .boxpad .mord {
    color: var(--white);
    font-size: calc(var(--base) * 2);
    font-family: var(--font-sansserif);
  }
  `
};
