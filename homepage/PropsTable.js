export default {
  props: { props: { default: {}, type: Number } },
  computed: {
    propRows() {
      return Object.entries(this.props).map(p => ({
        Name: `<code>${p[0]}</code>`,
        Default: `<code>${p[1].default}</code>`,
        Type: `<code>${
          Array.isArray(p[1].default) ? "array" : typeof p[1].default
        }</code>`
      }));
    }
  },
  template: `
    <f-table :rows="propRows" style="--lightblue: transparent" />
  `
}