export default {
  created() {
    if (this.$options.css) {
      const el = document.createElement("style");
      el.innerHTML = this.$options.css;
      document.querySelector("head").appendChild(el);
    }
  }
};
