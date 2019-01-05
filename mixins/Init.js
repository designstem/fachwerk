export default {
  beforeCreate() {
    Vue.prototype.$global = new Vue({ data: { state: {} } });
  }
}