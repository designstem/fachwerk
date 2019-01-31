export default {
  props: {
    name: { default: 'value', type: String}
  },
  description: `
Description to be written.
  `,
  data: () => ({ value: null }),
  mounted() {
    if (this.$global) {
      this.$global.$on(this.name, value => this.value = value)
    }
  },
  template: `
    <div>
      <slot :value="value" />
    </div>
  `
}