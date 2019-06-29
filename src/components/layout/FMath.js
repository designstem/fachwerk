import { Css, katex, color } from "../../../fachwerk.js";

export default {
  mixins: [Css],
  description: `
Typesetting math equations in classic LaTeX format. It uses uses a [KaTeX](https://github.com/Khan/KaTeX) library with addional features such as colorized variables and multiline support.

<f-math>
  b = a^2 + 100
  c = \\frac{a}{b} = \\frac{10}{a^2 + 100}
</f-math>

Equations can also be set inline using \`inline\` prop.

Here are <f-math inline>a^2 + 100</f-math> some <f-math inline>c = \\frac{a}{b} = \\frac{10}{a^2 + 100}</f-math> examples.



#### Live variables

When using live variables, it is recommended to set a \`:update\` prop that triggers instant re-rendering of the equation:

<f-slider>
  <f-math slot-scope="data" :update="data.value">
    a = 10
    b = a^2 + {{ data.value }}
    c = \\frac{a}{b} = \\frac{10}{a^2 + 100}
  </f-math>
</f-slider>
  `,
  props: {
    inline: { default: false, type: Boolean },
    update: { default: null, type: [Number, String, Array, Object] }
  },
  data: () => ({ math: 0, timer: null }),
  methods: {
    renderMath() {
      const text = this.$slots.default[0].text.trim();
      this.math = katex
        .renderToString(this.inline ? text : text.replace(/\n+/g, "\\newline"), {
          throwOnError: false
        })
        .replace(/color:black/g, "color:" + color("primary"))
        .replace(/color:primary/g, "color:" + color("primary"))
        .replace(/color:red/g, "color:" + color("red"))
        .replace(/color:orange/g, "color:" + color("orange"))
        .replace(/color:purple/g, "color:" + color("purple"))
        .replace(/color:blue/g, "color:" + color("blue"))
        .replace(/color:green/g, "color:" + color("green"))
        .replace(/color:gray/g, "color:" + color("gray"))
        .replace(/color\:\#555555/g, "color:" + color("primary"));
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
    <div
      v-html="math"
      :style="{
        display: inline ? 'inline' : 'block',
        padding: inline ? 0 : '1rem 2rem',
        fontSize: inline ? '' : '1.3em',
        color: 'color: var(--primary)'
      }"
    />
  `,
  css: `
  @import url("https://unpkg.com/katex/dist/katex.min.css");
  .katex .boxpad {
    padding: 0;
  }
  `
};
