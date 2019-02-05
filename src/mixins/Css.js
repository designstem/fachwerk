import { setCssVariable } from "../../dist/utils.js";

export default {
  created() {
    if (this.$options.css) {
      const el = document.createElement("style");
      el.innerHTML = this.$options.css;
      document.querySelector("head").appendChild(el);
    }
    if (this.$options.cssprops) {
      Object.entries(this.$options.cssprops).forEach(([key, value]) => {
        setCssVariable(key,value.default)
      });
    }
  }
};
