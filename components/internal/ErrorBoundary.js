// export default {
//   data: () => ({
//     error: false
//   }),
//   errorCaptured(err, vm, info) {
//     this.error = true
//   },
//   render(h) {
//     return h('div', [this.$slots.default[0]])
//   }
// }

export default {
  data: () => ({
    error: false,
    hasUpdate: false
  }),
  errorCaptured(err, vm, info) {
    this.error = this.hasUpdate ? false : true
    this.hasUpdate = false
    this.$forceUpdate()
  },
  mounted() {
    this.$parent.$on("clearError", () => {
      this.hasUpdate = true
      this.error = false
      this.$forceUpdate()
    });
  },
  render(h) {
    return h("div", [
      h("p", this.hasUpdate ? "Update" : ""),
      h("p", this.error ? "Something is not right" : ""),
      this.$slots.default[0]
    ]);
  }
}