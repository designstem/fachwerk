export default {
  name: "Math",
  description: 'Typesetting math equations using LaTeX',
  example: `
<Math math="c = a^2 + b^2 + 10" />
  `,
  props: ["math"],
  mounted() {
    this.$watch("math", value => katex.render(value, this.$refs.math), {
      immediate: true
    });
  },
  template: `
    <div ref="math" />
  `
};
