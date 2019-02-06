import { Vue } from "../../fachwerk.js";

export default {
  beforeCreate() {
    Vue.prototype.$global = new Vue({ data: { state: {} } });
  }
};
