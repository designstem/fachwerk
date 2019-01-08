export default {
  props: {
    name: { default: 'value', type: String}
  },
  description: `
> This component will be renamed so that \`data\` suffix will be removed.
  
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