export default {
  name: "Math",
  description: `Typesetting math equations using <a href="https://katex.org/docs/support_table.html">KaTeX library</a>, using classic <a href="https://reu.dimacs.rutgers.edu/Symbols.pdf">LaTeX math syntax</a>.`,
  example: `
Does not update
<Math>
  a = 10
  b = a^2 + 100
  c = \\frac{a}{b} = \\frac{10}{a^2 + 100}
</Math>

Does update
<Slider>
  <Math slot-scope="{value}" :value="value">
    a = 10
    b = a^2 + {{ value }}
    c = \\frac{a}{b} = \\frac{10}{a^2 + 100}
  </Math>
</Slider>
  `,
  props: ['value'],
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
    this.$watch("value", value => this.renderMath());
  },
  template: `
    <div v-html="math" />
  `
};

// export default {
//   name: "Math",
//   description: `Typesetting math equations using <a href="https://katex.org/docs/support_table.html">KaTeX library</a>, using classic <a href="https://reu.dimacs.rutgers.edu/Symbols.pdf">LaTeX math syntax</a>.`,
//   example: `
// Does not update
// <Math>
//   a = 10
//   b = a^2 + 100
//   c = \\frac{a}{b} = \\frac{10}{a^2 + 100}
// </Math>

// Does update when edited and slider moved
// <Slider>
//   <Math slot-scope="{value}" :value="value">
//     a = 10
//     b = a^2 + {{ value }}
//     c = \\frac{a}{b} = \\frac{10}{a^2 + 100}
//   </Math>
// </Slider>
//   `,
//   props: ["value"],
//   // computed: {
//   //   math() {
//   //     return this.$slots.default[0].text.replace('colorbox', '\\colorbox')
//   //   }
//   // },
//   methods: {
//     renderMath() {
//       katex.render(
//         this.$slots.default[0].text.trim().replace(/\n+/g, "\\newline"),
//         this.$refs.math,
//         {
//           throwOnError: false
//         }
//       );
//     }
//   },
//   mounted() {
//     this.renderMath();
//     this.$watch("value", value => this.renderMath());
//   },
//   template: `
//     <div ref="math" />
//   `
// };

