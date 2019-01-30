import { Css } from "../../../mixins.js";
import { color } from "../../../utils.js";

export default {
  mixins: [Css],
  description: `
Typesetting math equations in classic [LaTeX format](https://katex.org/docs/supported.html).

It uses uses a [KaTeX](https://github.com/Khan/KaTeX) library with addional features such as colorized variables and multiline support.

<f-math>
  a = 10
  b = a^2 + 100
  c = \\frac{a}{b} = \\frac{10}{a^2 + 100}
</f-math>

#### Live variables

When using live variables, it is recommended to set a \`:update\` prop that triggers instant re-rendering of the equation:

<f-slider-data>
  <f-math slot-scope="data" :update="data.value">
    a = 10
    b = a^2 + {{ data.value }}
    c = \\frac{a}{b} = \\frac{10}{a^2 + 100}
  </f-math>
</f-slider-data>

#### Variable colors

<f-math>
	color = \\color{red} red \\color{black}
  color = \\color{orange} orange \\color{black}
  color = \\color{blue} purple \\color{black}
  color = \\color{purple} purple \\color{black}
  color = \\color{green} green \\color{black}
  color = \\color{gray} gray  \\color{black}
</f-math>

Note that \`\color{red}\` symbol acts as a trigger: if you set it, it will populate through the rest of the equation. To stop the population, you will have to add another symbol \`\color{black}\` to the point where coloring should be ending.

Compare this

<f-math>
	\\color{red} a \\cdot b \\cdot c
</f-math>

to this

<f-math>
	\\color{red} a \\color{black} \\cdot b \\cdot c
</f-math>


  `,
  props: { update: { default: null } },
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
    <div v-html="math" />
  `,
  css: `
  .katex {
    font-size: 1.3em;
    color: var(--primary);
    padding: 1rem 2rem;
    display: block;
  }
  .katex .boxpad {
    padding: 0;
  }
  `
};
