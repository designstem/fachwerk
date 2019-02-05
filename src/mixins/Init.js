import { Vue } from '../../dist/vendor.js'

export default {
  beforeCreate() {
    Vue.prototype.$global = new Vue({ data: { state: {} } });
  }
}