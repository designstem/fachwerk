import Buttons from "./Buttons.js";
import Math from "./Math.js";

export default {
  components: { Buttons, Math },
  props: {t: String},
  data: () => ({
    render: null
  }),
  mounted() {
    this.$watch(
      "t",
      value => {
        const template = Vue.compile(value);
        this.render = template.render;
        this.staticRenderFns = template.staticRenderFns;
      },
      { immediate: true }
    );
  },
  render: function (h) {
    return this.render ? this.render() : h()
  }
};
