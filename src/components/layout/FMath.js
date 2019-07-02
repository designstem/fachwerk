import { Css, katex, color } from "../../../fachwerk.js";

export default {
  mixins: [Css],
  description: `
Typesetting math equations in classic LaTeX format. It uses uses a [KaTeX](https://github.com/Khan/KaTeX) library with addional features such as colorized variables and multiline support.

> A good tutorial on LaTeX format can be found here:  https://en.wikibooks.org/wiki/LaTeX/Mathematics

#### Math equation

<f-math>
  b = a^2 + 100
  c = \\frac{a}{b} = \\frac{10}{a^2 + 100}
</f-math>

#### Inline math

Equations can also be set inline using \`inline\` prop.

Here are <f-math inline>a^2 + 100</f-math> some <f-math inline>c = \\frac{a}{b} = \\frac{10}{a^2 + 100}</f-math> examples.

#### Coloured math

There is a range of colors available for math equations. When color can be passed as a prop all contents of the equation will be coloured.

<f-math inline red>red</f-math> <f-math inline orange>orange</f-math> <f-math inline blue>blue</f-math> <f-math inline purple>purple</f-math> <f-math inline green>green</f-math> <f-math inline gray>gray</f-math>

For partial coloring, one has to use \`\\color{red}\` setting in the equation.

<f-math>
	color = \\color{red} red \\color{black}
  color = \\color{orange} orange \\color{black}
  color = \\color{blue} purple \\color{black}
  color = \\color{purple} purple \\color{black}
  color = \\color{green} green \\color{black}
  color = \\color{gray} gray  \\color{black}
</f-math>

***Note*** Setting \`\\color{red}\` or any other color acts as a *trigger*: if you set it, it will spread through the rest of the equation.

To stop the color spreading, you will have to add another setting \`\\color{black}\` to the point where coloring should be ending.

Spreading color:

<f-math>
	\\color{red} a \\cdot b \\cdot c
</f-math>

Non-spreading color:

<f-math>
	\\color{red} a \\color{black} \\cdot b \\cdot c
</f-math>

#### Live variables

When using live variables, it is recommended to set a \`:update\` prop that triggers instant re-rendering of the equation:

<f-slider integer set="m" />

Without \`:update\` prop:

<f-math>
  b = a + {{ get('m',0) }}
</f-math>

With \`:update\` prop:

<f-math :update="get('m',0)">
  b = a + {{ get('m',0) }}
</f-math>

  `,
  props: {
    inline: { default: false, type: Boolean },
    red: { default: false, type: Boolean },
    orange: { default: false, type: Boolean },
    purple: { default: false, type: Boolean },
    blue: { default: false, type: Boolean },
    green: { default: false, type: Boolean },
    gray: { default: false, type: Boolean },
    update: { default: null, type: [Number, String, Array, Object] }
  },
  data: () => ({ math: 0, timer: null }),
  methods: {
    renderMath() {
      let text = this.$slots.default[0].text ? this.$slots.default[0].text.trim() : ''
      if (this.red) { text = `\\color{red} ${text}` }
      if (this.orange) { text = `\\color{orange} ${text}` }
      if (this.purple) { text = `\\color{purple} ${text}` }
      if (this.blue) { text = `\\color{blue} ${text}` }
      if (this.green) { text = `\\color{green} ${text}` }
      if (this.gray) { text = `\\color{gray} ${text}` }
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
    this.timer = setInterval(() => this.renderMath(), 200);
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
        fontSize: inline ? '' : '1.1em',
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
