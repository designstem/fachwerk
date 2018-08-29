export default {
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
