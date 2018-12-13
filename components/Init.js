export default {
  beforeCreate() {
    Vue.prototype.$global = new Vue({ data: { state: {} } });
    Vue.config.errorHandler = (err, vm, info) => {
      console.error(err);
    };
    Vue.config.warningHandler = (err, vm, info) => {
      console.warn(err);
    };
  }
}