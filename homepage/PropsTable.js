export default {
  props: { props: { default: () => {}, type: Object } },
  computed: {
    propRows() {
      return this.props ? Object.entries(this.props).map(p => ({
        Name: `<code>${p[0]}</code>`,
        Default: `<code>${p[1].default}</code>`,
        Type: `<code>${
          Array.isArray(p[1].default) ? "array" : typeof p[1].default
        }</code>`
      })) : null
    }
  },
  template: `
    <f-table v-if="propRows" :rows="propRows" style="--lightblue: transparent" />
  `
}