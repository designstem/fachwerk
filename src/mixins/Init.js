import { Vue } from "../../vendor.js";

export default {
  beforeCreate() {
    Vue.prototype.$global = new Vue({ data: { state: {} } });
  }
};
